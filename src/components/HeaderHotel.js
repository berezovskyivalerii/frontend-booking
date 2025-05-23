import React from 'react'
import {
    FaEllipsisH,
    FaStar,
    FaChevronDown,
} from 'react-icons/fa'
import './HeaderHotel.css'

export function HeaderHotel() {
    return (
        <header className="header-hotel">
            <div className="header-hotel__left">
                {[
                    {
                        icon: <img src="../images/plane.png" alt="plane" />,
                        label: 'Kyiv',
                    },
                    {
                        icon: (
                            <img src="../images/calendar.png" alt="calendar" />
                        ),
                        label: 'Apr 9‑11',
                    },
                    {
                        icon: (
                            <img src="../images/profile2user.png" alt="users" />
                        ),
                        label: '2 ad. 1 ch.',
                    },
                ].map((item, i) => (
                    <div key={i} className="header-hotel__block">
                        <div className="header-hotel__icon">{item.icon}</div>
                        <div className="header-hotel__label">{item.label}</div>
                        <FaEllipsisH className="header-hotel__more" />
                    </div>
                ))}
            </div>

            <div className="header-hotel__center">
                <div className="header-hotel__stars">
                    {[...Array(4)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <h1 className="header-hotel__title">Tourist Hotel</h1>
                <div className="header-hotel__phone">(380) 555‑0103</div>
            </div>

            <div className="header-hotel__right">
                <div className="header-hotel__score">7.9</div>
                <div className="header-hotel__reviews">
                    <span className="header-hotel__reviews-label">reviews</span>
                    <span className="header-hotel__reviews-num">345</span>
                </div>
                <div className="header-hotel__check">
                    <span>check</span>
                    <FaChevronDown className="header-hotel__arrow" />
                </div>
            </div>
        </header>
    )
}
