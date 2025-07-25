import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export default function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2 shadow-[0_8px_24px_#c7b5ff55] border border-[#e0b7f5] rounded-xl p-2 bg-white transform transition-transform duration-300 hover:scale-[0.97]">
      <input
        type="text"
        placeholder="Search dramas or anime..."
        className=" w-full flex-1 outline-none border-none focus:ring-0"
      />
      <Button
        type="submit"
        className=" bg-pink-100 text-[#d36f96] hover:bg-[#f3d8ff] transition-all shadow-sm active:shadow-md active:scale-[0.98]"
      >
        Search
      </Button>
    </div>
  );
}
