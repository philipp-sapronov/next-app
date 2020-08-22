import React from 'react'

import { Button } from '../components/buttons'
import { TeacherCard } from '../components/cards'
import { SectionHeading } from '../components/headings'

export const Teachers = ({ title, cards, options }) => {
  return (
    <section className="teachers section">
      <div className="teachers__inner ">
        {/* --HEADER */}

        <div className="teachers__header">
          <div className="left-side">
            <div className="slider-buttons__wrapper">
              <SectionHeading className="--left --light" text={title} />
            </div>
          </div>
        </div>

        {/* -- CONTENT */}

        <div className="teachers__content">
          <div className="left-side">
            <div className="left-side__inner">
              <div className="carousel-wrapper">
                <div id="teachers-carousel" className="owl-carousel">
                  {cards.map((card, idx) => {
                    return <TeacherCard key={idx} card={card} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <ul className="teachers__options">
              {options.map((option, idx) => {
                return (
                  <span key={idx} className="teachers__option">
                    {option}
                  </span>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="teachers__cta">
          <Button className="cta-btn btn btn--filled btn--green btn--large">
            {'buttons.begin'}
          </Button>
        </div>
      </div>
    </section>
  )
}
