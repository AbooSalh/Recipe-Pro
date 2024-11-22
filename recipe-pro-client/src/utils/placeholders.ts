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
  logo: "/assets/images/logos/logo-black-noBG.png",
  socialMedia: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/",
  },
  contact: {
    email: "zK9VH@example.com",
    phone: "123-456-7890",
  },
};


export const recipes = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with eggs, cheese, and pancetta",
    tags: ["Pasta", "Italian", "Quick", "Egg", "Cheese"],
    difficulty: "Easy",
    time: "30 min",
    image: "/assets/images/landing/img-2.jpg",
    price: { base: 12.99 },
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    description: "Creamy and spicy Indian curry with tender chicken pieces",
    tags: ["Curry", "Indian", "Spicy", "Chicken", "Creamy"],
    difficulty: "Medium",
    time: "45 min",
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 3,
    name: "Vegetable Stir Fry",
    description: "Quick and healthy mix of fresh vegetables in a savory sauce",
    tags: ["Vegetarian", "Asian", "Quick", "Healthy", "Vegetables"],
    difficulty: "Easy",
    time: "20 min",
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 4,
    name: "Beef Bourguignon",
    description: "Rich French stew with beef, red wine, and vegetables",
    tags: ["Stew", "French", "Beef", "Wine", "Slow-cooked"],
    difficulty: "Hard",
    time: "3 hours",
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 5,
    name: "Caesar Salad",
    description:
      "Classic salad with romaine lettuce, croutons, and Caesar dressing",
    tags: ["Salad", "Quick", "Vegetarian", "Lettuce", "Cheese"],
    difficulty: "Easy",
    time: "15 min",
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    description: "Decadent dessert with a gooey chocolate center",
    tags: ["Dessert", "Chocolate", "Baking", "Sweet", "Indulgent"],
    difficulty: "Medium",
    time: "25 min",
    image: "/assets/images/landing/img-2.jpg",
  },
];
