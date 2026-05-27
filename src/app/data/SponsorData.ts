export interface SponsorYear {
  year: number;
  label: string;
  href: string;
}

export interface SponsorEntry {
  name: string;
  logo: string;
  description: string;
  imageAlign?: "left" | "right";
  width?: number;
}

export interface SponsorTier {
  name: string;
  sponsors: SponsorEntry[];
}

export interface SponsorYearDetail {
  title: string;
  intro: string;
  sponsors?: SponsorEntry[];
  tiers?: SponsorTier[];
}

export const SPONSOR_DATA: Record<number, SponsorYearDetail> = {
  2026: {
    title: "Sponsors 2026",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida. For more information about becoming a sponsor, please see our sponsorship packet.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "Sylphase",
            logo: "/images/Sylphase.png",
            description: "",
            width: 300,
          },
          {
            name: "L3Harris",
            logo: "/images/L3Harris.png",
            description: "",
            width: 600,
          },
          {
            name: "Erik de la Iglesia",
            logo: "/images/Erik.png",
            description: "MIL Alumnus",
            width: 147,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 450,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "IEEE Gainesville",
            logo: "/images/ieeelogo.gif",
            description: "Gainesville Section",
            width: 250,
          },
          {
            name: "Matt Langford",
            logo: "/images/Matthew_Langford.jpg",
            description: "MIL Alumnus",
            width: 147,
          },
          {
            name: "Anonymous",
            logo: "/images/sponsor_anonymous.svg",
            description: "MIL Alumnus",
            width: 147,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Dr. Andrew Gray",
            logo: "/images/Andy_Gray.jpg",
            description: "MIL Alumnus",
            width: 147,
          },
          {
            name: "DigiKey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
        ],
      },
    ],
  },
  2023: {
    title: "Sponsors 2023",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida. For more information about becoming a sponsor, please see our sponsorship packet.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "L3Harris",
            logo: "/images/L3Harris.png",
            description: "",
            width: 600,
          },
          {
            name: "Sylphase",
            logo: "/images/Sylphase.png",
            description: "",
            width: 300,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 450,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Apple",
            logo: "/images/apple.png",
            description: "",
            width: 100,
          },
          {
            name: "Qualcomm",
            logo: "/images/qualcomm.png",
            description: "",
            width: 200,
          },
          {
            name: "Kevin Phillipson",
            logo: "/images/Kevin_Phillipson.png",
            description: "MIL Alumnus",
            width: 147,
          },
          {
            name: "Edward Khallal",
            logo: "/images/ed_kallal.png",
            description: "MIL Alumnus",
            width: 147,
          },
        ],
      },
    ],
  },
  2022: {
    title: "Sponsors 2022",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida. For more information about becoming a sponsor, please see our sponsorship packet.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "L3Harris",
            logo: "/images/L3Harris.png",
            description: "",
            width: 600,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "Erik de la Iglesia",
            logo: "/images/Erik.png",
            description: "MIL Alumnus, BSEE, 1996. Stanford, MSEE, 1997",
            width: 92,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 200,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 313,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
        ],
      },
    ],
  },
  2021: {
    title: "Sponsors 2021",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida. For more information about becoming a sponsor, please see our sponsorship packet.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "L3Harris",
            logo: "/images/L3Harris.png",
            description: "",
            width: 600,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "Erik de la Iglesia",
            logo: "/images/Erik.png",
            description: "MIL Alumnus, BSEE, 1996. Stanford, MSEE, 1997",
            width: 92,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 450,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 313,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Sylphase",
            logo: "/images/Sylphase.png",
            description: "",
            width: 375,
          },
        ],
      },
    ],
  },
  2020: {
    title: "Sponsors 2020",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida. For more information about becoming a sponsor, please see our sponsorship packet.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "L3Harris",
            logo: "/images/L3Harris.png",
            description: "",
            width: 600,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 450,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 313,
          },
          {
            name: "3DS",
            logo: "/images/3DS.jpg",
            description: "",
            width: 313,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Sylphase",
            logo: "/images/Sylphase.png",
            description: "",
            width: 375,
          },
        ],
      },
    ],
  },
  2019: {
    title: "Sponsors 2019",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 320,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
          {
            name: "UF MAE",
            logo: "/images/MAE_Logo1.jpg",
            description: "",
            width: 250,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "Kevin Phillipson",
            logo: "/images/Kevin_Phillipson.png",
            description: "Kevin Phillipson, Bachelors. MIL Alumnus, 2008",
            width: 147,
          },
          {
            name: "Apple",
            logo: "/images/apple.png",
            description: "",
            width: 200,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 313,
          },
          {
            name: "3DS",
            logo: "/images/3DS.jpg",
            description: "",
            width: 313,
          },
          {
            name: "SolidCAM",
            logo: "/images/solidcam.png",
            description: "",
            width: 313,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Edward Kallal",
            logo: "/images/ed_kallal.png",
            description: "Edward Kallal. MIL Alumnus",
            width: 147,
          },
          {
            name: "Qualcomm",
            logo: "/images/qualcomm.png",
            description: "",
            width: 400,
          },
          {
            name: "Charles Baker Jr.",
            logo: "/images/charles_baker.png",
            description: "Charles Baker Jr. MIL Alumnus",
            width: 147,
          },
          {
            name: "Cisco",
            logo: "/images/cisco.png",
            description: "",
            width: 400,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits-300x102.jpg",
            description: "",
            width: 250,
          },
          {
            name: "NVIDIA",
            logo: "/images/nvidia.png",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Sylphase",
            logo: "/images/Sylphase.png",
            description: "",
            width: 375,
          },
        ],
      },
    ],
  },
  2018: {
    title: "Sponsors 2018",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
          {
            name: "UF MAE",
            logo: "/images/MAE_Logo1.jpg",
            description: "",
            width: 250,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 320,
          },
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 500,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 313,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits-300x102.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "UF Engineering",
            logo: "/images/HWCOE.png",
            description: "",
            width: 165,
          },
          {
            name: "Kevin Phillipson",
            logo: "/images/Kevin_Phillipson.png",
            description: "Kevin Phillipson, Bachelors. MIL Alumnus, 2008",
            width: 82,
          },
        ],
      },
    ],
  },
  2017: {
    title: "Sponsors 2017",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Patron Sponsors",
        sponsors: [
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Wertheim College of Engineering",
            logo: "/images/Wertheim_COE.png",
            description: "",
            width: 241,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "VideoRay",
            logo: "/images/VideoRay_logo.png",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
          {
            name: "UF MAE",
            logo: "/images/MAE_Logo1.jpg",
            description: "",
            width: 250,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Sensonor AS",
            logo: "/images/sensonor_logo.png",
            description: "",
            width: 435,
          },
          {
            name: "Keysight Technologies",
            logo: "/images/keysight_logo.png",
            description: "",
            width: 435,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks_logo.png",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "Anodize Inc",
            logo: "/images/anodize_inc.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Gator Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "",
            width: 168,
          },
          {
            name: "Seacon",
            logo: "/images/seacon_logo.png",
            description: "",
            width: 250,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits-300x102.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 250,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Deepsea",
            logo: "/images/deepsea.png",
            description: "",
            width: 250,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
          {
            name: "Matthew Koenn",
            logo: "/images/no_image.png",
            description: "Matthew Koenn, Masters. MIL Alumnus, 2007",
            width: 85,
          },
        ],
      },
    ],
  },
  2016: {
    title: "Sponsors 2016",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "VideoRay",
            logo: "/images/VideoRay_logo.png",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
          {
            name: "UF MAE",
            logo: "/images/MAE_Logo1.jpg",
            description: "",
            width: 250,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Sensonor AS",
            logo: "/images/sensonor_logo.png",
            description: "",
            width: 435,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "Anodize Inc",
            logo: "/images/anodize_inc.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Gator Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "",
            width: 168,
          },
          {
            name: "Seacon",
            logo: "/images/seacon_logo.png",
            description: "",
            width: 250,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits-300x102.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 250,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks.jpg",
            description: "",
            width: 250,
          },
          {
            name: "IDS Imaging",
            logo: "/images/ids_logo.gif",
            description: "",
            width: 250,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 106,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Deepsea",
            logo: "/images/deepsea.png",
            description: "",
            width: 250,
          },
          {
            name: "Matthew Koenn",
            logo: "/images/no_image.png",
            description: "Matthew Koenn, Masters. MIL Alumnus, 2007",
            width: 74,
          },
        ],
      },
    ],
  },
  2015: {
    title: "Sponsors 2015",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Platinum Sponsors",
        sponsors: [
          {
            name: "VideoRay",
            logo: "/images/VideoRay_logo.png",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
          {
            name: "UF MAE",
            logo: "/images/MAE_Logo1.jpg",
            description: "",
            width: 250,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 500,
          },
          {
            name: "Sensonor AS",
            logo: "/images/sensonor_logo.png",
            description: "",
            width: 435,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "Anodize Inc",
            logo: "/images/anodize_inc.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Gator Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "",
            width: 168,
          },
          {
            name: "Seacon",
            logo: "/images/seacon_logo.png",
            description: "",
            width: 250,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits-300x102.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Texas Instruments",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 250,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks.jpg",
            description: "",
            width: 250,
          },
          {
            name: "IDS Imaging",
            logo: "/images/ids_logo.gif",
            description: "",
            width: 250,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Deepsea",
            logo: "/images/deepsea.png",
            description: "",
            width: 250,
          },
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
          {
            name: "Matthew Koenn",
            logo: "/images/no_image.png",
            description: "Matthew Koenn, Masters. MIL Alumnus, 2007",
            width: 92,
          },
        ],
      },
    ],
  },
  2014: {
    title: "Sponsors 2014",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "UF ECE",
            logo: "/images/ece.png",
            description: "",
            width: 435,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 500,
          },
          {
            name: "UF MAE",
            logo: "/images/mae_logo.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 500,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "UF Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "",
            width: 168,
          },
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Altera",
            logo: "/images/sponsor_altera.jpg",
            description: "",
            width: 250,
          },
          {
            name: "TI",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Theia Technologies",
            logo: "/images/Theia-Technologies.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Anodize Inc",
            logo: "/images/anodize_inc.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Seacon",
            logo: "/images/sponsor_seacon.jpg",
            description: "",
            width: 250,
          },
          {
            name: "IDS Imaging",
            logo: "/images/ids_logo.gif",
            description: "",
            width: 250,
          },
          {
            name: "VideoRay",
            logo: "/images/videoray_logo.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Seabotix",
            logo: "/images/seabotix_logo.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Deepsea",
            logo: "/images/deepsea.png",
            description: "",
            width: 250,
          },
          {
            name: "SolidWorks",
            logo: "/images/solidworks.jpg",
            description: "",
            width: 250,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Reid Harrison",
            logo: "/images/reid_harrison_sponsor.jpg",
            description: "Reid Harrison, PhD. MIL Alumnus, 2004",
            width: 92,
          },
          {
            name: "Edward Kallal",
            logo: "/images/no_image.png",
            description: "Edward Kallal, BSEE. MIL Alumnus, 2010",
            width: 92,
          },
        ],
      },
    ],
  },
  2013: {
    title: "Sponsors 2013",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Diamond Sponsors",
        sponsors: [
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 400,
          },
        ],
      },
      {
        name: "Gold Sponsors",
        sponsors: [
          {
            name: "Lockheed Martin",
            logo: "/images/Lockheed-Martin.jpg",
            description: "",
            width: 350,
          },
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 350,
          },
        ],
      },
      {
        name: "Silver Sponsors",
        sponsors: [
          {
            name: "UF Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "Electrical and Computer Engineering, Mechanical and Aerospace Engineering",
            width: 168,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 250,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits.jpg",
            description: "",
            width: 250,
          },
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 240,
          },
          {
            name: "Altera",
            logo: "/images/sponsor_altera.jpg",
            description: "",
            width: 250,
          },
          {
            name: "TI",
            logo: "/images/ti-300x105.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Theia Technologies",
            logo: "/images/Theia-Technologies.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Anodize Inc",
            logo: "/images/anodize_inc.jpg",
            description: "",
            width: 250,
          },
          {
            name: "VideoRay",
            logo: "/images/videoray_logo.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Seabotix",
            logo: "/images/seabotix_logo.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Seacon",
            logo: "/images/sponsor_seacon.jpg",
            description: "",
            width: 250,
          },
        ],
      },
      {
        name: "Bronze Sponsors",
        sponsors: [
          {
            name: "Edward Kallal",
            logo: "/images/no_image.png",
            description: "Edward Kallal, BSEE. MIL Alumnus, 2010",
            width: 100,
          },
        ],
      },
    ],
  },
    2012: {
    title: "Sponsors 2012",
    intro: "We have been very fortunate to have generous partners in industry and at the University of Florida to support the SubjuGator project. Listed below are active sponsors for the SubjuGator project at the University of Florida.",
    tiers: [
      {
        name: "Tier 1 Sponsors",
        sponsors: [
          {
            name: "JD Squared",
            logo: "/images/sponsor_jdsquared.jpg",
            description: "",
            width: 400,
          }
        ]
      },
      {
        name: "Tier 2 Sponsors",
        sponsors: [
          {
            name: "UF Engineering",
            logo: "/images/sponsor_gatoreng.gif",
            description: "Electrical and Computer Engineering, Mechanical and Aerospace Engineering",
            width: 168,
          },
          {
            name: "Lockheed Martin",
            logo: "/images/sponsor_lockheed.jpg",
            description: "",
            width: 300,
          },
          {
            name: "Seacon",
            logo: "/images/sponsor_seacon.jpg",
            description: "",
            width: 250,
          },
          {
            name: "Harris",
            logo: "/images/sponsor_harris.jpg",
            description: "",
            width: 350,
          },
          {
            name: "Rockwell Collins",
            logo: "/images/rockwell_collins.jpg",
            description: "",
            width: 300,
          }
        ]
      },
      {
        name: "Tier 3 Sponsors",
        sponsors: [
          {
            name: "IEEE",
            logo: "/images/sponsor_ieee.jpg",
            description: "",
            width: 200,
          },
          {
            name: "Altera",
            logo: "/images/sponsor_altera.jpg",
            description: "",
            width: 200,
          },
          {
            name: "CPI",
            logo: "/images/sponsor_ieee1.jpg",
            description: "",
            width: 150,
          },
          {
            name: "Digikey",
            logo: "/images/sponsor_digikey.png",
            description: "",
            width: 200,
          },
          {
            name: "Ur Pro",
            logo: "/images/ur-pro.jpg",
            description: "",
            width: 150,
          },
          {
            name: "Advanced Circuits",
            logo: "/images/Advanced-Circuits.jpg",
            description: "",
            width: 200,
          },
          {
            name: "VideoRay",
            logo: "/images/videoray_logo.jpg",
            description: "",
            width: 200,
          },
          {
            name: "Seabotix",
            logo: "/images/seabotix_logo.jpg",
            description: "",
            width: 200,
          }
        ]
      },
      {
        name: "Personal Contributions",
        sponsors: [
          {
            name: "Edward Kallal",
            logo: "/images/no_image.png",
            description: "Edward Kallal, BSEE. MIL Alumnus, 2010",
            width: 100,
          }
        ]
      }
    ]
  },
  2011: {
    title: "2011 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "JD Squared",
        logo: "/images/JD2WebBanner.jpg",
        description: "JD Squared rocks! Without their support, we would not have been able to build SubjuGator 7. Thank you, thank you, thank you!",
        imageAlign: "right",
        width: 300,
      },
      {
        name: "Harris",
        logo: "/images/Harris_logo.jpg",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the one of the top employers of past MIL students.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Seacon",
        logo: "/images/seacon_logo.jpg",
        description: "We would like to extend our appreciation to Seacon for their generous support with their wet-mate connectors. SubjuGator 7 utilizes only Seacon connectors.",
        imageAlign: "right",
        width: 175,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has once again graciously chosen to financially sponsored our SubjuGator Project. Their continued support has been critical and very much appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering, the Department of Electrical and Computer Engineering and the Department of Mechanical and Aerospace Engineering have continued to provide financial support for our project. A special thanks to Dr. Cammy Abernathy (Dean of Engineering), Dr. John Harris (ECE chair) and Dr. S. 'Bala' Balachandar (MAE chair) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Digi-Key",
        logo: "/images/digikey.jpg",
        description: "Thanks to Digi-Key for sponsoring our project with their wide-range of quality electronic components and superior service. Digi-Key has been our leading electronics parts supplier for the last several years and we are very proud to have them come aboard as a team sponsor in 2008.",
        imageAlign: "left",
        width: 150,
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products. Altera has been a great friend to the University of Florida and to Team SubjuGator for the last several years.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Fischer Connectors",
        logo: "/images/fischer_logo.jpg",
        description: "Fischer Connectors was our sponsor for sealed connectors for SujuGator 6 from 2006-2010.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Advanced Circuits",
        logo: "/images/AdvancedCircuits_logo.jpg",
        description: "Advanced Circuits is our primary source for PCB's and has been very genereous with their famous student discount special and has also helped in other ways.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "YomDom",
        logo: "/images/yomdom.jpg",
        description: "YomDom, an innovation technology company, has graciously become a financial supporter of our SubjuGator. Their support came at a critical time for us and is greatly appreciated.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "SolidWorks",
        logo: "/images/solid_works.jpg",
        description: "SolidWorks is our official sponsor 3-D Mechanical CAD Software. They graciously supplied us with student versions of their powerful software.",
        imageAlign: "left",
        width: 100,
      },
      {
        name: "PNI",
        logo: "/images/PNI.jpg",
        description: "PNI makes outstanding 2 and 3-axis compass systems. They have generously provided support for the SubjuGator orientation and heading systems.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "MIL Alumni",
        logo: "/images/mil_logo_M.jpg",
        description: "Other financial supporters include MIL members and alumni including: Thomas Feeney, ...",
        imageAlign: "left",
        width: 80,
      },
    ]
  },
  2010: {
    title: "2010 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/Harris_logo.jpg",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has once again graciously chosen to financially sponsored our SubjuGator Project. Their continued support has been critical and very much appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering, the Department of Electrical and Computer Engineering and the Department of Mechanical and Aerospace Engineering have continued to provide financial support for our project. A special thanks to Dr. Cammy Abernathy (Dean of Engineering), Dr. John Harris (ECE chair) and Dr. S. 'Bala' Balachandar (MAE chair) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Digi-Key",
        logo: "/images/digikey.jpg",
        description: "Thanks to Digi-Key for sponsoring our project with their wide-range of quality electronic components and superior service. Digi-Key has been our leading electronics parts supplier for the last several years and we are very proud to have them come aboard as a team sponsor in 2008.",
        imageAlign: "left",
        width: 150,
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products. Altera has been a great friend to the University of Florida and to Team SubjuGator for the last several years.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Fischer Connectors",
        logo: "/images/fischer_logo.jpg",
        description: "Fischer Connectors is our sponsor for sealed connectors. We are thankful for their continued support. The Fischer connectors we used for the last several years have been vital to our recent success.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Advanced Circuits",
        logo: "/images/AdvancedCircuits_logo.jpg",
        description: "Advanced Circuits is our primary source for PCB's and has been very genereous with their famous student discount special and has also helped in other ways.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "YomDom",
        logo: "/images/yomdom.jpg",
        description: "YomDom, an innovation technology company, has graciously become a financial supporter of our SubjuGator. Their support came at a critical time for us and is greatly appreciated.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "SolidWorks",
        logo: "/images/solid_works.jpg",
        description: "SolidWorks is our official sponsor 3-D Mechanical CAD Software. They graciously supplied us with student versions of their powerful software.",
        imageAlign: "left",
        width: 100,
      },
      {
        name: "PNI",
        logo: "/images/PNI.jpg",
        description: "PNI makes outstanding 2 and 3-axis compass systems. They have generously provided support for the SubjuGator orientation and heading systems.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "MIL Alumni",
        logo: "/images/mil_logo_M.jpg",
        description: "Other financial supporters include MIL members and alumni including: Thomas Feeney, ...",
        imageAlign: "left",
        width: 80,
      },
    ],
  },
  2009: {
    title: "2009 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/Harris_logo.jpg",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has again financially sponsored our SubjuGator Project. Their support, at a time that we really needed it, is greatly appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The Department of Electrical and Computer Engineering and the Department of Mechanical and Aerospace Engineering have continued to provide financial support for our project. A special thanks to Dr. Mark Law (ECE chair) and Dr. S. 'Bala' Balachandar (MAE chair) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Digi-Key",
        logo: "/images/digikey.jpg",
        description: "Thanks to Digi-Key for sponsoring our project with their wide-range of quality electronic components and superior service. Digi-Key has been our leading electronics parts supplier for the last several years and we are very proud to have them come aboard as a team sponsor in 2008.",
        imageAlign: "left",
        width: 150,
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products. Altera has been a great friend to the University of Florida and to Team SubjuGator for the last several years.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Fischer Connectors",
        logo: "/images/fischer_logo.jpg",
        description: "Fischer Connectors is our sponsor for sealed connectors. We are thankful for their continued support. The Fischer connectors we used for both last year's sub and this year's sub have been vital to our recent success.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Dundas",
        logo: "/images/Dundas.jpg",
        description: "Thanks to Dundas Data Visualization for their software support. The Dundas Gauge software was very useful for the development of our SubjuGator.",
        imageAlign: "right",
        width: 120,
      },
      {
        name: "VideoRay",
        logo: "/images/videoray.gif",
        description: "VideoRay has graciously sponsored us by giving us excellent prices on their thrusters. We needed more thrust and VideoRay's thrusters met are requirements perfectly.",
        imageAlign: "left",
        width: 120,
      },
      {
        name: "Florida Anodize",
        logo: "/images/fl_anodize_sml.jpg",
        description: "Our official sponsor for anodization is Florida Anodize System & Technologies Inc., of Stanford, Florida. We appreciate their support",
        imageAlign: "right",
        width: 175,
      },
      {
        name: "SolidWorks",
        logo: "/images/solid_works.jpg",
        description: "SolidWorks is our official sponsor 3-D Mechanical CAD Software. They graciously supplied us with student versions of their powerful software.",
        imageAlign: "left",
        width: 100,
      },
      {
        name: "PNI",
        logo: "/images/PNI.jpg",
        description: "PNI makes outstanding 2 and 3-axis compass systems. They have generously provided support for the SubjuGator orientation and heading systems.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "Advanced Circuits",
        logo: "/images/AdvancedCircuits_logo.jpg",
        description: "Advanced Circuits is our primary source for PCB's and has been very genereous with their famous student discount special and has also helped in other ways.",
        imageAlign: "left",
        width: 200,
      },
      {
        name: "OFab",
        logo: "/images/OFab.jpg",
        description: "We are very thankful to OFab Inc. (in Ocala Florida) for there help with some metal fabrication.",
        imageAlign: "right",
        width: 160,
      },
      {
        name: "4FX Design",
        logo: "/images/4FX_LOGO_bw_sml.jpg",
        description: "We are very thankful to 4FX Design for their support and encouragement.",
        imageAlign: "left",
        width: 100,
      },
      {
        name: "MIL Alumni",
        logo: "/images/mil_logo_M.jpg",
        description: "Other financial supporters include MIL members and alumni including: Bob Pitzer, James Greco, Sean Cohen, Luis Vega, Patrick O'Malley, ...",
        imageAlign: "left",
        width: 80,
      },
    ],
  },
  2008: {
    title: "2008 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/Harris_logo.jpg",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has again financially sponsored our SubjuGator Project. Their support, at a time that we really needed it, is greatly appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering, the Department of Electrical and Computer Engineering and the Department of Mechanical and Aerospace Engineering have continued to provide financial support for our project. A special thanks to Dr. Pramod Khargonekar (Dean of Engineering), Dr. Mark Law (ECE chair), and Dr. S. \"Bala\" Balachandar (MAE chair) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products. Altera has been a great friend to the University of Florida and to Team SubjuGator for the last several years.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Digi-Key",
        logo: "/images/digikey.jpg",
        description: "Thanks to Digi-Key for sponsoring our project with their wide-range of quality electronic components and superior service. Digi-Key has been our leading electronics parts supplier for the last several years and we are very proud to have them come aboard as a sponsor this year.",
        imageAlign: "left",
        width: 150,
      },
      {
        name: "Dundas",
        logo: "/images/Dundas.jpg",
        description: "Thanks to Dundas Data Visualization for their software support. The Dundas Gauge software was very useful for the development of our SubjuGator.",
        imageAlign: "right",
        width: 160,
      },
      {
        name: "Fischer Connectors",
        logo: "/images/fischer_logo.jpg",
        description: "Fischer Connectors is our sponsor for sealed connectors. We are thankful for their continued support. The Fischer connectors we used for both last year's sub and this year's sub have been vital to our recent success.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "VideoRay",
        logo: "/images/videoray.gif",
        description: "VideoRay has graciously sponsored us by giving us excellent prices on their thrusters. We needed more thrust and VideoRay's thrusters met are requirements perfectly.",
        imageAlign: "right",
        width: 160,
      },
      {
        name: "Cubic",
        logo: "/images/cubic_.jpg",
        description: "Cubic Defense Applications Group has graciously come aboard as a sponsor for our team this year. We are very grateful for their support.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "MaxAmp",
        logo: "/images/maxamp.png",
        description: "We are very grateful to MaxAmp for sponsoring our team with discounts on their extremely high energy-density lithium polymer battery packs.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "Florida Anodize",
        logo: "/images/fl_anodize_sml.jpg",
        description: "Our official sponsor for anodization is Florida Anodize System & Technologies Inc., of Stanford, Florida. We appreciate their support",
        imageAlign: "right",
        width: 175,
      },
      {
        name: "SolidWorks",
        logo: "/images/solid_works.jpg",
        description: "SolidWorks is our official sponsor 3-D Mechanical CAD Software. They graciously supplied us with student versions of their powerful software.",
        imageAlign: "left",
        width: 100,
      },
      {
        name: "Rafferty Machine & Tools",
        logo: "/images/rafferty_tool.gif",
        description: "Raferty Machine & Tools was very generous in giving us access and support in using some of their excellent machine tool facilities.",
        imageAlign: "left",
        width: 300,
      },
      {
        name: "MIL Alumni",
        logo: "/images/mil_logo_M.jpg",
        description: "Other financial supporters include MIL members and alumni including: ____",
        imageAlign: "left",
        width: 80,
      },
      {
        name: "National Science Foundation",
        logo: "/images/nsf.jpg",
        description: "The SubjuGator project was partially supported by the National Science Foundation REU program, under Grant No. 0453459.",
        imageAlign: "left",
        width: 60,
      },
    ],
  },
  2007: {
    title: "2007 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/Harris_logo.jpg",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Intel",
        logo: "/images/intel.jpg",
        description: "We would like to thank Intel Corporation for their generous hardware donations to the Machine Intellegence Lab (MIL) and the SubjuGator project in 2007. The donations have helped us in several areas.",
        imageAlign: "right",
        width: 130,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has again financially sponsored our SubjuGator Project. Their support, at a time that we really needed it, is greatly appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering, the Department of Electrical and Computer Engineering and the Department of Mechanical and Aerospace Engineering have continued to provide financial support for our project. A special thanks to Dr. Pramod Khargonekar (Dean of Engineering), Dr. Mark Law (ECE chair), and Dr. S. 'Bala' Balachandar (MAE chair) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Teledyne",
        logo: "/images/teledyne.gif",
        description: "Thanks to Teledyne for sponsoring SubjuGator with discounts on their excellent Explorer Doppler Velocit Log (DVL). We have wanted a DVL for several years, and finally were able to obtain one.",
        imageAlign: "left",
        width: 200,
      },
      {
        name: "PNI",
        logo: "/images/PniLogo.jpg",
        description: "PNI makes outstanding 2 and 3-axis compass systems. They have generously provided support for the SubjuGator orientation and heading systems.",
        imageAlign: "right",
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "Dundas",
        logo: "/images/Dundas.jpg",
        description: "Thanks to Dundas Data Visualization for their software support. The Dundas Gauge software was very useful for the development of our SubjuGator.",
        imageAlign: "right",
        width: 160,
      },
      {
        name: "Fischer Connectors",
        logo: "/images/fischer_logo.jpg",
        description: "Thanks to Fischer Connectors for their support with some excellent and small connectors.",
        imageAlign: "left",
        width: 160,
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products. Altera has been a great friend to the University of Florida and to Team SubjuGator for the last several years.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "MaxAmp",
        logo: "/images/maxamp.png",
        description: "We are very grateful to MaxAmp for sponsoring our team with discounts on their extremely high energy-density lithium polymer battery packs.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "G. Shokes",
        logo: "/images/gator.gif",
        description: "Thanks to G. Shokes for his generous financial support of the SubjuGator Project.",
        imageAlign: "left",
        width: 80,
      },
      {
        name: "MIL Alumni",
        logo: "/images/mil_logo_M.jpg",
        description: "Other financial supporters include MIL alumni: Scott Kanowitz and Scott Nortman",
        imageAlign: "left",
        width: 80,
      },
    ],
  },
  2006: {
    title: "2006 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/har_web.bmp",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 180,
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering and the Department of Electrical and Computer Engineering have continued to provide financial support for our project. A special thanks to Dr. Mark Law (ECE chair) and Dr. Pramod Khargonekar (Dean of Engineering) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has again financially sponsored our SubjuGator Project. Their support, at a time that we really needed it, is greatly appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "Microsoft",
        logo: "/images/MicroSoft.jpg",
        description: "Thanks to Microsoft for their software support in provide both Windows XP Pro for both our development PCs and for the Windows XP Embedded software for the SubjuGator itself. We also are thankful for the hardware they have provided for our team.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "PNI",
        logo: "/images/PniLogo.jpg",
        description: "PNI makes outstanding 2 and 3-axis compass systems. They have generously provided support for the SubjuGator orientation and heading systems.",
        imageAlign: "left",
      },
      {
        name: "Seacon",
        logo: "/images/seacon_logo.jpg",
        description: "Special thanks Seacon for sponsoring our project with their products at a discount as well as technical advice.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Intel",
        logo: "/images/intel.jpg",
        description: "We would like to thank Intel Corporation for their generous hardware donations to the Machine Intellegence Lab (MIL) in 2006. The donated computer was used in the development of our SubjuGator.",
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "right",
      },
      {
        name: "Reson",
        logo: "/images/reson_big.png",
        description: "Thanks go to Reson for thier support with our new set of hydrophones at discounted prices. Each of our new hydrophones is less than 1/5 the volume of any of our old hydrophones.",
        imageAlign: "left",
        width: 180,
      },
      {
        name: "Advanced Building Concepts",
        logo: "/images/AdvancedBuildingConcepts.jpg",
        description: "Advanced Building Concepts, Inc. of Gainesville, Florida, building contractors of fine homes in the Gainesville Community, has generously contributed financially to our SubjuGator Project. Presently, they are our only non-engineering related sponsor, and as such, we are extremely grateful for their contribution.",
        imageAlign: "right",
        width: 100,
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products.",
        imageAlign: "left",
        width: 200,
      },
    ],
  },
  2005: {
    title: "2005 SubjuGator Sponsors",
    intro: "A project like SubjuGator cannot happen on its own. We have been very fortunate to have generous partners in industry and at the University of Florida to support our SubjuGator project. Thank you for your support!",
    sponsors: [
      {
        name: "Harris",
        logo: "/images/har_web.bmp",
        description: "Thanks to the generous financial support of Harris, the SubjuGator Project has continued to be a tremendous success. We are very thankful for Harris Corporations support of SubjuGator and MIL over the last several years. They continue to be the top employer of past MIL students.",
        imageAlign: "left",
        width: 180,
      },
      {
        name: "UF Engineering",
        logo: "/images/ece.bmp",
        description: "The UF College of Engineering and the Department of Electrical and Computer Engineering have continued to provide financial support for our project. A special thanks to Dr. Mark Law (ECE chair) and Dr. Pramod Khargonekar (Dean of Engineering) for graciously continuing to help our team.",
        imageAlign: "right",
        width: 250,
      },
      {
        name: "Lockheed Martin",
        logo: "/images/lockheed1.png",
        description: "Lockheed Martin has again financially sponsored our SubjuGator Project. Their support, at a time that we really needed it, is greatly appreciated.",
        imageAlign: "left",
        width: 240,
      },
      {
        name: "EFlightPacks.com",
        logo: "/images/eflightpacks.gif",
        description: "EFlightPacks.com has graciously given us excellent support for the SubjuGator power systems.",
        imageAlign: "right",
      },
      {
        name: "IEEE Gainesville",
        logo: "/images/ieeelogo.gif",
        description: "The Gainesville section of IEEE (The Institute of Electrical and Electronics Engineers) has once again been kind enough to help financially with our SubjuGator Project, as they have every year since 2002. Their continued support has helped to enable our students to become better electrical and computer engineers. We are very thankful for their support.",
        imageAlign: "left",
      },
      {
        name: "MaxAmp",
        logo: "/images/maxamp.gif",
        description: "MaxAmp.",
        imageAlign: "right",
      },
      {
        name: "Altera",
        logo: "/images/altera.gif",
        description: "Thanks to Altera for sponsoring our project with their FPGA devices and software products.",
        imageAlign: "right",
        width: 200,
      },
      {
        name: "Seacon",
        logo: "/images/seacon_logo.jpg",
        description: "Special thanks Seacon for sponsoring our project with their products as well as technical advice.",
        imageAlign: "left",
        width: 250,
      },
      {
        name: "Microsoft",
        logo: "/images/MicroSoft.jpg",
        description: "Thanks to Microsoft for their support in obtaining our SubjuGator computer.",
        imageAlign: "right",
        width: 150,
      },
      {
        name: "NSWC",
        logo: "/images/NSWC_Logo.jpg",
        description: "We would like to thank the Naval Surface Warfare Center in Panama City, Florida, for their support for sending us some surplus thrusters.",
        imageAlign: "left",
        width: 130,
      },
      {
        name: "Cadsoft Online",
        logo: "/images/cslogo.gif",
        description: "Special thanks to CadSoft Online for sponsoring our project their excellent layout product, EAGLE.",
        imageAlign: "left",
      },
    ],
  },
};

