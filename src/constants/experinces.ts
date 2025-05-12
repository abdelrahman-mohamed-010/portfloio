import { mayaseen, shamah, natheel } from "../assets";

export interface experiencesProps {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: experiencesProps[] = [
  {
    title: "AI/ML Engineer",
    company_name: "DataCraft AI",
    icon: shamah, // Reusing existing icon assets
    iconBg: "#E6DEDD",
    date: "January 2017 - March 2020",
    points: [
      "Developed and deployed machine learning models for data-driven applications, focusing on NLP and computer vision tasks.",
      "Leveraged TensorFlow and PyTorch for model training and optimization.",
      "Implemented MLOps pipelines using Docker, Kubernetes, and AWS SageMaker to streamline model deployment and maintenance.",
    ],
  },
  {
    title: "Senior AI Solutions Developer",
    company_name: "InnovateAI Labs",
    icon: natheel, // Reusing existing icon assets
    iconBg: "#E6DEDD",
    date: "April 2020 - December 2022",
    points: [
      "Led the development of AI-driven solutions, including LLM-powered chatbots and real-time image analysis systems.",
      "Integrated cloud-based AI workflows using Azure Machine Learning and automated data processing with Apache Airflow.",
      "Enhanced model performance through prompt engineering and fine-tuning using GPT-4 and Vision Transformers.",
    ],
  },
  {
    title: "MLOps Engineer",
    company_name: "Cognition Tech",
    icon: mayaseen, // Reusing existing icon assets
    iconBg: "#E6DEDD",
    date: "January 2023 - November 2024",
    points: [
      "Built robust MLOps pipelines to automate model training, validation, and deployment.",
      "Utilized cloud platforms (GCP and Azure) for scalable model hosting and performance monitoring.",
      "Implemented vector databases (Pinecone, ChromaDB) for efficient semantic search and AI data management.",
    ],
  },
];

export default experiences;
