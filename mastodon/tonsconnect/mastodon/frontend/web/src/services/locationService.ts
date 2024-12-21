import { LocationData, Business, Person } from '../types/location'
import { locationData } from '../data/locationData'

export const getLocationData = (): LocationData => {
  return locationData
}

export const getBusinessCategories = (): string[] => {
  const categories = new Set(locationData.businesses.map((business) => business.category))
  return Array.from(categories).sort()
}

export const getBusinessesByCategory = (category: string): Business[] => {
  if (!category) {
    return locationData.businesses
  }
  return locationData.businesses.filter((business) => business.category === category)
}

export const searchBusinesses = (query: string): Business[] => {
  const searchTerm = query.toLowerCase()
  return locationData.businesses.filter((business) => {
    return (
      business.name.toLowerCase().includes(searchTerm) ||
      business.category.toLowerCase().includes(searchTerm) ||
      business.description.toLowerCase().includes(searchTerm) ||
      business.address.toLowerCase().includes(searchTerm)
    )
  })
}

export const searchPeople = (query: string): Person[] => {
  const searchTerm = query.toLowerCase()
  return locationData.people.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchTerm) ||
      person.role.toLowerCase().includes(searchTerm) ||
      person.description.toLowerCase().includes(searchTerm)
    )
  })
}

export const getBusinessBySlug = (slug: string): Business | undefined => {
  return locationData.businesses.find(
    (business) => business.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
}

export const getPersonBySlug = (slug: string): Person | undefined => {
  return locationData.people.find(
    (person) => person.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
}

export const getNearbyBusinesses = (lat: number, lng: number, radiusKm: number): Business[] => {
  return locationData.businesses.filter((business) => {
    const distance = getDistanceFromLatLonInKm(
      lat,
      lng,
      business.coordinates.lat,
      business.coordinates.lng
    )
    return distance <= radiusKm
  })
}

// Haversine formula to calculate distance between two points
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}
