import { web, mobile, backend, creator } from "../assets";

export interface servicesProps {
  title: string;
  icon: string;
}

const services: servicesProps[] = [
  {
    title: "ML & Data Pipeline\nArchitect",
    icon: creator,
  },
  {
    title: "AI/ML\nEngineer",
    icon: backend,
  },
  {
    title: "Backend & Data\nEngineer",
    icon: mobile,
  },
  {
    title: "Web & App\nDeveloper",
    icon: web,
  },
];

export default services;
