import React from 'react'
import './LargeHotelCard.css'
import {
    FaMapMarkerAlt,
    FaStar,
    FaCrown,
    FaCity,
    FaCouch,
} from 'react-icons/fa'

export function LargeHotelCard({
    image,
    title,
    stars = 4,
    score = 7.9,
    reviews = 345,
    tags = ['popular', 'city centre', 'comfortable'],
    distance = { airport: '3.5km', station: '4.2km' },
    price = 85,
    onChoose = () => {},
}) {
    return (
        <article className="hotel">
            {/* ---------- image ---------- */}
            <img src={image} alt={title} className="hotel__img" />

            {/* ---------- text block ---------- */}
            <div className="hotel__content">
                <div className="hotel__head">
                    <h3 className="hotel__title">{title}</h3>

                    {/* дублируем рейтинг, но показываем ТОЛЬКО на mob */}
                    <div className="hotel__rating hotel__rating--mobile">
                        <span className="hotel__score">{score}</span>
                        <span className="hotel__reviews">
                            reviews
                            <br />
                            {reviews}
                        </span>
                    </div>
                </div>

                <div className="hotel__stars">
                    {Array.from({ length: stars }).map((_, i) => (
                        <FaStar className="hotel__stars star" key={i} />
                    ))}
                </div>

                <ul className="hotel__tags">
                    {tags.map(t => (
                        <li key={t}>
                            {t.includes('popular') ? (
                                <img src="../images/crown.png" alt="crown" />
                            ) : t.includes('city') ? (
                                <img src="../images/rank.png" alt="crown" />
                            ) : (
                                <img src="../images/coffee.png" alt="crown" />
                            )}
                            {t}
                        </li>
                    ))}
                </ul>

                <p className="hotel__distance">
                    airport {distance.airport}&nbsp;&nbsp; railway station{' '}
                    {distance.station}
                </p>

                <button className="hotel__map">
                    see on the map <img src="../images/arrowright.png" alt="arrow" />
                </button>

                <p className="hotel__desc">
                    Located in the heart of Kiev, our hotel offers a prime
                    location for exploring the city's rich history and
                    culture...
                </p>
            </div>

            {/* ---------- right column ---------- */}
            <aside className="hotel__aside">
                {/* rating on top */}
                <div className="hotel__rating hotel__rating--desktop">
                    <span className="hotel__score">{score}</span>
                    <span className="hotel__reviews">
                        <span> reviews</span>
                        <span>{reviews}</span>
                    </span>
                </div>

                {/* price + btn pinned to bottom */}
                <div className="hotel__buy">
                    <p className="hotel__from">prices from</p>
                    <p className="hotel__price">{price}$</p>
                    <button className="hotel__choose" onClick={onChoose}>
                        CHOOSE
                    </button>
                </div>
            </aside>
        </article>
    )
}
