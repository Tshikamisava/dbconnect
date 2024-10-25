import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  title: string
  price: number
  description: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Handcrafted Wooden Chair",
    price: 199.99,
    description: "Beautifully crafted wooden chair, perfect for any home or office.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 2,
    title: "Organic Honey",
    price: 12.99,
    description: "100% pure, locally sourced organic honey. Delicious and healthy!",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 3,
    title: "Handmade Leather Wallet",
    price: 49.99,
    description: "Genuine leather wallet, handcrafted with care. Stylish and durable.",
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    id: 4,
    title: "Artisanal Cheese Selection",
    price: 29.99,
    description: "A curated selection of locally produced artisanal cheeses.",
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function MarketplaceListing() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">SME Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="mb-2">{product.title}</CardTitle>
              <p className="text-2xl font-bold text-primary mb-2">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground">{product.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact Seller</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}