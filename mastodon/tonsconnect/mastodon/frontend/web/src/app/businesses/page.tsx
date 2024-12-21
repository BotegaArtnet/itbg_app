'use client'

import { BusinessList } from '../../components/BusinessList'

const BusinessesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Businesses in Tønsberg</h1>
          <p className="mt-2 text-gray-600">Discover local businesses and services</p>
        </div>

        <BusinessList />
      </div>
    </div>
  )
}

export default BusinessesPage
