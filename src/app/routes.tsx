import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Hero } from "./pages/Hero";
import { About } from "./pages/About";
import { Vehicle } from "./pages/Vehicle";
import { Competitions } from "./pages/Competitions";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Hero },
      { path: "about", Component: About },
      { path: "vehicle", Component: Vehicle },
      { path: "competitions", Component: Competitions },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);
