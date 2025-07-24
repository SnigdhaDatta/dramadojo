import { UserRound, House } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <Link href="/">
        <Image src="/icon.png" alt="Logo" width={30} height={40} />
      </Link>

      {/* Right side icons */}
      <div className="flex items-center gap-2">
        {/* Profile Icon */}
        <Link href="/profile">
          <div className="group relative flex items-center justify-center cursor-pointer">
            <div className="rounded-full border-2 p-2 hover:bg-[#fbd1dc] transition-all">
              <UserRound size={20} />
            </div>
            <span className="absolute top-full mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              My Profile
            </span>
          </div>
        </Link>

        {/* Home Icon */}
        <Link href="/">
          <div className="group relative flex items-center justify-center cursor-pointer">
            <div className="rounded-full border-2 p-2 hover:bg-[#fbd1dc] transition-all">
              <House size={20} />
            </div>
            <span className="absolute top-full mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
