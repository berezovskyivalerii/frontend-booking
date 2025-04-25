// Facilities.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Facilities.css";

export function Facilities() {
  return (
    <section className="facilities">
      <h2 className="profile-section-second-title">Facilities</h2>

      <div className="facilities__columns">
        {/* ===== COL 1 ===== */}
        <div>
          <Section
            title="General"
            items={[
              "Shuttle service",
              "Additional charge",
              "Grocery deliveries",
              "Minimarket on site",
              "Designated smoking area",
              "Air conditioning",
              "Mosquito net",
              "Wake-up service",
              "Heating",
              "Interconnected room(s) available",
              "Lift",
              "Family rooms",
              "Barber/beauty shop",
              "Airport shuttle",
              "Additional charge",
              "Non-smoking rooms",
              "Wake-up service/Alarm clock",
              "Room service",
            ]}
          />

          <Section
            title="Accessibility"
            items={[
              "Upper floors accessible by stairs only",
              "Upper floors accessible by elevator",
            ]}
          />

          <Section
            title="Languages spoken"
            items={["English", "Russian", "Ukrainian"]}
          />
        </div>

        {/* ===== COL 2 ===== */}
        <div>
          <Section title="Parking" items={["Parking garage"]} />

          <Section
            title="Reception services"
            items={[
              "Fire extinguishers",
              "CCTV outside property",
              "CCTV in common areas",
              "Smoke alarms",
              "Security alarm",
              "Key card access",
              "24-hour security",
              "Safety deposit box",
            ]}
          />

          <Section
            title="Cleaning services"
            items={["Daily housekeeping", "Laundry", "Additional charge"]}
          />

          <Section
            title="Entertainment and family services"
            items={["Kids' outdoor play equipment"]}
          />

          <Section
            title="Safety & security"
            items={[
              "Invoice provided",
              "Private check-in/check-out",
              "Concierge service",
              "Luggage storage",
              "Express check-in/check-out",
              "24-hour front desk",
            ]}
          />
        </div>

        {/* ===== COL 3 ===== */}
        <div>
          <Section
            title="Bathroom"
            items={[
              "Toilet paper",
              "Towels",
              "Slippers",
              "Private bathroom",
              "Toilet",
              "Free toiletries",
              "Hairdryer",
              "Shower",
            ]}
          />

          <Section title="Bedroom" items={["Linen"]} />
          <Section title="Kitchen" items={["Electric kettle"]} />
          <Section title="Room Amenities" items={["Clothes rack"]} />

          <Section
            title="Pets"
            items={["Pets are allowed. No extra charges"]}
          />

          <Section
            title="Media & Technology"
            items={["Flat-screen TV", "Cable channels"]}
          />

          <Section title="Food & Drinks" items={["Coffee house on site"]} />
          <Section title="Internet" items={["Internet access available"]} />
        </div>
      </div>
    </section>
  );
}

function Section({ title, items }) {
  return (
    <div className="facilities__group">
      <h3 className="facilities__heading">{title}</h3>
      <ul className="facilities__list">
        {items.map((el) => (
          <li key={el} className="facilities__item">
            <FaCheck className="facilities__check" />
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
