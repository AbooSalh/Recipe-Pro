"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Clock,
  ChefHat,
  Users,
  Gauge,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { recipes } from "../utils";

export default function OrderPage() {
  const [quantity, setQuantity] = useState(1);
  const recipe = recipes[0]
  const calculateTotal = () => {
    return (recipe.price.base * quantity).toFixed(2);
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
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-[#334155]">
                {recipe.name}
              </h1>
              <div className="text-2xl font-bold text-[#4CAF50]">
                ${recipe.price.base}
              </div>
            </div>
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

            {/* Product Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.prep_time}</span>
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
                <span>{recipe.nutritional_info.calories} cal/slice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md border border-[#CBD5E1] p-6  mx-auto">
          <h2 className="text-2xl font-semibold text-[#334155] mb-4">
            Order Summary
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-lg">Quantity:</span>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8"
                >
                  <MinusCircle className="h-4 w-4" />
                </Button>
                <span className="text-lg font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8"
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-[#4CAF50]">${calculateTotal()}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Estimated preparation time: {recipe.availability.lead_time}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <Button className="w-full mt-6 bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg py-6">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart - ${calculateTotal()}
          </Button>
        </div>
      </div>
    </div>
  );
}
