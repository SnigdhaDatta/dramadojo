"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <p className="text-center h-[40px] mt-auto px-5">
      Made with <span className="text-pink-500">💖</span> by{" "}
      <Link
        href="https://github.com/SnigdhaDatta"
        className="hover:text-purple-500 font-semibold transition-colors pl-1 pr-2"
        target="_blank"
      >
        Snigdha Datta
      </Link>
      © 2025 DramaDojo. All rights reserved.
    </p>
  );
}
