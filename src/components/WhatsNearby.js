import React from 'react'
import { FaTree, FaUtensils, FaBusAlt, FaUmbrellaBeach } from 'react-icons/fa'
import './WhatsNearby.css'

export function WhatsNearby() {
    const columns = [
        {
            groups: [
                {
                    icon: <FaTree />,
                    title: 'Attractions',
                    items: [
                        ['Park Yunist', '2 km'],
                        ['Сквер Павла Шклярука', '1 km'],
                        ['Сквер героїчної оборони Одеси', '2 km'],
                        ['Міжрейсова база моряків', '5 km'],
                        ['Школа-інтернат № 91 для глухомовних дітей', '5 km'],
                        ['Український науковий центр екології моря', '12 km'],
                        ['Сквер героїв-льотчиків', '4 km'],
                        ['Скелеродром', '8 km'],
                        ['Стадіон ОНЮА', '2 km'],
                        ['Botanical Garden', '2 km'],
                    ],
                },
            ],
        },
        {
            groups: [
                {
                    icon: <FaUtensils />,
                    title: 'Attractions',
                    items: [
                        ['Cafe/bar  Бекерай SDОBA', '2 km'],
                        ['Restaurant  Shpinat', '1 km'],
                        ['Restaurant  Стронг Хаус', '2 km'],
                    ],
                },
                {
                    icon: <FaBusAlt />,
                    title: 'Public transport',
                    items: [
                        ['Train  Odessa-Mala', '16 km'],
                        ['Train  Odessa Train Station', '11 km'],
                    ],
                },
                {
                    icon: <FaBusAlt />,
                    title: 'Public transport',
                    items: [['Kyiv  International Airport', '16 km']],
                },
            ],
        },
        {
            groups: [
                {
                    icon: <FaUmbrellaBeach />,
                    title: 'Beaches in the neighbourhood',
                    items: [
                        ['Arkadia Beach', '9 km'],
                        ['Station Velykoho Fontanu Beach', '8 km'],
                        ['Chayka', '12 km'],
                        ['SBU beach', '18 km'],
                        ['Malomu Fontani Beach', '19 km'],
                    ],
                },
            ],
        },
    ]

    /* --------------------------- UI --------------------------- */
    return (
        <section className="page-section">
            <h2 className="profile-section-second-title">WHAT’S NEARBY</h2>

            <div className="nearby__columns">
                {columns.map((col, idx) => (
                    <div key={idx} className="nearby__column">
                        {col.groups.map(({ icon, title, items }) => (
                            <Group
                                key={title}
                                icon={icon}
                                title={title}
                                items={items}
                            />
                        ))}
                    </div>
                ))}
            </div>

            <div className="nearby__map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2748.262013267836!2d30.748974317443846!3d46.463317880210205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6316330f4b8a9%3A0xe02cf028c2c36b6c!2z0JTQvtC8INCe0YTQuNGG0LXRgNC-0LIg0K7QttC90L7Qs9C-INCe0L_QtdGA0LDRgtC40LLQvdC-0LPQviDQmtC-0LzQsNC90LTQvtCy0LDQvdC40Y8!5e0!3m2!1sru!2sus!4v1745586979602!5m2!1sru!2sus"
                    width="600"
                    height="450"
                    style={{border:0}}
                    allowfullscreen=""
                    loading="lazy"
                    title='Google Map'
                    referrerpolicy="no-referrer-when-downgrade"
                    className="google-map"></iframe>
            </div>
        </section>
    )
}

function Group({ icon, title, items }) {
    return (
        <div className="nearby__group">
            <h3 className="nearby__heading">
                {icon}
                {title}
            </h3>

            <ul className="nearby__list">
                {items.map(([place, dist]) => (
                    <li key={place} className="nearby__item">
                        <span className="place">{place}</span>
                        <span className="dist">{dist}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