export const SPONSOR_YEARS: SponsorYear[] = [
  { year: 2026, label: "Sponsors 2026", href: "/sponsors/2026" },
  { year: 2023, label: "Sponsors 2023", href: "/sponsors/2023" },
  { year: 2022, label: "Sponsors 2022", href: "/sponsors/2022" },
  { year: 2021, label: "Sponsors 2021", href: "/sponsors/2021" },
  { year: 2020, label: "Sponsors 2020", href: "/sponsors/2020" },
  { year: 2019, label: "Sponsors 2019", href: "/sponsors/2019" },
  { year: 2018, label: "Sponsors 2018", href: "/sponsors/2018" },
  { year: 2017, label: "Sponsors 2017", href: "/sponsors/2017" },
  { year: 2016, label: "Sponsors 2016", href: "/sponsors/2016" },
  { year: 2015, label: "Sponsors 2015", href: "/sponsors/2015" },
  { year: 2014, label: "Sponsors 2014", href: "/sponsors/2014" },
  { year: 2013, label: "Sponsors 2013", href: "/sponsors/2013" },
  { year: 2012, label: "Sponsors 2012", href: "/sponsors/2012" },
  { year: 2011, label: "Sponsors 2011", href: "/sponsors/2011" },
  { year: 2010, label: "Sponsors 2010", href: "/sponsors/2010" },
  { year: 2009, label: "Sponsors 2009", href: "/sponsors/2009" },
  { year: 2008, label: "Sponsors 2008", href: "/sponsors/2008" },
  { year: 2007, label: "Sponsors 2007", href: "/sponsors/2007" },
  { year: 2006, label: "Sponsors 2006", href: "/sponsors/2006" },
  { year: 2005, label: "Sponsors 2005", href: "/sponsors/2005" },
];