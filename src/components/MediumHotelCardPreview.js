import React from 'react'
import './MediumHotelCard.css'

export function MediumHotelCardPreview({
    image,
    title,
    beds = 'queen-sized bed 1 | double bed 1',
    guests = 'maximum 3',
    price = 85,
    amenities = ['free wi-fi', 'bath', 'private pool'],
    onChoose = () => {},
    onInfo = () => {},
}) {
    return (
        <article className="hotel-card-medium">
            <img src={image} alt={title} className="hotel-card__img" />

            <div className="hotel-card__body">
                <h3 className="hotel-card__title">{title}</h3>

                <ul className="hotel-card__feature-list">
                    <li>
                        <img src="../images/bedricon.png" alt="bed" /> <span className="key">Bed:</span>
                        <span className="value">{beds}</span>
                    </li>
                    <li>
                        <img src="../images/profile2user.png" alt="guests" /> <span className="key">Guests:</span>
                        <span className="value">{guests}</span>
                    </li>
                </ul>

                <ul className="hotel-card__amenities">
                    {amenities.slice(0, 3).map(a => (
                        <li key={a} title={a}>
                            {a.includes('wi') ? (
                                <img src="../images/wifiicon.png" alt="wifi" />
                            ) : a.includes('bath') ? (
                                <img src="../images/bathicon.png" alt="bath" />
                            ) : (
                                <img src="../images/poolicon.png" alt="pool" />
                            )}
                            <span>{a}</span>
                        </li>
                    ))}
                </ul>

                <p className="hotel-card__cancellation">
                    <img src="../images/galochkaicon.png" alt="check" /> FREE cancellation
                </p>
            </div>
        </article>
    )
}
