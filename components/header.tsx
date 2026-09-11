"use client";

import React from "react";
import Link from "next/link";
import { Heart, Globe } from "lucide-react";
import { PanicButton } from "./panic-button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-white text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-sky-300 transition-colors">
              why-you-matter<span className="text-sky-400">.org</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              You are irreplaceable
            </span>
          </div>
        </Link>

        {/* Action / Panic controls */}
        <div className="flex items-center gap-3">
          <PanicButton />
        </div>
      </div>
    </header>
  );
}
