// Sample content for demonstration only — not real programs or results.
export type ProjectStatus = "Active" | "Completed" | "Upcoming";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  location: string;
  impact: string;
  progress: number; // 0-100
  sdg: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: 1, slug: "bright-classrooms", title: "Bright Classrooms", category: "Education",
    summary: "Renovating rural schools with safe classrooms, learning kits and trained teaching assistants.",
    location: "Northern Highlands", impact: "Sample: 40 schools targeted in phase one", progress: 72, sdg: ["SDG 4"], status: "Active",
  },
  {
    id: 2, slug: "clean-water-wells", title: "Clean Water Wells", category: "Water & Sanitation",
    summary: "Community-managed borewells and filtration points, with local committees trained to maintain them.",
    location: "Riverbend District", impact: "Sample: 60 water points planned", progress: 100, sdg: ["SDG 6"], status: "Completed",
  },
  {
    id: 3, slug: "solar-villages", title: "Solar Villages", category: "Clean Energy",
    summary: "Off-grid solar micro-grids powering homes, clinics and small businesses in remote settlements.",
    location: "Eastern Plains", impact: "Sample: 25 villages in the pipeline", progress: 48, sdg: ["SDG 7", "SDG 13"], status: "Active",
  },
  {
    id: 4, slug: "mobile-health-camps", title: "Mobile Health Camps", category: "Healthcare",
    summary: "Regular mobile clinics offering screenings, maternal care and preventive health education.",
    location: "Coastal Belt", impact: "Sample: monthly camps across 30 sites", progress: 61, sdg: ["SDG 3"], status: "Active",
  },
  {
    id: 5, slug: "mangrove-restoration", title: "Mangrove Restoration", category: "Environment",
    summary: "Restoring coastal mangroves with local volunteers to protect shorelines and fish nurseries.",
    location: "Delta Coast", impact: "Sample: 500 hectares targeted", progress: 15, sdg: ["SDG 13", "SDG 14"], status: "Upcoming",
  },
  {
    id: 6, slug: "women-skills-hub", title: "Women's Skills Hub", category: "Livelihoods",
    summary: "Vocational training, micro-enterprise mentoring and market access for women-led collectives.",
    location: "Central Valley", impact: "Sample: 2,000 learners per year goal", progress: 84, sdg: ["SDG 5", "SDG 8"], status: "Active",
  },
];

export const categories = Array.from(new Set(projects.map((p) => p.category)));
