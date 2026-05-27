import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCcw } from "lucide-react";

type Props = {
  modelPath?: string;
  className?: string;
  autoRotate?: boolean;
};

export function ModelViewer({
  modelPath = "/models/subjugator.glb",
  className = "",
  autoRotate = true,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Lights — bright neutral fill so the model reads clearly from every angle
    scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    scene.add(new THREE.HemisphereLight(0xeaf6ff, 0x0a1a2d, 1.0));

    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(5, 6, 5);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 1.1);
    fill.position.set(-5, 3, -4);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffffff, 0.8);
    rim.position.set(0, -4, -5);
    scene.add(rim);

    const cyan = new THREE.PointLight(0x00d4ff, 2.0, 15);
    cyan.position.set(-3, 2, 3);
    scene.add(cyan);

    const warm = new THREE.PointLight(0xfa4616, 1.4, 15);
    warm.position.set(3, -2, -3);
    scene.add(warm);

    const controls = new OrbitControls(camera, canvas);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;
    controls.minDistance = 1.5;
    controls.maxDistance = 12;
    // Store initial camera + target so .reset() snaps back here
    controls.saveState();

    // First user interaction permanently stops auto-rotation
    const stopAutoRotate = () => {
      controls.autoRotate = false;
    };
    canvas.addEventListener("pointerdown", stopAutoRotate, { once: true });
    canvas.addEventListener("wheel", stopAutoRotate, { once: true, passive: true });

    let model: THREE.Group | null = null;
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;

        // Center + scale to a uniform bounding sphere
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        if (maxDim > 0) {
          const scale = 3.5 / maxDim;
          model.scale.setScalar(scale);
        }

        scene.add(model);
        setLoaded(true);
      },
      (xhr) => {
        if (xhr.total) setProgress((xhr.loaded / xhr.total) * 100);
      },
      (err) => {
        console.error("Model load failed:", err);
        setError("Failed to load 3D model");
      }
    );

    let frameId = 0;
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointerdown", stopAutoRotate);
      canvas.removeEventListener("wheel", stopAutoRotate);
      ro.disconnect();
      controls.dispose();
      controlsRef.current = null;
      renderer.dispose();
      if (model) {
        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh;
          if (mesh.isMesh) {
            mesh.geometry?.dispose();
            const mat = mesh.material as
              | THREE.Material
              | THREE.Material[]
              | undefined;
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else mat?.dispose();
          }
        });
      }
    };
  }, [modelPath, autoRotate]);

  const handleReset = () => {
    controlsRef.current?.reset();
  };

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="block w-full h-full rounded-2xl cursor-grab active:cursor-grabbing"
      />

      {!loaded && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#030d1a]/60 backdrop-blur-sm rounded-2xl pointer-events-none">
          <div className="w-10 h-10 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin mb-3" />
          <p
            className="text-cyan-300 text-xs tracking-widest uppercase"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            Loading model {progress > 0 && `· ${Math.round(progress)}%`}
          </p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#030d1a]/80 rounded-2xl">
          <p className="text-red-300 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            {error}
          </p>
        </div>
      )}

      {loaded && (
        <>
          <div className="absolute bottom-3 left-3 text-xs pointer-events-none">
            <span
              className="px-2.5 py-1 rounded bg-[#030d1a]/80 border border-cyan-400/20 text-cyan-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Drag to rotate · Scroll to zoom
            </span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            aria-label="Reset view"
            title="Reset orientation"
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs bg-[#030d1a]/80 border border-cyan-400/20 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400/50 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <RotateCcw size={13} />
            Reset
          </button>
        </>
      )}
    </div>
  );
}
