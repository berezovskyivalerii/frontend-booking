import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeaderHotel } from '../components/HeaderHotel'
import { HotelDetail } from '../components/HotelDetail'
import { FaShoppingBag, FaCity, FaCouch } from 'react-icons/fa'
import { HotelReviews } from '../components/HotelReviews'
import { Facilities } from '../components/Facilities'
import { InfoBar } from '../components/InfoBar'
import { MediumHotelCards } from '../components/MediumHotelCards'
import { WhatsNearby } from '../components/WhatsNearby'
import { CommentsSection } from '../components/CommentsSection'
import { SmallHotelCard } from '../components/SmallHotelCard'
import { FaqSection } from '../components/FaqSection'

const images = [
    '../images/onehotel1.jpg',
    '../images/onehotel2.jpg',
    '../images/onehotel3.jpg',
    '../images/onehotel4.jpg',
]

// Цена, адрес и описание
const price = 85
const address = 'LVIV STREET 8 | KYIV'
const description = `Located in the heart of Kiev, our hotel offers a prime location for exploring the city's rich history and culture. With luxurious accommodations and top‑notch amenities, we provide a comfortable and relaxing stay for all our guests. Whether you're traveling for business or leisure, our attentive staff is always on hand to assist with any needs you may have.`

// Тэги с иконками
const tags = [
    { icon: <FaShoppingBag />, label: 'popular' },
    { icon: <FaCity />, label: 'city centre' },
    { icon: <FaCouch />, label: 'comfortable' },
]

// Объект отзыва для <Comment>
const review = {
    avatar: 'https://i.pravatar.cc/100?img=12',
    name: 'John Doe',
    hotel: 'Tourist Hotel',
    daysAgo: 19,
    comment:
        'Lorem ipsum dolor sit amet consectetur. Facilisis nulla eun. Ac netus tincidunt sed.',
}

const hotels = [
    {
        id: 1,
        image: '../images/onehotel1.jpg',
        title: 'Suite with a queen-size bed',
        price: 85,
    },
    {
        id: 2,
        image: '../images/onehotel2.jpg',
        title: 'Suite with a queen-size bed',
        price: 75,
    },
    {
        id: 3,
        image: '../images/onehotel3.jpg',
        title: 'Standard room with a double bed',
        price: 62,
        amenities: ['free wi-fi', 'bath'],
    },
    {
        id: 4,
        image: '../images/onehotel4.jpg',
        title: 'Standard room',
        price: 65,
        amenities: ['free wi-fi', 'bath'],
    },
]

const comments = [
    {
        id: 1,
        avatar: './images/comment-avatar1.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 2,
        avatar: './images/comment-avatar2.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 3,
        avatar: './images/comment-avatar3.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 4,
        avatar: './images/comment-avatar1.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 5,
        avatar: './images/comment-avatar2.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 6,
        avatar: './images/comment-avatar3.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 7,
        avatar: './images/comment-avatar1.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 8,
        avatar: './images/comment-avatar2.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
    {
        id: 9,
        avatar: './images/comment-avatar3.png',
        name: 'John Doe',
        hotel: 'Hotel California',
        daysAgo: 12,
        comment:
            'Lorem ipsum dolor sit amet consectetur. Viverra ultricies enim interdum fermentu tor. Facilisis nulla eun. Ac netus tincidunt arcu er sed.',
    },
]

export function Hotel() {
    return (
        <div className="hotel-page">
            <Header />
            <div className="wrapper">
                <HeaderHotel />
                <HotelDetail
                    images={images}
                    price={price}
                    address={address}
                    description={description}
                    tags={tags}
                    review={review}
                />
                <HotelReviews />
                <Facilities />

                <section className="page-section">
                    <h2 className="profile-section-second-title">
                        important information
                    </h2>

                    <div className="infobars-container">
                        <InfoBar
                            url="../images/plane.png"
                            name="plane"
                            text="Check-in time from 15:00 to 23:00"
                        />
                        <InfoBar
                            url="../images/bedricon.png"
                            name="bed"
                            text="Maximum number of extra beds 1"
                        />
                        <InfoBar
                            url="../images/monumenticon.png"
                            name="monument"
                            text="City center 45 m"
                        />
                        <InfoBar
                            url="../images/trainicon.png"
                            name="train"
                            text="Train station 356 m 
Airport 543 m"
                        />
                        <InfoBar
                            url="../images/peticon.png"
                            name="pet"
                            text="Pets are allowed 
No extra charge"
                        />
                    </div>
                </section>

                <section className="page-section">
                    <h2 className="profile-section-second-title">book</h2>
                    <MediumHotelCards hotels={hotels} />
                </section>

                <WhatsNearby />

                <CommentsSection comments={comments} />
                <FaqSection/>
                <section className="page-section">
                    <h2 className="profile-section-second-title">
                        hotels nearby
                    </h2>
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
                </section>
            </div>
            <Footer />
        </div>
    )
}
