import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa'
import { Comment } from './Comment'
import './HotelDetail.css'

export function HotelDetail(props) {
    const {
        images, // массив URL картинок
        price, // число, например 85
        address, // строка, например "LVIV STREET 8 | KYIV"
        description, // текст описания
        tags, // массив объектов { icon: ReactNode, label: string }
        review, // объект props для <Comment {...review}/>
    } = props

    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((current - 1 + images.length) % images.length)
    const next = () => setCurrent((current + 1) % images.length)

    return (
        <div className="hotel-detail">
            {/* Галерея */}
            <div className="hotel-detail__gallery">
                <div className="hotel-detail__main">
                    <img src={images[current]} alt="" />
                    <button className="nav nav--left" onClick={prev}>
                        <FaChevronLeft />
                    </button>
                    <button className="nav nav--right" onClick={next}>
                        <FaChevronRight />
                    </button>
                </div>
                <div className="hotel-detail__thumbs">
                    {images.map((src, i) => (
                        <img
                            key={i}
                            className={i === current ? 'active' : ''}
                            src={src}
                            alt=""
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Информация */}
            <div className="hotel-detail__info">
                <div className="info__header">
                    <div className="info__price">
                        <span className="amount">{price}$</span>
                        <span className="per-night">per night</span>
                    </div>
                    <div className="info__location">
                        <img src="../images/locationred.png" alt="location" className="icon-marker" /> {address}
                    </div>
                </div>

                <button className="info__book">BOOK</button>

                <p className="info__desc">{description}</p>

                <div className="info__tags">
                    {tags.map((t, i) => (
                        <div key={i} className="tag">
                            {t.icon} <span>{t.label}</span>
                        </div>
                    ))}
                </div>

                <hr className="info__divider" />

                {/* Используем готовый компонент Comment */}
                <Comment {...review} />
            </div>
        </div>
    )
}
