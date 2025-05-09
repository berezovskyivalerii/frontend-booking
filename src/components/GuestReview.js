import React from 'react'
import './GuestReview.css'

export default function GuestReview({
    rating = 0,
    label = 'REVIEW',
    size = 100,
    stroke = 4,
    color = '#5a1aff',
}) {
    const safeRating = Math.min(Math.max(rating, 0), 10)

    const radius = 40
    const circumference = 2 * Math.PI * radius
    const offset = circumference * (1 - safeRating / 10)

    return (
        <div className="guest-review" style={{ width: size }}>
            <svg
                width={size}
                height={size}
                className="guest-review__ring"
                style={{ transform: 'rotate(0deg)' }}>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeOpacity="0.2"
                    strokeWidth={stroke}
                    fill="transparent"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={stroke}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                />

                <text
                    x="50%"
                    y="54%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={color}
                    fontSize="28px"
                    fontWeight="600"
                    fontFamily="Nunito Sans">
                    {safeRating.toFixed(1)}
                </text>
            </svg>

            <p className="guest-review__label">{label}</p>
        </div>
    )
}
