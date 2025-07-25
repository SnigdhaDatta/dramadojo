import Image from "next/image";
import InputWithButton from "@/components/searchbar";
export default function Home() {
  return (
    <div className="flex flex-grow flex-col items-center m-16 mx-auto overflow-y-hidden">
      {/* Logo + Heading */}
      <div className="flex gap-3 mb-6 transform transition-transform duration-300 hover:scale-[0.97]">
        <Image
          src="/icon.png"
          alt="Logo"
          width={40}
          height={30}
          className="auto"
        />
        <h1 className="sm:text-5xl text-4xl text font-bold text-[#d36f96] font-serif">
          DramaDojo
        </h1>
      </div>

      {/* Search Bar */}
      <InputWithButton />

      {/*mascot of home page */}
      <div className="mt-10 flex justify-center">
        <Image
          src="/tanjiro.png"
          alt="Mascot"
          width={260}
          height={260}
          className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
