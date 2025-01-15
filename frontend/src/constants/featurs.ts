// src/constants/features.ts
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

export type FeatureProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconColor: string;
};

export const features: FeatureProps[] = [
  {
    icon: FaLink,
    title: "Effortless URL Shortening",
    description:
      "Create short, easy-to-share URLs in just a few clicks. Our tool is designed to make the URL shortening process quick and straightforward.",
    iconColor: "text-blue-500",
  },
  {
    icon: FaShareAlt,
    title: "Advanced Analytics",
    description:
      "Track how your shortened URLs perform with our detailed analytics. Monitor clicks, geographical data, and sources of traffic to optimize your strategies.",
    iconColor: "text-green-500",
  },
  {
    icon: FaEdit,
    title: "Customizable URLs",
    description:
      "Tailor your shortened URLs to fit your brand. Customize your links with your own text to make them more memorable and professional.",
    iconColor: "text-purple-500",
  },
  {
    icon: FaChartLine,
    title: "Reliable Performance",
    description:
      "Experience fast and reliable URL redirects with minimal downtime. Our infrastructure ensures your links are always available for users, no matter the volume.",
    iconColor: "text-red-500",
  },
];
