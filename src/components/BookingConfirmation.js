import React from 'react'
import { FaStar } from 'react-icons/fa'
import './BookingConfirmation.css'

export default function BookingConfirmation() {
    return (
        <main className="confirmation-page">
            <section className="confirmation-box">
                <h2 className="heading_h2">
                    Hotel for <span className="purple">you.</span>
                </h2>
                <p className="thanks">Thank you YourName!</p>
                <h3 className="confirmed">
                    <span className="icon">
                        <img src="../images/confirmed.png" alt="confirmed" />
                    </span>{' '}
                    Your booking has been successfully confirmed!
                </h3>

                <ul className="confirmation-details">
                    <li>
                        <strong>Tourists Hotel</strong> is waiting for you{' '}
                        <strong>9 April</strong>
                    </li>
                    <li>
                        The payment for the booking is made upon arrival at the
                        hotel.
                    </li>
                    <li>
                        You can cancel your booking free of charge until 0 date
                        00:00 time
                    </li>
                    <li>
                        Get in touch with the manager for{' '}
                        <a href="#">canceling the booking</a> or for{' '}
                        <a href="#">any queries</a>
                    </li>
                </ul>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '5%',
                    }}>
                    <button className="btn btn--primary download-btn">
                        Save PDF confirmation <span className="icon">📄</span>
                    </button>
                </div>
            </section>

            <section className="hotel-info">
                <div className="header-hotel__center">
                    <div className="header-hotel__stars">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <h1 className="header-hotel__title">Tourist Hotel</h1>
                    <div className="header-hotel__phone">(380) 555‑0103</div>
                </div>
            </section>
        </main>
    )
}
