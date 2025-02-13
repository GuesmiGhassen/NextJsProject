"use client";
import { Card } from "@/components/ui/card";

interface DraggableItemProps {
  type: string;
}

export default function DraggableItem({ type }: DraggableItemProps) {
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData("application/reactflow", type);
  };

  return (
    <Card
      className="cursor-pointer bg-gray-800 hover:bg-gray-700 p-3 text-center text-white rounded-lg shadow-md transition-all duration-200 border border-gray-600"
      draggable
      onDragStart={handleDragStart}
    >
      {type}
    </Card>
  );
}
