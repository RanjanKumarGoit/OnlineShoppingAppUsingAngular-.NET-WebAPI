export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: Image[]
}

export interface Image {
    id: number,
    url: string,
    productId: number
}