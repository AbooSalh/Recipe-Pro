import {
  UserCircleIcon,
  HeartIcon,
  CalendarDaysIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline"; // Heroicons
import { ListCheck } from "lucide-react"; // React Lucide

export const landingImages = [
  {
    src: "/assets/images/landing/img-1.jpg",
    alt: "Ancient Grains Bowl",
    title: "Ancient Grains Bowl",
    description: "with Mushroom & Tofu",
  },
  {
    src: "/assets/images/landing/img-2.jpg",
    alt: "Another Dish",
    title: "Delicious Salad",
    description: "with Fresh Vegetables",
  },

  // Add more images as needed
];

export const featureCards = [
  {
    title: "Create & Share Recipes",
    description:
      "Join our community of recipe creators and share your culinary masterpieces with the world, whether they are free or paid.",
    icon: UserCircleIcon, // Heroicons
  },
  {
    title: "Personalized Recipes for You",
    description:
      "Access personalized recipes that cater to your unique tastes, dietary needs, and fitness goals, helping you stay on track with your health journey.",
    icon: HeartIcon, // Heroicons
  },
  {
    title: "Seamless Meal Planning",
    description:
      "Plan your meals based on your diet and gym routine, with detailed nutritional insights to support your health and fitness goals.",
    icon: CalendarDaysIcon, // Heroicons
  },
  {
    title: "Track Your Health",
    description:
      "Monitor your dietary intake with recipes tailored to specific health needs, and keep track of your progress towards fitness goals.",
    icon: ScaleIcon, // Replace with an appropriate health-related icon from Heroicons or Lucide
  },
  {
    title: "Free & Premium Options",
    description:
      "Browse a collection of free recipes or unlock exclusive premium content tailored just for you, with options to meet your dietary and fitness requirements.",
    icon: ListCheck, // React Lucide
  },
];

export const website = {
  name: "Recipe Pro",
  description:
    "Your go-to platform for discovering delicious recipes, sharing culinary masterpieces, and receiving personalized meal plans.",
};
