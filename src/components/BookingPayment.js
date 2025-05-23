import { MediumHotelCardPreview } from './MediumHotelCardPreview'
import { Link } from 'react-router-dom'
import './BookingPerson.css'
import '../pages/Profile.css'

export function BookingPayment(props) {
    return (
        <main className="booking-page">
            <MediumHotelCardPreview
                image="../images/hotel-card1.jpg"
                title="Suite with a queen-size bed"
            />

            <section className="booking-form">
                <h3 className="step-title">
                    3/3 <span>Booking</span>
                </h3>

                <form className="form-grid">
                    <div className="row">
                        <div className="row">
                            <select id="card" className="input-booking">
                                <option value="">
                                    Type of your debit card
                                </option>
                                <option value="GB">Visa</option>
                                <option value="US">Mastercard</option>
                            </select>
                            <p className="side-text">No card?</p>
                        </div>
                    </div>

                    <div className="row">
                        <input
                            type="text"
                            placeholder="Type of your debit card"
                            className="input-booking"
                        />
                        <p className="side-text">
                            Required to confirm your booking
                        </p>
                    </div>
                    <input
                        type="text"
                        placeholder="Month | Date"
                        className="input-container short-input"
                    />
                </form>
            </section>
            <div className="options-container">
                <div className="option">
                    <label>
                        <img src="../images/option.png" alt="option" />{' '}
                        <p>
                            I agree to the{' '}
                            <span className="text-highlight">
                                general booking{' '}
                            </span>
                            conditions and{' '}
                            <span className="text-highlight">
                                privacy policy
                            </span>
                        </p>
                    </label>
                </div>
            </div>
            <Link
                to="/book/confirmation"
                type="submit"
                className="btn btn--primary full-width">
                COMPLETE THE BOOKING
            </Link>
            <Link type="submit" className="btn btn--secondary full-width">
                Check the data before submitting
            </Link>
        </main>
    )
}
