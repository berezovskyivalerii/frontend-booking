/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Outlet, NavLink } from 'react-router-dom'
import { FaBed, FaUserFriends, FaWifi, FaBath, FaSwimmer } from 'react-icons/fa'
import '../global.css'

import './Profile.css'
import TravelInformationSection from '../components/TravelInformationSection'

function NavElement({ text, url, name, to }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? 'nav-element-container active'
                    : 'nav-element-container'
            }>
            <p>{text}</p>
            <img src={url} alt={name} />
        </NavLink>
    )
}

function NavigationProfile(props) {
    const navItems = [
        {
            text: 'Account',
            url: '../images/profile.png',
            name: 'profile',
            to: 'account',
        },
        {
            text: 'Payment method',
            url: '../images/cardpos.png',
            name: 'cardpos',
            to: 'payment',
        },
        {
            text: 'Travel information',
            url: '../images/driving.png',
            name: 'driving',
            to: 'travel',
        },
        {
            text: 'Newsletters',
            url: '../images/messagefavorite.png',
            name: 'messagefavorite',
            to: 'newsletters',
        },
        {
            text: 'Security',
            url: '../images/lock.png',
            name: 'lock',
            to: 'security',
        },
    ]

    return (
        <nav className="nav-container-profile">
            {navItems.map((item, index) => (
                <NavElement
                    key={index}
                    text={item.text}
                    url={item.url}
                    name={item.name}
                    to={item.to}
                />
            ))}
        </nav>
    )
}

