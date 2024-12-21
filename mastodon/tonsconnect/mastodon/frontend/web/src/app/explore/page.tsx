'use client'

import { useState } from 'react'
import { BusinessList } from '../../components/BusinessList'
import { PeopleList } from '../../components/PeopleList'
import { BusinessMap } from '../../components/BusinessMap'
import { getLocationData } from '../../services/locationService'

type View = 'businesses' | 'people'
type DisplayMode = 'list' | 'map'

const ExplorePage = () => {
  const [view, setView] = useState<View>('businesses')
  const [displayMode, setDisplayMode] = useState<DisplayMode>('list')
  const [searchQuery, setSearchQuery] = useState('')

  const businesses = getLocationData().businesses

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-900'>Explore Tønsberg</h1>
          <p className='mt-2 text-gray-600'>Discover local businesses and people</p>
        </div>

        <div className='mb-6 flex flex-wrap gap-4'>
          <div className='flex space-x-2'>
            <button
              onClick={() => setView('businesses')}
              className={`px-4 py-2 rounded-lg ${
                view === 'businesses'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Businesses
            </button>
            <button
              onClick={() => setView('people')}
              className={`px-4 py-2 rounded-lg ${
                view === 'people'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              People
            </button>
          </div>

          {view === 'businesses' && (
            <div className='flex space-x-2'>
              <button
                onClick={() => setDisplayMode('list')}
                className={`px-4 py-2 rounded-lg ${
                  displayMode === 'list'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setDisplayMode('map')}
                className={`px-4 py-2 rounded-lg ${
                  displayMode === 'map'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Map
              </button>
            </div>
          )}

          <div className='flex-grow'>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </div>

        {view === 'businesses' ? (
          displayMode === 'list' ? (
            <BusinessList searchQuery={searchQuery} />
          ) : (
            <BusinessMap businesses={businesses} />
          )
        ) : (
          <PeopleList searchQuery={searchQuery} />
        )}
      </div>
    </div>
  )
}

export default ExplorePage
