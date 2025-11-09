"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, Menu } from "lucide-react";
import Search from "@/components/Search";
import { useState } from "react";

const categories = [
  { id: "tech", label: "Technology" },
  { id: "riding", label: "Riding" },
  { id: "finance", label: "Finance" },
  { id: "students", label: "Students" },
  { id: "art", label: "Art & Culture" },
];

export default function Sidebar() {
  const [age, setAge] = useState([25, 55]);
  const [searchValue, setSearchValue] = useState("");

  const sidebarContent = (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Search {`&`} Filter</h2>
      <Search value={searchValue} setValue={setSearchValue} />
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={category.id} />
              <Label htmlFor={category.id}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Age Range</h3>
        <div className="px-2">
          <Slider
            min={18}
            max={100}
            step={1}
            value={age}
            onValueChange={setAge}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mt-2">
          <span>{age[0]}</span>
          <span>{age[1]}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed top-1 left-1 p-4 z-20">
        <Sheet>
          <SheetTrigger asChild title="Sidebar">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" title="SidebarContent">
            <div className="p-6">{sidebarContent}</div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
