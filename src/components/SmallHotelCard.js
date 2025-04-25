    import React from 'react'
    import './SmallHotelCard.css'

    export function SmallHotelCard(props) {
        const { image, name, distance, pricePerNight } = props

        const backgroundStyle = {
            backgroundImage: `url(${props.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <div className="hotel-card">
                <div className="hotel-image-container" style={backgroundStyle}>
                    <img src={image} alt={`${name}`} />
                    <div className="hotel-favorite-icon">
                        <img src="./images/start-fabotite.png" alt="favorite" />
                    </div>
                    <div className="carousel-dots">
                        <span className="dot active" />
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>
                </div>
                <div className="hotel-info">
                    <div className="hotel-title">Hotel name | City | Country</div>
                    <div className="hotel-stars">{'★'.repeat(4)}</div>
                    <div className="hotel-distance">
                        the city center : {distance} m
                    </div>
                    <div className="hotel-price">
                        <strong>$ {pricePerNight}</strong> night
                    </div>
                </div>
            </div>
        )
    }
