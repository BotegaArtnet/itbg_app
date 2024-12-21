'use client'

import { useEffect, useState } from 'react'
import { Business } from '../../../types/location'
import { getLocationData } from '../../../services/locationService'
import { BusinessMap } from '../../../components/BusinessMap'

interface BusinessPageProps {
  params: {
    slug: string
  }
}

const BusinessPage = ({ params }: BusinessPageProps) => {
  const [business, setBusiness] = useState<Business | null>(null)

  useEffect(() => {
    const decodedSlug = decodeURIComponent(params.slug)
    const foundBusiness = getLocationData().businesses.find(
      (b) => b.name.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase()
    )
    setBusiness(foundBusiness || null)
  }, [params.slug])

  if (!business) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Business not found</h1>
          <p className="mt-2 text-gray-600">The business you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
            <p className="text-lg text-blue-600 mt-2">{business.category}</p>
            <p className="text-gray-600 mt-2">{business.address}</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">About</h2>
              <p className="mt-2 text-gray-700">{business.description}</p>
              <p className="mt-4 text-gray-600 italic">{business.profileDescription}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Key Insight</h2>
              <p className="mt-2 text-gray-700">{business.keyInsight}</p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <BusinessMap
                businesses={[business]}
                center={[business.coordinates.lat, business.coordinates.lng]}
                zoom={16}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessPage
