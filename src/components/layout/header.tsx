"use client";

import logo from "@/assets/images/BPF-sec-logo-main.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-light shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="h-8 w-auto"
            />
            <h1 className="text-white text-2xl font-bold tracking-wide uppercase">
              Mananjay Daimary
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="px-4 py-2 text-white font-semibold text-base hover:bg-white/10 rounded-md transition-colors duration-200 inline-block">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu - Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden bg-white/20 hover:bg-white/30 text-white"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-gradient-to-br from-orange-light to-orange-dark border-none w-[85vw] sm:w-[400px] p-0"
            >
              <SheetHeader className="px-8 pt-8 pb-6 border-b border-white/10">
                <SheetTitle className="text-white text-left text-2xl font-bold tracking-wide">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-8 space-y-1">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      className="group relative px-6 py-4 text-white font-semibold text-lg hover:bg-white/15 rounded-xl transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-white/80 text-sm text-center">
                    © 2025 Mananjay Daimary
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
