import FoodCarousel from "@/components/landingCarousel/Carousel";
import { landingImages } from "@/utils/placeholders";

function page() {
  return (
    <main className="min-h-[calc(100vh-64px)]">
      <FoodCarousel images={landingImages} />
    </main>
  );
}

export default page;
