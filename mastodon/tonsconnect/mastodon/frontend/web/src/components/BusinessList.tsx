import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Business } from '../types/location'
import {
  getBusinessCategories,
  getBusinessesByCategory,
  searchBusinesses,
} from '../services/locationService'

interface BusinessListProps {
  initialCategory?: string
  searchQuery?: string
}

export const BusinessList = ({ initialCategory, searchQuery }: BusinessListProps) => {
  const [businesses, setBusinesses] = useState<Business[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All')
  const [query, setQuery] = useState(searchQuery || '')

  useEffect(() => {
    setCategories(['All', ...getBusinessCategories()])
  }, [])

  useEffect(() => {
    if (query) {
      setBusinesses(searchBusinesses(query))
    } else if (selectedCategory === 'All') {
      setBusinesses(getBusinessesByCategory(''))
    } else {
      setBusinesses(getBusinessesByCategory(selectedCategory))
    }
  }, [selectedCategory, query])

  const getBusinessSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2 items-center">
          <label htmlFor="category" className="text-sm font-medium text-gray-700">
            Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center w-full sm:w-auto">
          <label htmlFor="search" className="text-sm font-medium text-gray-700">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search businesses..."
            className="w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((business) => (
          <Link
            key={business.name}
            href={`/business/${getBusinessSlug(business.name)}`}
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{business.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{business.category}</p>
                <p className="text-sm text-gray-600 mt-2">{business.address}</p>
                <p className="text-sm text-gray-700 mt-3">{business.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">{business.keyInsight}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {businesses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No businesses found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
