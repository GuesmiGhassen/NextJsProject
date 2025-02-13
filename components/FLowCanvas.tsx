"use client";

import { fetchRepos } from "@/lib/apiService";
import React, { useCallback } from "react";
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Connection, Edge, Node } from "reactflow";
import "reactflow/dist/style.css";

const initialEdges: Edge[] = [];

export default function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const type = event.dataTransfer.getData("application/reactflow");
    if (!type) return;

    const newNode: Node = {
      id: `${nodes.length + 1}`,
      type: "default",
      position: { x: event.clientX - 100, y: event.clientY - 50 },
      data: { label: type }
    };
    setNodes((prev) => [...prev, newNode]);

    console.log(fetchRepos());
  };

  return (
    <div
      className="flex-grow relative border"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
