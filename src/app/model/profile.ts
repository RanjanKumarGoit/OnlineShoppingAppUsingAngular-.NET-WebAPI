export interface Profile {
    id: number
    name: string
    email: string
    password: string
    phone: string
    role: string
    address: Address
  }
  
  export interface Address {
    addressID: number
    country: string
    state: string
    city: string
    userID: number
  }
  