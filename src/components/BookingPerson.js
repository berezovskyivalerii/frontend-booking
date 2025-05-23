import React from 'react'
import { MediumHotelCardPreview } from './MediumHotelCardPreview'
import './BookingPerson.css'
import { Header } from './Header'
import { Link } from 'react-router-dom'
import BookingInfo from './BookingInfo'

export default function BookingPerson() {
    return (
        <div>
            <Header />
            <main className="booking-page">
                <MediumHotelCardPreview
                    image="../images/hotel-card1.jpg"
                    title="Suite with a queen-size bed"
                />

                <section className="booking-form">
                    <h3 className="step-title">
                        1/3 <span>Booking</span>
                    </h3>

                    <form className="form-grid">
                        <div className="row">
                            <input
                                type="text"
                                placeholder="Name"
                                className="input-booking"
                            />
                            <input
                                type="text"
                                placeholder="Surname"
                                className="input-booking"
                            />
                        </div>

                        <div className="row">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input-booking"
                            />
                            <p className="side-text">
                                To this address, we will send a confirmation and
                                a guide to the city!
                            </p>
                        </div>

                        <input
                            type="email"
                            placeholder="Confirm email"
                            className="input-booking"
                        />

                        <div className="row">
                            <input
                                type="password"
                                placeholder="choose a password for your booking"
                                className="input-booking"
                            />
                            <p className="side-text">
                                It’s optional, but it’s safer!
                            </p>
                        </div>
                    </form>
                </section>
                <div className="options-container">
                    <div className="option">
                        <label>
                            <img src="../images/option.png" alt="option" />{' '}
                            <p>I want to get a city guide!</p>
                        </label>
                    </div>

                    <div className="option">
                        <label>
                            <img src="../images/option-off.png" alt="option" />
                            <p>
                                the ability to change the booking
                                <span className="until">
                                    {' '}
                                    (until 00.00.2023)
                                </span>
                            </p>
                        </label>
                    </div>
                </div>
                <Link to="/bookinginfo" type="submit" className="btn btn--primary full-width">
                    Continue
                </Link>
            </main>
        </div>
    )
}
