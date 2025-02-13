import Sidebar from "@/components/sidebar";
import FlowCanvas from "@/components/FLowCanvas";

export default function Architecture() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <FlowCanvas />
    </div>
  );
}
