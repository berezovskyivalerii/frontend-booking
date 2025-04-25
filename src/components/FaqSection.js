import React from "react";
import "./FaqSection.css";

export function FaqSection({
  questions = [
    "Common question",
    "Common question",
    "Common question",
    "Common question",
    "Common question",
    "Common question",
    "Common question",
  ],
}) {
  return (
    <section className="page-section faq">
      <h2 className="faq__title">FAQs</h2>

      <ul className="faq__list">
        {questions.map((q, i) => (
          <li key={i} className="faq__item">
            {q}
            <span className="faq__chevron" />
          </li>
        ))}
      </ul>
    </section>
  );
}
