import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"

// Using Server-Side Rendering for product detail page
export const dynamic = "force-dynamic"

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="flex items-center gap-2 mb-8 text-gray-600 hover:text-black transition-colors">
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="bg-white p-6 rounded-lg flex items-center justify-center">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={400}
            className="max-h-[400px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-sm text-gray-500 uppercase">{product.category}</span>
            <h1 className="text-2xl md:text-3xl font-bold mt-2">{product.title}</h1>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {Array.from({ length: Math.round(product.rating?.rate || 0) }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              {Array.from({ length: 5 - Math.round(product.rating?.rate || 0) }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gray-300" />
              ))}
            </div>
            <span className="text-sm text-gray-500">({product.rating?.count || 0} reviews)</span>
          </div>

          <div className="text-2xl font-bold mb-6">${product.price}</div>

          <p className="text-gray-600 mb-8">{product.description}</p>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <AddToCartButton product={product} className="flex-1" />
            <Link href="/contact" className="flex-1">
              <Button variant="outline" className="w-full">
                Contact About This Product
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
