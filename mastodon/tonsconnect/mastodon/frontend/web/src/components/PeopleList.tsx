import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Person } from '../types/location'
import { searchPeople } from '../services/locationService'

interface PeopleListProps {
  searchQuery?: string
}

export const PeopleList = ({ searchQuery }: PeopleListProps) => {
  const [people, setPeople] = useState<Person[]>([])
  const [query, setQuery] = useState(searchQuery || '')

  useEffect(() => {
    setPeople(searchPeople(query))
  }, [query])

  const getPersonSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <div className="flex gap-2 items-center w-full sm:w-auto">
          <label htmlFor="search" className="text-sm font-medium text-gray-700">
            Search:
          </label>
          <input
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search people..."
            className="w-full sm:w-64 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((person) => (
          <Link key={person.name} href={`/people/${getPersonSlug(person.name)}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{person.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{person.role}</p>
                <p className="text-sm text-gray-700 mt-3">{person.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 italic">{person.keyInsight}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {people.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No people found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
