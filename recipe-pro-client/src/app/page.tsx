import Features from "@/components/Features/Features";
import FoodCarousel from "@/components/HeroSection/HeroSection";
import { landingImages } from "@/utils/placeholders";
function page() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <FoodCarousel images={landingImages} />
      <Features/>
    </main>
  );
}

export default page;
