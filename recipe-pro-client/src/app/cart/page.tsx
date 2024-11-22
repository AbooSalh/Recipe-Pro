"use client";

import { useState } from "react";
import Image from "next/image";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock Data for Cart Items
const mockCartItems = [
  {
    id: 1,
    name: "Homemade Margherita Pizza",
    price: 20,
    quantity: 2,
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    price: 12.99,
    quantity: 1,
    image: "/assets/images/landing/img-2.jpg",
  },
  {
    id: 3,
    name: "Chocolate Lava Cake",
    price: 8.5,
    quantity: 3,
    image: "/assets/images/landing/img-2.jpg",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#334155] mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border border-[#CBD5E1]"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-24 w-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#334155]">
                        {item.name}
                      </h2>
                      <p className="text-sm text-[#64748B]">
                        ${item.price.toFixed(2)} per item
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-8 w-8"
                    >
                      <MinusCircle className="h-5 w-5 text-[#334155]" />
                    </Button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-8 w-8"
                    >
                      <PlusCircle className="h-5 w-5 text-[#334155]" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-[#CBD5E1]">
              <h2 className="text-2xl font-semibold text-[#334155] mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-[#4CAF50]">${calculateTotal()}</span>
              </div>
              <Button className="w-full mt-6 bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg py-2">
                Proceed to Checkout
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-[#334155]">
              Your cart is empty!
            </h2>
            <p className="text-sm text-[#64748B] mt-2">
              Start adding items to your cart and they will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
