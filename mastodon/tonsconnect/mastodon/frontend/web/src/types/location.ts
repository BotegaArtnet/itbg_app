export interface Coordinates {
  lat: number
  lng: number
}

export interface Business {
  name: string
  category: string
  address: string
  coordinates: Coordinates
  description: string
  profileDescription: string
  keyInsight: string
}

export interface Person {
  name: string
  role: string
  description: string
  profileDescription: string
  keyInsight: string
}

export interface LocationData {
  city: string
  businesses: Business[]
  people: Person[]
}