function UserData(props) {
    return (
        <div className="buttom-full-width-container">
            <form className="user-data-form">
                <div className="form-column">
                    <div className="form-group">
                        <input
                            id="phoneNumber"
                            type="text"
                            className="form-input"
                            placeholder="Your phone number"
                        />
                        <span className="form-note">*Has to be confirmed</span>
                    </div>
                    <div className="form-group">
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="Your email"
                        />
                        <span className="form-note">*Has to be confirmed</span>
                    </div>
                    <div className="form-group">
                        <input
                            id="birthday"
                            type="date"
                            className="form-input"
                        />
                        <p className="birthday-note">
                            You will not be able to change your birthday date
                            after confirmation
                        </p>
                    </div>
                </div>

                <div className="form-column">
                    <div className="form-group">
                        <div className="select-wrapper">
                            <select id="city" className="form-select">
                                <option value="">Choose a city</option>
                                <option value="Ampthill">Ampthill</option>
                                <option value="London">London</option>
                                <option value="Berlin">Berlin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="select-wrapper">
                            <select id="country" className="form-select">
                                <option value="">Select a country</option>
                                <option value="GB">Great Britain</option>
                                <option value="US">United States</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="select-wrapper">
                            <select id="currency" className="form-select">
                                <option value="USD">USD</option>
                                <option value="GBP">GBP</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export function AccountSection() {
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageChange = e => {
        const file = e.target.files[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setSelectedImage(imageUrl)
        }
    }

    return (
        <section className="profile-section">
            <h2 className="title-profile">Your Account</h2>
            <div className="data-content">
                <div className="left-side-container">
                    <img
                        src={selectedImage || '../images/user-photo.png'}
                        alt="user"
                        className="user-photo"
                    />
                    <div className="user-view-data">
                        <input
                            type="text"
                            className="profile-user-name"
                            placeholder="Your name"
                        />
                        <div className="user-data-edit">
                            <p className="user-edit-photo-title">
                                Edit the photo
                            </p>
                            <label
                                htmlFor="photo-upload"
                                className="user-edit-photo-label">
                                <img
                                    src="../images/camera.png"
                                    alt="camera"
                                    className="user-edit-photo-image"
                                />
                            </label>
                            <input
                                id="photo-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <p className="right-side-content">
                        Your name will be the only visible information to other
                        users.
                        <br />
                        <br />
                        All other details will remain private and will be
                        utilized to suggest the best offers for you and simplify
                        the booking process.
                    </p>
                </div>
                <UserData />
            </div>
            <h3 className="profile-section-second-title">Your bookings</h3>
            <div className="user-bookings-container">
                <div className="booking-card">
                    <img
                        src="../images/hotel-profile.jpg"
                        alt="Suite room"
                        className="booking-image"
                    />
                    <div className="booking-details">
                        <h4 className="booking-title">
                            Suite with a queen-size bed
                        </h4>
                        <p className="booking-description">
                            <FaBed /> Bed: queen-sized bed 1 | double bed 1
                        </p>
                        <p className="booking-description">
                            <FaUserFriends /> Guests: maximum 3
                        </p>
                        <div className="booking-icons">
                            <span className="booking-description">
                                <FaWifi /> free wi-fi
                            </span>
                            <span className="booking-description">
                                <FaBath /> bath
                            </span>
                            <span className="booking-description">
                                <FaSwimmer /> private pool
                            </span>
                        </div>
                        <p className="free-cancel">✓ FREE cancellation</p>
                    </div>
                </div>
                <div className="booking-meta">
                    <div className="booking-meta-details-container">
                        <div className="booking-meta-details">
                            <div className="booking-meta-details-content">
                                <img
                                    src="../images/plane.png"
                                    alt="plane"
                                    className="booking-meta-details-image"
                                />{' '}
                                <p className="booking-meta-details-title">
                                    Kyiv
                                </p>
                            </div>
                        </div>
                        <div className="booking-meta-details">
                            <div className="booking-meta-details-content">
                                <img
                                    src="../images/calendar.png"
                                    alt="calendar"
                                    className="booking-meta-details-image"
                                />{' '}
                                <p className="booking-meta-details-title">
                                    Apr 9-11
                                </p>
                            </div>
                        </div>
                        <div className="booking-meta-details">
                            <div className="booking-meta-details-content">
                                <img
                                    src="../images/profile2user.png"
                                    alt="users"
                                    className="booking-meta-details-image"
                                />{' '}
                                <p className="booking-meta-details-title">
                                    2 ad. 1 ch.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="booking-meta-details-container">
                        <div className="booking-meta-details-button-container">
                            <p className="booking-meta-details-button-text">
                                hotel page
                            </p>
                        </div>
                        <div className="booking-meta-details-button-container">
                            <p className="booking-meta-details-button-text">
                                booking info
                            </p>
                        </div>
                    </div>
                    <div id="account-small-text-container">
                        <span id="purple-text" className="account-small-text">
                            Want to cancel?
                        </span>
                        <span className="account-small-text">
                            Time left: 4 days 16 hours
                        </span>
                    </div>
                </div>
            </div>
            <h3 className="profile-section-second-title">Your reviews</h3>
            <div className="potom-pridumayu">
                <img
                    src="../images/noteremove.png"
                    alt="list paper"
                    className="potom-pridumayu-image"
                />
                <p className="potom-pridumayu-text">You have no reviews.</p>
            </div>
            <div className="bottom-container"></div>
        </section>
    )
}

export function PaymentSection() {
    const [cardType, setCardType] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')

    return (
        <section className="profile-section">
            <h2 className="title-profile">Payment method</h2>
            <div className="data-content">
                <div className="left-side-container">
                    <div className="left-side-content">
                        <div className="form-container">
                            <select
                                value={cardType}
                                onChange={e => setCardType(e.target.value)}
                                className="input-container"
                                id="select-card-type">
                                <option value="">
                                    Type of your debit card
                                </option>
                                <option value="visa">Visa</option>
                                <option value="mastercard">Mastercard</option>
                                <option value="maestro">Maestro</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Credit or debit card number"
                                value={cardNumber}
                                onChange={e => setCardNumber(e.target.value)}
                                className="input-container"
                            />

                            <input
                                type="text"
                                placeholder="Month | Date"
                                value={expiryDate}
                                onChange={e => setExpiryDate(e.target.value)}
                                className="input-container short-input"
                            />
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <p className="right-side-content">
                        This information will be kept private and confidential.
                        <br />
                        <br /> Once your booking is confirmed, the payment
                        details will be automatically filled in for your
                        convenience.
                    </p>
                </div>
                <h3 className="profile-section-second-title">
                    Saved payment methods
                </h3>
                <div className="potom-pridumayu">
                    <img
                        src="../images/cardremove1.png"
                        alt="card remove"
                        className="potom-pridumayu-image"
                    />
                    <p className="potom-pridumayu-text">
                        You have no saved payment methods
                    </p>
                </div>
            </div>

            <div className="payment-info">
                <p className="payment-info-title">
                    Rest assured that the payment information you enter on our
                    site is meticulously protected to ensure your utmost
                    security. We prioritize the safety of your transactions,
                    employing robust encryption protocols and industry-standard
                    security measures. With our steadfast commitment to
                    providing a completely safe payment process, you can
                    confidently book with us knowing that your financial
                    information is in trusted hands.
                </p>
                <a href="#" className="privacy-policy-link">
                    See privacy policy
                </a>
            </div>
            <div className="bottom-container"></div>
        </section>
    )
}

export function TravelSection() {
    return <TravelInformationSection />
}

export function NewslettersSection() {
    return (
        <section className="profile-section">
            {/* Main title */}
            <h2 className="title-profile">Newsletters</h2>

            {/* Top row: Intro text + Subscribe button */}
            <div className="newsletter-info-container">
                <div className="newsletter-info-text">
                    <p>
                        We curate a daily selection of topics based on your
                        interests and send them straight to your email address.
                    </p>
                    <button className="newsletter-subscribe-button">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            {/* Cards: Each card displays an image, title, description, and a "Choose this topic" option */}
            <div className="newsletter-cards-container">
                {/* Card 1: Seasonal offers */}
                <div className="newsletter-card">
                    <img
                        src="../images/seasonal-offers.jpg"
                        alt="Seasonal offers"
                        className="newsletter-card-image"
                    />
                    <div className="newsletter-card-content">
                        <h3 className="newsletter-card-title">
                            Seasonal offers
                        </h3>
                        <p className="newsletter-card-description">
                            Discover the finest offers for every season. Every
                            season has its own uniqueness, and we are here to
                            assist you in finding the most exceptional deals
                        </p>
                        <label className="newsletter-card-label">
                            <input type="radio" name="newsletterTopic" />
                            Choose this topic
                        </label>
                    </div>
                </div>

                {/* Card 2: Favorite cities */}
                <div className="newsletter-card">
                    <img
                        src="../images/favorite-cities.jpg"
                        alt="Favorite cities"
                        className="newsletter-card-image"
                    />
                    <div className="newsletter-card-content">
                        <h3 className="newsletter-card-title">
                            Favorite cities
                        </h3>
                        <p className="newsletter-card-description">
                            We curate a collection of top-rated hotels in the
                            cities you frequent the most, so you don't have to
                            spend time searching for great deals. Let us take
                            care of it for you!
                        </p>
                        <label className="newsletter-card-label">
                            <input type="radio" name="newsletterTopic" />
                            Choose this topic
                        </label>
                    </div>
                </div>

                {/* Card 3: Across the world */}
                <div className="newsletter-card">
                    <img
                        src="../images/across-the-world.jpg"
                        alt="Across the world"
                        className="newsletter-card-image"
                    />
                    <div className="newsletter-card-content">
                        <h3 className="newsletter-card-title">
                            Across the world
                        </h3>
                        <p className="newsletter-card-description">
                            Are you a frequent traveler across the world? Let us
                            help you find the best international deals! Enjoy
                            your vacation at a beautiful resort without breaking
                            the bank.
                        </p>
                        <label className="newsletter-card-label">
                            <input type="radio" name="newsletterTopic" />
                            Choose this topic
                        </label>
                    </div>
                </div>

                {/* Card 4: Affordable travel */}
                <div className="newsletter-card">
                    <img
                        src="../images/affordable-travel.jpg"
                        alt="Affordable travel"
                        className="newsletter-card-image"
                    />
                    <div className="newsletter-card-content">
                        <h3 className="newsletter-card-title">
                            Affordable travel
                        </h3>
                        <p className="newsletter-card-description">
                            Looking for affordable travel options? Let us find
                            the best budget deals for you in your preferred
                            country. You will be amazed at how easy it is to
                            travel comfortably now!
                        </p>
                        <label className="newsletter-card-label">
                            <input type="radio" name="newsletterTopic" />
                            Choose this topic
                        </label>
                    </div>
                </div>
            </div>
            <div className="profile-section-second-title">info</div>
            <div className="newsletters-info-container">
                <div className="newsletters-info-container-text">
                    <p className="newsletters-info-text">
                        Discover captivating travel articles crafted by our
                        expert team. Each week, we curate the most relevant and
                        fascinating texts on selected topics, ensuring our site
                        users enjoy a captivating reading experience. Delve into
                        inspiring stories, helpful travel tips, and exciting
                        destinations to fuel your wanderlust. Stay tuned for our
                        weekly updates and embark on a journey through our
                        engaging articles. Happy reading!
                    </p>
                </div>
                <div className="newsletters-info-image-container">
                    <img
                        src="../images/plane-newsletts.jpg"
                        alt="plane"
                        className="newsletters-info-image"
                    />
                </div>
            </div>
            <div className="bottom-container"></div>
        </section>
    )
}

export function SecuritySection() {
    return (
        <section class="profile-section">
            <h2 class="title-profile">Security</h2>

            <div class="security-section-content">
                <div class="security-left-column">
                    <div class="security-form-group">
                        <div class="security-input-container">
                            <input
                                type="text"
                                id="user-email"
                                value="debra.holt@example.com"
                                class="security-text-input"
                            />
                            <label class="security-label" for="user-email">
                                Is this still your email address?
                            </label>
                            <a href="#" class="security-change-link">
                                Change
                            </a>
                        </div>
                    </div>

                    <div class="security-form-group">
                        <div class="security-input-container">
                            <input
                                type="text"
                                id="user-phone"
                                value="(219) 555-0114"
                                class="security-text-input"
                            />
                            <label class="security-label" for="user-phone">
                                Is this still your phone number?
                            </label>
                            <a href="#" class="security-change-link">
                                Change
                            </a>
                        </div>
                    </div>

                    <div class="security-form-group">
                        <div class="security-input-container">
                            <input
                                type="password"
                                id="user-phone"
                                value="password12345"
                                class="security-text-input"
                            />
                            <label class="security-label" for="user-phone">
                                Forgot your passwords?
                            </label>
                            <a href="#" class="security-restore-link">
                                Restore password
                            </a>
                        </div>
                    </div>
                </div>

                <div class="security-right-column">
                    <p>
                        When booking hotel rooms online, it is essential to pay
                        attention to the privacy policy of the website. The
                        privacy policy outlines how your personal information is
                        collected, used, and protected by the platform. By
                        reading the privacy policy, you can ensure that your
                        data is handled responsibly and in line with your
                        expectations.
                    </p>
                    <p>
                        The privacy policy provides valuable insights into what
                        information is being collected during the booking
                        process. It includes data such as your name, contact
                        information, payment details, and preferences.
                        Understanding how this information is used helps the
                        website in crucial ways, including maintaining your
                        privacy and security.
                    </p>
                    <p>
                        Additionally, the privacy policy often specifies how
                        your data is shared with third parties, if at all. It
                        informs you about any analytics or service providers
                        involved in the booking process and how they handle your
                        information. This understanding allows you to make
                        informed decisions about sharing your personal data. By
                        familiarizing yourself with the privacy policy, you can
                        gain peace of mind knowing that your personal
                        information is being used responsibly. It also serves as
                        a reminder to always read the privacy policy on any
                        website before booking or making important transactions.
                    </p>
                    <p>
                        <a href="#" class="privacy-policy-link">
                            See privacy policy
                        </a>
                    </p>
                </div>
            </div>
            <div class="bottom-container"></div>
        </section>
    )
}

export function Profile(props) {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <NavigationProfile />
                <Outlet />
            </div>
        </div>
    )
}
