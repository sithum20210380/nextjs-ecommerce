"use client"

import React from "react"

import { Suspense } from "react"
import Link from "next/link"
import ProductCard from "@/components/product-card"
import type { Product } from "@/lib/types"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products")

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default function ClientPage() {
  const [products, setProducts] = React.useState<Product[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [])

  return (
    <main className="container mx-auto px-4 py-8 bg-[#0a0a16] text-white min-h-screen">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Product Catalog
      </motion.h1>

      <Suspense fallback={<ProductGridSkeleton />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? null
            : products.map((product, index) => (
                <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      </Suspense>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors inline-block"
        >
          Contact Us
        </Link>
      </motion.div>
    </main>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4 h-[360px]">
          <Skeleton className="w-full h-48 mb-4" />
          <Skeleton className="w-3/4 h-4 mb-2" />
          <Skeleton className="w-full h-4 mb-2" />
          <Skeleton className="w-1/4 h-6 mt-4" />
        </div>
      ))}
    </div>
  )
}
