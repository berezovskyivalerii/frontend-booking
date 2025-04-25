import React from 'react'
import { SmallHotelCard } from './SmallHotelCard'
import { Comment } from './Comment'
import { InfoBar } from './InfoBar'
import { PurpleButton } from './PurpleButton'
import { SimplifierInfoBar } from './SimpifierInfoBar'
import './MainContent.css'

export function MainContent(props) {
    return (
        <div>
            <div className="smp-infobars-container">
                <SimplifierInfoBar
                    text="Easy booking"
                    url="./images/folder.png"
                />
                <SimplifierInfoBar
                    text="Secure payment"
                    url="./images/lock1.png"
                />
                <SimplifierInfoBar
                    text="Relevant information"
                    url="./images/receipt2.png"
                />
            </div>
            <section className="small-hotels-cards">
                {/* 1-й ряд: 4 карточки */}
                <div className="small-hotels-cards-row">
                    <SmallHotelCard
                        image="./images/hotel-card1.jpg"
                        name="hotel"
                        distance="114"
                        pricePerNight="130"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card2.jpg"
                        name="hotel"
                        distance="1168"
                        pricePerNight="142"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card3.jpg"
                        name="hotel"
                        distance="96"
                        pricePerNight="98"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card4.jpg"
                        name="hotel"
                        distance="106"
                        pricePerNight="168"
                    />
                </div>

                {/* 2-й ряд: 4 карточки */}
                <div className="small-hotels-cards-row">
                    <SmallHotelCard
                        image="./images/hotel-card5.jpg"
                        name="hotel"
                        distance="116"
                        pricePerNight="130"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card6.jpg"
                        name="hotel"
                        distance="1168"
                        pricePerNight="142"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card7.jpg"
                        name="hotel"
                        distance="204"
                        pricePerNight="102"
                    />
                    <SmallHotelCard
                        image="./images/hotel-card8.jpg"
                        name="hotel"
                        distance="683"
                        pricePerNight="98"
                    />
                </div>
            </section>

            <div className="title-section">
                <h3>reviews</h3>
            </div>
            <section className="commments-container">
                <Comment
                    avatar="./images/comment-avatar1.png"
                    name="John Doe"
                    hotel="Hotel California"
                    daysAgo={12}
                    comment="Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed."
                />
                <Comment
                    avatar="./images/comment-avatar2.png"
                    name="John Doe"
                    hotel="Hotel Los Angeles"
                    daysAgo={19}
                    comment="Lorem ipsum dolor sit amet consectetur.  Facilisis nulla eun. Ac netus tincidunt sed."
                />
                <Comment
                    avatar="./images/comment-avatar3.png"
                    name="John Doe"
                    hotel="Hotel Meruem"
                    daysAgo={3}
                    comment="Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt."
                />
            </section>

            <div className="title-section">
                <h3>safe with us</h3>
            </div>

            <section className="infobars-container">
                <InfoBar
                    url="./images/buildings.png"
                    name="buildings"
                    text="We choose hotels that meet our standards"
                />
                <InfoBar
                    url="./images/convertcard.png"
                    name="convertcard"
                    text="Secure payment without hidden fees"
                />
                <InfoBar
                    url="./images/tag.png"
                    name="tag"
                    text="Сurrent prices and best deals"
                />
                <InfoBar
                    url="./images/clock.png"
                    name="clock"
                    text="Easy booking which will not take you long"
                />
                <InfoBar
                    url="./images/directinbox.png"
                    name="directinbox"
                    text="We'll promptly email  booking confirmation."
                />
            </section>

            <div className="title-section">
                <h3>be our regular </h3>
            </div>

            <section className="be-our-regular-container">
                <div className="regular-image-container">
                    <img src="./images/regular.jpg" alt="woman" />
                </div>
                <div className="regular-paragraph-container">
                    <p>
                        We believe that every customer deserves the best, and
                        we're committed to providing top-class services to all
                        of our clients. When you book with us, you can enjoy not
                        only great deals on your travel arrangements, but also
                        exclusive discounts and special offers. We value your
                        loyalty and want to show our appreciation by giving
                        back.
                        <br />
                        <br />
                        So start your search today and discover the amazing
                        rewards waiting for you on our website!
                    </p>
                </div>
            </section>

            <div className="register-button-container">
                <img src="./images/flag.png" alt="flag" />
                <PurpleButton text="Register an account" />
                <img src="./images/flag.png" alt="flag" id="reversed-flag" />
            </div>
        </div>
    )
}
