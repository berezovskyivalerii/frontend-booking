import React from 'react'
import { SimplifierInfoBar } from '../components/SimpifierInfoBar'
import { FiltersSidebar } from '../components/FiltersSidebar'
import './HotelsList.css'
import { LargeHotelCard } from '../components/LargeHotelCard'

export function HotelsList() {
    return (
        <section>
            <div className="smp-infobars-container">
                <SimplifierInfoBar
                    text="Suppliers 60+"
                    url="./images/medalstar.png"
                />
                <SimplifierInfoBar text="Match 756" url="./images/link21.png" />
                <SimplifierInfoBar
                    text="Hotels 1323"
                    url="./images/buildings2.png"
                />
            </div>
            <div className="hotels-list-container">
                <FiltersSidebar />
                <div className="hotels-list">
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/large-card1.jpg"
                        title="Tourist Hotel"
                    />
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/hotel-card2.jpg"
                        title="Tourist Hotel"
                    />
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/hotel-card3.jpg"
                        title="Tourist Hotel"
                    />
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/large-card1.jpg"
                        title="Tourist Hotel"
                    />
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/hotel-card2.jpg"
                        title="Tourist Hotel"
                    />
                    <LargeHotelCard
                        className="hotels-list__hotel"
                        image="../images/hotel-card3.jpg"
                        title="Tourist Hotel"
                    />
                </div>
            </div>
        </section>
    )
}
