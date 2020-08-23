import React from 'react'

import { Button } from '../components/buttons'
import { TeacherCard } from '../components/cards'
import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'

export const Teachers = ({ title, cards, options }) => {
  const [scrollToForm] = useScrollToForm()
  return (
    <section className="teachers section">
      <div className="teachers__inner ">
        {/* --HEADER */}

        <div className="teachers__header">
          <SectionHeading className="--center --light" text={title} />
        </div>

        {/* -- CONTENT */}

        <div className="teachers__content">
          <div className="left-side">
            <div className="left-side__inner">
              <div className="carousel-wrapper">
                <div id="teachers-carousel">
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
          <Button onClick={scrollToForm} className="cta-btn btn btn--filled btn--green btn--large">
            {'Начать бесплатно'}
          </Button>
        </div>
      </div>
    </section>
  )
}
