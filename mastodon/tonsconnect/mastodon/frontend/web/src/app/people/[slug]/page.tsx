'use client'

import { useEffect, useState } from 'react'
import { Person } from '../../../types/location'
import { getLocationData } from '../../../services/locationService'

interface PersonPageProps {
  params: {
    slug: string
  }
}

const PersonPage = ({ params }: PersonPageProps) => {
  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
    const decodedSlug = decodeURIComponent(params.slug)
    const foundPerson = getLocationData().people.find(
      (p) => p.name.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase()
    )
    setPerson(foundPerson || null)
  }, [params.slug])

  if (!person) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Person not found</h1>
          <p className="mt-2 text-gray-600">The person you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900">{person.name}</h1>
            <p className="text-lg text-blue-600 mt-2">{person.role}</p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-900">About</h2>
              <p className="mt-2 text-gray-700">{person.description}</p>
              <p className="mt-4 text-gray-600 italic">{person.profileDescription}</p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Key Insight</h2>
              <p className="mt-2 text-gray-700">{person.keyInsight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonPage
