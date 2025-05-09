"use client"

import Link from "next/link"
import { ShoppingBag, Menu } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const { totalItems, setIsOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-black mr-6">
              NextShop
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
                Products
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative" onClick={() => setIsOpen(true)} aria-label="Open cart">
              <ShoppingBag className="w-6 h-6 text-gray-700" />
              {totalItems > 0 && (
                <motion.span
                  className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={totalItems}
                >
                  {totalItems}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-gray-700">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="/"
                      className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <Link
                      href="/contact"
                      className="text-lg font-medium text-gray-700 hover:text-black transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
