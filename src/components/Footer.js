import React, { useState } from 'react'
import './Footer.css'

const footerColumns = [
    [
        ['Places'],
        [
            'Countries',
            'Regions',
            'Cities',
            'Districts',
            'Airports',
            'Hotels',
            'Places of interest',
        ],
    ],

    [
        ['Destinations'],
        [
            'Homes',
            'Apartments',
            'Resorts',
            'Villas',
            'Hostels',
            'B&Bs',
            'Guest houses',
        ],
    ],
    [
        ['Homes'],
        [
            'Unique places to stay',
            'All destinations',
            'All flight destinations',
            'All car hire locations',
            'Discover',
            'Reviews',
            'Awards',
        ],
    ],
    [
        ['Transport'],
        [
            'Car hire',
            'Flight finder',
            'Restaurant reservations',
            'For Travel Agents',
        ],
    ],
    [
        ['Сommon questions and information'],
        [
            'Coronavirus (COVID-19)',
            'FAQs',
            'About Booking.com',
            'Customer Service help',
            'Partner help',
            'Careers',
            'Sustainability',
            'Press centre',
            'Safety resource centre',
            'Investor relations',
            'Terms & Conditions',
            'Partner dispute',
            'How we work',
            'Privacy & Cookie Statement',
            'MSA Statement',
            'Corporate contact',
            'We Price Match',
        ],
    ],
]

export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {footerColumns.map((column, index) => {
                    const [title, links] = column

                    return (
                        <div className="footer-column-wrapper" key={index}>
                            <div
                                className="footer-header">
                                <span>{title}</span>
                                <span
                                    className="arrow">
                                    <img src="./images/arrow-down.png" alt="" />
                                </span>
                            </div>
                            <div
                                className="footer-column">
                                {links.map((item, i) => (
                                    <a href="#" key={i}>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </footer>
    )
}
