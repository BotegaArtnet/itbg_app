'use client'

import { useState } from 'react'
import { BusinessMap } from '../../components/BusinessMap'
import {
  getLocationData,
  getBusinessCategories,
  getBusinessesByCategory,
} from '../../services/locationService'

const MapPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const categories = ['All', ...getBusinessCategories()]
  const businesses =
    selectedCategory === 'All'
      ? getLocationData().businesses
      : getBusinessesByCategory(selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Explore Tønsberg</h1>
          <p className="mt-2 text-gray-600">Discover local businesses and attractions on the map</p>
        </div>

        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Filter by Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <BusinessMap businesses={businesses} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <div
              key={business.name}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{business.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{business.category}</p>
                <p className="text-sm text-gray-600 mt-2">{business.address}</p>
                <p className="text-sm text-gray-700 mt-3">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MapPage
