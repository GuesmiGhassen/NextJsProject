"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import DraggableItem from "./DraggableItem";
import { MousePointerClick, Timer, Database, CodeIcon } from "lucide-react";

export default function Sidebar() {
  const categories = [
    {
      title: "Frontend",
      icon: CodeIcon,
      items: ["React", "Angular", "Next.js"],
    },
    {
      title: "Backend",
      icon: MousePointerClick,
      items: ["Spring Boot", "Node.js", "Python Flask"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      title: "Pipeline",
      icon: Timer,
      items: ["Jenkins"],
    },
  ];

  return (
    <div className="w-[18%] bg-gray-900 text-white p-4 space-y-2 shadow-lg border-r border-gray-700">
      <h2 className="text-xl font-bold text-center">Components</h2>

      <Accordion type="multiple" className="space-y-2">
        {categories.map((category) => (
          <AccordionItem key={category.title} value={category.title}>
            <AccordionTrigger className="text-lg font-semibold flex items-center gap-2">
              <category.icon className="w-4 h-4 text-gray-300" />
              {category.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-2">
              {category.items.map((item) => (
                <DraggableItem key={item} type={item} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
