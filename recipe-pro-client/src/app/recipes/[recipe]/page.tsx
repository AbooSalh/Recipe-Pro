import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Clock, ChefHat, Users, Gauge } from "lucide-react";

export default function RecipePage() {
  // Example recipe data - this would normally come from props or an API
  const recipe = {
    id: 1,
    name: "Homemade Margherita Pizza",
    description:
      "Classic Italian pizza with fresh basil, mozzarella, and tomatoes",
    image: "/assets/images/landing/img-2.jpg",
    tags: ["Italian", "Vegetarian", "Dinner", "Baking"],
    difficulty: "Medium",
    time: "45 mins",
    servings: 4,
    ingredients: [
      "2 1/4 cups (280g) all-purpose flour",
      "1 cup (240ml) warm water",
      "2 1/4 tsp active dry yeast",
      "1 tbsp olive oil",
      "1 tsp salt",
      "Fresh mozzarella",
      "Fresh basil leaves",
      "San Marzano tomatoes",
      "Extra virgin olive oil",
    ],
    instructions: [
      "Mix warm water with yeast and let stand for 5 minutes",
      "Combine flour and salt in a large bowl",
      "Add olive oil and yeast mixture to flour",
      "Knead dough for 10 minutes until smooth",
      "Let rise for 1 hour in a warm place",
      "Preheat oven to 500°F (260°C)",
      "Roll out dough and add toppings",
      "Bake for 12-15 minutes until crust is golden",
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="container mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-[#CBD5E1] mb-8">
          <div className="relative h-96">
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-[#334155] mb-4">
              {recipe.name}
            </h1>
            <p className="text-lg text-[#64748B] mb-6">{recipe.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {recipe.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-[#E2E8F0] text-[#475569] rounded-lg"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Recipe Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#4CAF50]" />
                <span>350 calories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div className="bg-white rounded-lg shadow-md border border-[#CBD5E1] p-6">
            <h2 className="text-2xl font-semibold text-[#334155] mb-4">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-md border border-[#CBD5E1] p-6">
            <h2 className="text-2xl font-semibold text-[#334155] mb-4">
              Instructions
            </h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-sm">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Button className="flex-1 bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg py-6">
            Print Recipe
          </Button>
          <Button className="flex-1 bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg py-6">
            Save Recipe
          </Button>
        </div>
      </div>
    </div>
  );
}
