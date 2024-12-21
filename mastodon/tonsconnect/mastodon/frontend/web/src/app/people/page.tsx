'use client'

import { PeopleList } from '../../components/PeopleList'

const PeoplePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">People of Tønsberg</h1>
          <p className="mt-2 text-gray-600">Meet the local community members</p>
        </div>

        <PeopleList />
      </div>
    </div>
  )
}

export default PeoplePage
