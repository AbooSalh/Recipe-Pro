"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
import { recipe } from "../utils";

// Sample order data


export default function OrderPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const handleOptionToggle = (option) => {
    const newOptions = new Set(selectedOptions);
    if (newOptions.has(option)) {
      newOptions.delete(option);
    } else {
      newOptions.add(option);
    }
    setSelectedOptions(newOptions);
  };

  const calculateTotal = () => {
    let total = recipe.price * quantity;
    selectedOptions.forEach((option) => {
      if (option.includes("+$")) {
        total += parseFloat(option.match(/\+\$(\d+)/)[1]);
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="container mx-auto px-4 py-8">
        {/* Order Header */}
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
                ${recipe.price}
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
                <span>{recipe.preparation}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.serving_size}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.serves}</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-[#4CAF50]" />
                <span>{recipe.calories}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Customization Options */}
          <div className="bg-white rounded-lg shadow-md border border-[#CBD5E1] p-6">
            <h2 className="text-2xl font-semibold text-[#334155] mb-4">
              Customize Your Order
            </h2>
            <div className="space-y-4">
              {recipe.customization_options.map((option) => (
                <div key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={option}
                    checked={selectedOptions.has(option)}
                    onChange={() => handleOptionToggle(option)}
                    className="w-4 h-4 text-[#4CAF50] rounded border-gray-300 focus:ring-[#4CAF50]"
                  />
                  <label htmlFor={option} className="flex-1">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md border border-[#CBD5E1] p-6">
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
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <Button className="flex-1 bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg py-6">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart - ${calculateTotal()}
          </Button>
        </div>
      </div>
    </div>
  );
}
