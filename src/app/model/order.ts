export interface OrderItem {
    orderItemId: number
    orderId: number
    productId: number
    quantity: number
    product: Product
    status: string
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    category: string
    rating: string
    price: number
    discountPercentage: number
    stock: string
    brand: string
    thumbnail: string
    images: Image[]
  }
  
  export interface Image {
    id: number
    url: string
    productId: number
  }
  