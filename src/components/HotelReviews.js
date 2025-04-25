import React from 'react'
import './HotelReviews.css'
import GuestReview from './GuestReview'

export function HotelReviews(props) {
    return (
        <section className="hotel-reviews">
            <h2 className="profile-section-second-title">Guest rewiews</h2>
            <div className="guests-reviews-container">
                <GuestReview rating={9.8} label="Facilities" />
                <GuestReview rating={7.9} label="Staff"/>
                <GuestReview rating={9.2} label="Cleanliless" />
                <GuestReview rating={9.5} label="Comfort" />
                <GuestReview rating={8.7} label="Location"/>
                <GuestReview rating={9.8} label="Value for money" />
            </div>
        </section>
    )
}
