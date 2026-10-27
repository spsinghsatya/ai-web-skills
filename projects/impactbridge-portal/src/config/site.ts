// Brand constants — rename the foundation here; everything else reads from this file.
export const site = {
  name: "ImpactBridge Foundation",
  shortName: "ImpactBridge",
  tagline: "Bridging resources and communities for lasting change.",
  description:
    "We connect communities, corporate partners and funders to deliver transparent, measurable programs in education, clean water, clean energy, health and livelihoods.",
  email: "hello@impactbridge.example",
  phone: "+00 000 000 0000",
  address: "100 Sample Street, Placeholder City",
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ],
  programs: ["Education", "Water & Sanitation", "Clean Energy", "Healthcare", "Environment", "Livelihoods"],
} as const;
