import Image from "next/image";
import InputWithButton from "@/components/searchbar";

export default function Home() {
  return (
    <div className="auto flex justify-center mt-16">
        <div className="text-center">
          {/* Logo + Heading */}
          <div className="flex items-center justify-center gap-3 mb-6 transform transition-transform duration-300 hover:scale-[0.97]">
            <Image src="/icon.png" alt="Logo" width={50} height={40} />
            <h1 className= "text-5xl font-bold text-[#d36f96] font-serif" >DramaDojo</h1>
          </div>

          {/* Search Bar */}
          <InputWithButton />
        </div>
    </div>


  );
}
