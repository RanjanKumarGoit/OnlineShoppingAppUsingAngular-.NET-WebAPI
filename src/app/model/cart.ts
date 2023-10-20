export interface Cart {
    cartId: number
    userId: number
    cartItems: CartItem[]
  }
  
  export interface CartItem {
    cartItemId: number
    cartId: number
    productId: number
    quantity: number
    product: Product
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
  