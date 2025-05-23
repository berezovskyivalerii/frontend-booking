import React from 'react'
import { MediumHotelCardPreview } from './MediumHotelCardPreview'
import { Header } from './Header'
import { Link } from 'react-router-dom'
import './BookingPerson.css'

export default function BookingInfo() {
    return (
        <main className="booking-page">
            <MediumHotelCardPreview
                image="../images/hotel-card1.jpg"
                title="Suite with a queen-size bed"
            />

            <section className="booking-form">
                <h3 className="step-title">
                    2/3 <span>Booking</span>
                </h3>

                <form className="form-grid">
                    <div className="row">
                        <select id="country" className="input-booking">
                            <option value="">Select a country</option>
                            <option value="GB">Great Britain</option>
                            <option value="US">United States</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="row">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-booking"
                        />
                        <p className="side-text">
                            To this address, we will send a confirmation and a
                            guide to the city!
                        </p>
                    </div>
                </form>
            </section>
            <div className="options-container">
                <div className="option">
                    <label>
                        <img src="../images/option.png" alt="option" />{' '}
                        <p>Call me to confirm booking!</p>
                    </label>
                </div>

                <div className="option">
                    <label>
                        <img src="../images/option-off.png" alt="option" />
                        <p>Send me an email to confirm booking!</p>
                    </label>
                </div>
            </div>
            <Link
                to="/book/payment"
                type="submit"
                className="btn btn--primary full-width">
                Continue
            </Link>
        </main>
    )
}
