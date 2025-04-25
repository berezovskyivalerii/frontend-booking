import React from 'react'
import { MediumHotelCard } from './MediumHotelCard'
import './MediumHotelCards.css'

export function MediumHotelCards({ hotels }) {
    return (
        <div className="medium-hotels-container">
            {hotels.map(hotel => (
                <MediumHotelCard key={hotel.id} {...hotel} />
            ))}
        </div>
    )
}
