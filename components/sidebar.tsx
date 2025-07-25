"use client";
// components/Sidebar.tsx
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  return (
    <div className="hidden md:block w-60 p-6">
  <nav className="flex flex-col gap-y-6 text-sm font-medium text-[#d36f96]">
    {/* On Air */}
    <div className="relative group">
      <Button
        variant="ghost"
        className="w-full justify-start bg-pink-100 hover:bg-[#f3d8ff] text-[#d36f96] transition-all shadow-sm rounded-xl"
      >
        On Air
      </Button>
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 w-max text-xs bg-white border border-[#e0b7f5] text-[#a16b8c] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Currently watching
      </div>
    </div>

    {/* All Watched */}
    <div className="relative group">
      <Button
        variant="ghost"
        className="w-full justify-start bg-pink-100 hover:bg-[#f3d8ff] text-[#d36f96] transition-all shadow-sm rounded-xl"
      >
        All Watched
      </Button>
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 w-max text-xs bg-white border border-[#e0b7f5] text-[#a16b8c] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Completed Watching
      </div>
    </div>

    {/* Up Next */}
    <div className="relative group">
      <Button
        variant="ghost"
        className="w-full justify-start bg-pink-100 hover:bg-[#f3d8ff] text-[#d36f96] transition-all shadow-sm rounded-xl"
      >
        Up Next
      </Button>
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 w-max text-xs bg-white border border-[#e0b7f5] text-[#a16b8c] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Planning to watch soon
      </div>
    </div>

    {/* ask AI */}
    <div className="relative group">
      <Button
        variant="ghost"
        className="w-full justify-start bg-pink-100 hover:bg-[#f3d8ff] text-[#d36f96] transition-all shadow-sm rounded-xl"
      >
        Ask AI
      </Button>
      <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 w-max text-xs bg-white border border-[#e0b7f5] text-[#a16b8c] rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        More Information via Gpt
      </div>
    </div>
  </nav>
</div>

  )
}
