"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { recipes } from "@/utils/placeholders";

export default function RecipeProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tagSearchTerm, setTagSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  const allTags = Array.from(new Set(recipes.flatMap((recipe) => recipe.tags)));

  const filteredTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(tagSearchTerm.toLowerCase())
  );

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        (recipe.name.toLowerCase().includes(lowercasedSearchTerm) ||
          recipe.description.toLowerCase().includes(lowercasedSearchTerm)) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => recipe.tags.includes(tag)))
    );
    setFilteredRecipes(filtered);
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const removeTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Recipe Collection</h1>

        <div className="mb-8">
          {/* Recipe Search */}
          <div className="relative mb-4">
            <Input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border border-[#CBD5E1] rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          </div>

          {/* Tag Management Section */}
          <div className="bg-white p-4 rounded-lg border border-[#CBD5E1] mb-4">
            <h3 className="font-semibold mb-2">Filter by Tags</h3>

            {/* Tag Search */}
            <div className="relative mb-3">
              <Input
                type="text"
                placeholder="Search tags..."
                value={tagSearchTerm}
                onChange={(e) => setTagSearchTerm(e.target.value)}
                className="pl-10 bg-white border border-[#CBD5E1] rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            </div>

            {/* Selected Tags Section */}
            {selectedTags.length > 0 && (
              <div className="mb-3">
                <p className="text-sm text-slate-500 mb-2">Applied Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-slate-300 rounded-lg flex items-center"
                    >
                      {tag}
                      <X
                        className="w-3 h-3 ml-1 cursor-pointer"
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Available Tags */}
            <div className="max-h-32 overflow-y-auto">
              <div className="flex flex-wrap gap-2">
                {filteredTags
                  .filter((tag) => !selectedTags.includes(tag))
                  .map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="cursor-pointer text-[#475569] border border-[#CBD5E1] hover:bg-[#CBD5E1] hover:text-[#334155] rounded-lg"
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-[#CBD5E1]"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-[#334155]">
                  {recipe.name}
                </h2>
                <p className="text-[#64748B] mb-4">{recipe.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recipe.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-[#E2E8F0] text-[#475569] rounded-lg"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="px-2 py-1 bg-[#A7F3D0] text-[#065F46] text-sm rounded-full">
                    {recipe.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-[#BBF7D0] text-[#065F46] text-sm rounded-full">
                    {recipe.time}
                  </span>
                </div>
                <Button className="w-full bg-[#4CAF50] text-white hover:bg-[#81C784] rounded-lg">
                  View Recipe
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
