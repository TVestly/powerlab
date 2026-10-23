import type { ComponentType } from "react";
import { Activity, Cable, Magnet, UtilityPole } from "lucide-react";
export interface LearningModule {
  id: string;
  title: string;
  category: string;
  description: string;
  topics: readonly string[];
  icon: ComponentType<{ size?: number; className?: string }>;
}
export const modules: readonly LearningModule[] = [
  {
    id: "three-phase-systems",
    title: "Three-Phase Systems",
    category: "Power fundamentals",
    description:
      "Explore balanced systems, phase relationships, and the foundations of AC power.",
    topics: [
      "Phasor relationships",
      "Star & delta connections",
      "Active & reactive power",
    ],
    icon: Activity,
  },
  {
    id: "transformers",
    title: "Transformers",
    category: "Energy conversion",
    description:
      "Understand how magnetic coupling transforms voltage, current, and impedance.",
    topics: [
      "Ideal transformer",
      "Equivalent circuits",
      "Efficiency & regulation",
    ],
    icon: UtilityPole,
  },
  {
    id: "transmission-lines",
    title: "Transmission Lines",
    category: "Power networks",
    description:
      "Follow electrical energy from source to load through distributed networks.",
    topics: ["Line parameters", "Voltage drop", "Power transfer"],
    icon: Cable,
  },
  {
    id: "electric-machines",
    title: "Electric Machines",
    category: "Energy conversion",
    description:
      "Discover the connection between electrical energy, magnetic fields, and motion.",
    topics: ["Rotating fields", "Induction machines", "Synchronous machines"],
    icon: Magnet,
  },
];
