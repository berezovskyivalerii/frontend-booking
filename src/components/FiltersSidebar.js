import React from 'react'
import './FiltersSidebar.css'

function Section({ title, children, defaultOpen = true }) {
    return (
        <div className="flt-section">
            <button className="flt-section__head">{title}</button>
            <div className="flt-section__body">{children}</div>
        </div>
    )
}

export function FiltersSidebar() {
    return (
        <section className="flt-sidebar__container">
            <div className="flt-sidebar__top">
                <button className="flt-toggle-btn">
                    Filter
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M4 6h16M7 12h10M10 18h4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <button className="flt-map-btn">
                    See the map{' '}
                    <img src="../images/locationred.png" alt="map" />
                </button>
            </div>

            <aside className="flt-sidebar">
                <Section title="Price">
                    <input
                        type="range"
                        min="0"
                        max="3000"
                        defaultValue="1500"
                    />
                    <div className="range-values">
                        <span>765$ night</span>
                        <span>230$ night</span>
                    </div>
                </Section>

                <Section title="Rating">
                    <ul className="flt-list">
                        {[9, 8, 7, 6].map(n => (
                            <li key={n}>
                                <label>
                                    <input type="checkbox" /> {n}+
                                </label>
                                <span className="count">99</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Popular">
                    <ul className="flt-list">
                        {[
                            ['City centre', 435],
                            ['Popular places', 937],
                            ['Best rating', 45],
                        ].map(t => (
                            <li key={t}>
                                <label>
                                    <input type="checkbox" /> {t.at(0)}
                                </label>
                                <span className="count">{t.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Stars">
                    <ul className="flt-list">
                        {[
                            [5, 135],
                            [4, 37],
                            [3, 45],
                            [2, 89],
                            [1, 112],
                        ].map(n => (
                            <li key={n.at(0)}>
                                <label>
                                    <input type="checkbox" />{' '}
                                    {'★'.repeat(n).padEnd(5, '☆')}
                                </label>
                                <span className="count">{n.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Near">
                    <ul className="flt-list">
                        {[
                            ['Metro', 56],
                            ['Airport', 34],
                            ['Station', 89],
                        ].map(t => (
                            <li key={t}>
                                <label>
                                    <input type="checkbox" /> {t.at(0)}
                                </label>
                                <span className="count">{t.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Facilities" defaultOpen={false}>
                    <ul className="flt-list">
                        {[
                            ['Wi-Fi', 1135],
                            ['Restaurants', 337],
                            ['24/7', 345],
                            ['Food in the hotel', 589],
                            ['Bar', 112],
                            ["Children's area", 155],
                        ].map(f => (
                            <li key={f}>
                                <label>
                                    <input type="checkbox" /> {f.at(0)}
                                </label>
                                <span className="count">{f.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section title="Type of hotel" defaultOpen={false}>
                    <ul className="flt-list">
                        {[
                            ['Motel', 135],
                            ['Resort', 37],
                            ['Inn', 45],
                            ['All suite', 89],
                            ['Conderence center', 112],
                            ['Extended stay', 55],
                            ['Boutique', 66],
                            ['Bunkhous', 210],
                            ['Bed and breakfasts', 19],
                        ].map(f => (
                            <li key={f}>
                                <label>
                                    <input type="checkbox" /> {f.at(0)}
                                </label>
                                <span className="count">{f.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
                <Section title="Chain hotels" defaultOpen={false}>
                    <ul className="flt-list">
                        {[
                            ['Sapphire Suites', 1],
                            ['Ocean View Hotel', 2],
                            ['Sunflower Resort', 1],
                            ['Starlight Lodge', 3],
                            ['Paradise Plaza', 1],
                            ['Golden Sands Inn', 1],
                            ['Moonlight Manor', 1],
                            ['Sunset Suites', 1],
                            ['Skyline Hotel', 1],
                        ].map(f => (
                            <li key={f}>
                                <label>
                                    <input type="checkbox" /> {f.at(0)}
                                </label>
                                <span className="count">{f.at(1)}</span>
                            </li>
                        ))}
                    </ul>
                </Section>
            </aside>
        </section>
    )
}
