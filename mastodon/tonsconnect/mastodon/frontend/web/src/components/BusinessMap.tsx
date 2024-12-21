'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { Business } from '../types/location'

// Fix for default marker icons in Next.js
const icon = L.icon({
  iconUrl: '/images/marker-icon.png',
  iconRetinaUrl: '/images/marker-icon-2x.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

interface BusinessMapProps {
  businesses: Business[]
  center?: [number, number]
  zoom?: number
}

export const BusinessMap = ({
  businesses,
  center = [59.2674, 10.4075],
  zoom = 14,
}: BusinessMapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '400px', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {businesses.map((business) => (
        <Marker
          key={business.name}
          position={[business.coordinates.lat, business.coordinates.lng]}
          icon={icon}
        >
          <Popup>
            <div className="text-sm">
              <h3 className="font-semibold">{business.name}</h3>
              <p className="text-blue-600">{business.category}</p>
              <p className="mt-1">{business.address}</p>
              <p className="mt-2 text-gray-600">{business.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
