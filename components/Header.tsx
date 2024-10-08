"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },

  {
    name: "News",
    href: "/News",
  },
  
] satisfies { name: string; href: string; external?: boolean }[];

export const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="top-0 z-30 w-full px-4 sm:fixed backdrop-blur bh-zinc-900/50 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-2 pt-6 sm:h-20 sm:flex-row sm:pt-0">
          <Link href="/" className="text-2xl font-semibold duration-150 text-zinc-100 hover:text-white">
            BitPredictProV2
          </Link>
          {/* Desktop navigation */}
          <nav className="flex items-center grow">
            <ul className="flex flex-wrap items-center justify-end gap-4 grow">
              {navigation.map((item) => (
                <li className="" key={item.href}>
                  <Link
                    className={`flex items-center px-3 py-2 duration-150 text-sm sm:text-base  hover:text-zinc-50
                    ${pathname === item.href ? "text-zinc-200" : "text-zinc-400"}`}
                    href={item.href}
                   
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Fancy fading bottom border */}
    </header>
  );
};