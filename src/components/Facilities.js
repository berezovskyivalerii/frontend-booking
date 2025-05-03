// Facilities.jsx
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import './Facilities.css'

export function Facilities() {
    const [expanded, setExpanded] = useState(false)

    return (
        <section
            className={`facilities ${expanded ? 'facilities--expanded' : ''}`}>
            <h2 className="profile-section-second-title">Facilities</h2>

            <div className="facilities__columns">
                {/* ===== COL 1 ===== */}
                <div>
                    <Section
                        title="General"
                        items={[
                            'Shuttle service',
                            'Additional charge',
                            'Grocery deliveries',
                            'Minimarket on site',
                            'Designated smoking area',
                            'Air conditioning',
                            'Mosquito net',
                            'Wake-up service',
                            'Heating',
                            'Interconnected room(s) available',
                            'Lift',
                            'Family rooms',
                            'Barber/beauty shop',
                            'Airport shuttle',
                            'Additional charge',
                            'Non-smoking rooms',
                            'Wake-up service/Alarm clock',
                            'Room service',
                        ]}
                    />

                    <Section
                        title="Accessibility"
                        items={[
                            'Upper floors accessible by stairs only',
                            'Upper floors accessible by elevator',
                        ]}
                        mobileHidden
                    />

                    <Section
                        title="Languages spoken"
                        items={['English', 'Russian', 'Ukrainian']}
                    />
                </div>

                {/* ===== COL 2 ===== */}
                <div>
                    <Section title="Parking" items={['Parking garage']} />

                    <Section
                        title="Reception services"
                        items={[
                            'Fire extinguishers',
                            'CCTV outside property',
                            'CCTV in common areas',
                            'Smoke alarms',
                            'Security alarm',
                            'Key card access',
                            '24-hour security',
                            'Safety deposit box',
                        ]}
                    />

                    <Section
                        title="Cleaning services"
                        items={[
                            'Daily housekeeping',
                            'Laundry',
                            'Additional charge',
                        ]}
                    />

                    <Section
                        mobileHidden
                        title="Entertainment and family services"
                        items={["Kids' outdoor play equipment"]}
                    />

                    <Section
                        mobileHidden
                        title="Safety & security"
                        items={[
                            'Invoice provided',
                            'Private check-in/check-out',
                            'Concierge service',
                            'Luggage storage',
                            'Express check-in/check-out',
                            '24-hour front desk',
                        ]}
                    />
                </div>

                {/* ===== COL 3 ===== */}
                <div>
                    <Section
                      mobileHidden
                        title="Bathroom"
                        items={[
                            'Toilet paper',
                            'Towels',
                            'Slippers',
                            'Private bathroom',
                            'Toilet',
                            'Free toiletries',
                            'Hairdryer',
                            'Shower',
                        ]}
                    />

                    <Section title="Bedroom" mobileHidden items={['Linen']} />
                    <Section
                        title="Kitchen"
                        mobileHidden
                        items={['Electric kettle']}
                    />
                    <Section
                        title="Room Amenities"
                        mobileHidden
                        items={['Clothes rack']}
                    />

                    <Section
                        mobileHidden
                        title="Pets"
                        items={['Pets are allowed. No extra charges']}
                    />

                    <Section
                        mobileHidden
                        title="Media & Technology"
                        items={['Flat-screen TV', 'Cable channels']}
                    />

                    <Section
                        title="Food & Drinks"
                        items={['Coffee house on site']}
                        mobileHidden
                    />
                    <Section
                        title="Internet"
                        items={['Internet access available']}
                        mobileHidden
                    />
                </div>
            </div>
            <button
                className="facilities__more"
                onClick={() => setExpanded(v => !v)}>
                {expanded ? 'Hide facilities' : 'Show all facilities'}
            </button>
        </section>
    )
}

function Section({ title, items, mobileHidden }) {
    return (
        <div
            className={
                'facilities__group' +
                (mobileHidden ? ' facilities__group--extra' : '')
            }>
            {' '}
            <h3 className="facilities__heading">{title}</h3>
            <ul className="facilities__list">
                {items.map(el => (
                    <li key={el} className="facilities__item">
                        <FaCheck className="facilities__check" />
                        <span className="facilities__text">{el}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
