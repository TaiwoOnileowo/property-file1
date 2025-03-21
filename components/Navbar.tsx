"use client";

import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="w-full bg-black font-helios">
      <div className="container mx-auto w-full ">
        {/* Top navbar with logo and actions */}
        <div className="flex items-center justify-between h-20 border-b border-b-white/20 px-6 mb-4">
          <button
            className="text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <div className="hidden lg:block w-10">
            {/* Spacer for desktop to center logo */}
          </div>

          <Link href="/" className="flex items-center justify-center">
            <Image src={logo} alt="Property File" width={180} />
          </Link>

          <div className="flex items-center space-x-4 text-sm text-white">
            <Button
              variant="default"
              className="bg-[#bdea08]/90 hover:bg-[#bdea08]/80 cursor-pointer  text-white  font-bold px-4"
            >
              Post Property
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="/sign-up"
                className="hidden md:flex items-center bg-black hover:text-black"
              >
                <span className="mr-1">Sign Up</span>
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="/sign-in"
                className="hidden md:flex items-center border-none bg-black hover:text-black"
              >
                <span className="mr-1">Sign In</span>
              </Link>
            </Button>

            <button aria-label="Search" className="">
              <Search className="h-5 w-5 cursor-pointer" />
            </button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex justify-center pb-3">
          <ul className="flex flex-wrap items-center space-x-6 text-white">
            <li>
              <Link href="/decoration" className="hover:underline py-2">
                Decoration
              </Link>
            </li>
            <li>
              <Link href="/renovation" className="hover:underline py-2">
                Renovation
              </Link>
            </li>
            <li>
              <Link href="/conversation" className="hover:underline py-2">
                Conversation
              </Link>
            </li>
            <li>
              <Link href="/shopping" className="hover:underline py-2">
                Shopping
              </Link>
            </li>
            <li>
              <Link href="/find-a-pro" className="hover:underline py-2">
                Find a Pro
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
