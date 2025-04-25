import React from 'react'
import './TravelInformationSection.css'
import "../global.css"

const TravelInformationSection = () => {
    return (
        <section class="profile-section">
            <h2 class="title-profile">Travel Information</h2>

            <div class="travel-section-content">
                <div class="travel-inputs-column">
                    <h3 className="title-travel">General</h3>
                    <label>
                        <input type="checkbox" />
                        Shuttle service
                    </label>
                    <label>
                        <input type="checkbox" />
                        Additional charge
                    </label>
                    <label>
                        <input type="checkbox" />
                        Grocery deliveries
                    </label>
                    <label>
                        <input type="checkbox" />
                        Minimarket on site
                    </label>
                    <label>
                        <input type="checkbox" />
                        Designated smoking area
                    </label>
                    <label>
                        <input type="checkbox" />
                        AC
                    </label>
                    <label>
                        <input type="checkbox" />
                        Air conditioning
                    </label>
                    <label>
                        <input type="checkbox" />
                        Room service
                    </label>
                    <label>
                        <input type="checkbox" />
                        Wake-up service
                    </label>
                    <label>
                        <input type="checkbox" />
                        Heating
                    </label>
                    <label>
                        <input type="checkbox" />
                        Interconnected room(s) available
                    </label>
                    <label>
                        <input type="checkbox" />
                        Family rooms
                    </label>
                    <label>
                        <input type="checkbox" />
                        Barber/beauty shop
                    </label>
                    <label>
                        <input type="checkbox" />
                        Airport charge
                    </label>
                    <label>
                        <input type="checkbox" />
                        Non-smoking rooms
                    </label>

                    <h3 className="title-travel">Accessibility</h3>
                    <label>
                        <input type="checkbox" />
                        Upper floors accessible by stairs only
                    </label>

                    <h3 className="title-travel">Languages spoken</h3>
                    <label>
                        <input type="checkbox" />
                        English
                    </label>
                    <label>
                        <input type="checkbox" />
                        Russian
                    </label>
                    <label>
                        <input type="checkbox" />
                        Ukrainian
                    </label>
                </div>

                <div class="travel-inputs-column">
                    <h3 className="title-travel">Parking</h3>
                    <label>
                        <input type="checkbox" />
                        Parking garage
                    </label>

                    <h3 className="title-travel">Reception services</h3>
                    <label>
                        <input type="checkbox" />
                        Fire extinguishers
                    </label>
                    <label>
                        <input type="checkbox" />
                        CCTV outside property
                    </label>
                    <label>
                        <input type="checkbox" />
                        CCTV in common areas
                    </label>
                    <label>
                        <input type="checkbox" />
                        Security alarm
                    </label>
                    <label>
                        <input type="checkbox" />
                        Key access
                    </label>
                    <label>
                        <input type="checkbox" />
                        Safety deposit box
                    </label>

                    <h3 className="title-travel">Cleaning services</h3>
                    <label>
                        <input type="checkbox" />
                        Daily housekeeping
                    </label>
                    <label>
                        <input type="checkbox" />
                        Laundry
                    </label>
                    <label>
                        <input type="checkbox" />
                        Ironing service
                    </label>

                    <h3 className="title-travel">Entertainment and family services</h3>
                    <label>
                        <input type="checkbox" />
                        Kids’ outdoor play area
                    </label>

                    <h3 className="title-travel">Safety &amp; security</h3>
                    <label>
                        <input type="checkbox" />
                        Private check-in/check-out
                    </label>
                    <label>
                        <input type="checkbox" />
                        Concierge service
                    </label>
                    <label>
                        <input type="checkbox" />
                        Luggage storage
                    </label>
                    <label>
                        <input type="checkbox" />
                        Express check-in/check-out
                    </label>
                    <label>
                        <input type="checkbox" />
                        24-hour front desk
                    </label>
                </div>

                <div className="right-side-container">
                    <div class="right-side-content">
                        With this information at hand, we can tailor the best
                        deals specifically for you and provide highlighted hotel
                        descriptions to ensure you have all the important
                        information. <br /> <br /> Select the services that you
                        prioritize.
                    </div>
                </div>
            </div>
            <div className="bottom-container"></div>
        </section>
    )
}

export default TravelInformationSection
