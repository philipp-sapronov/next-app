import React from 'react'

import { Button, SliderButtons } from '../components/buttons'
import { FeedbackCard } from '../components/cards'
import { SectionHeading } from '../components/headings'

export const Feedbacks = ({ cards, title }) => {
  return (
    <section className="feedbacks section">
      <div className="feedbacks__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--left" text={title} />
          <div className="slider-buttons__wrapper">
            <SliderButtons className="btn--dark" />
          </div>
        </div>
        <div className="feedbacks__carousel-wrapper">
          <div id="feedbacks-carousel" className="feedbacks-carousel owl-carousel">
            {cards.map((card, idx) => {
              return <FeedbackCard key={idx} card={card} />
            })}
          </div>
        </div>
        <div className="feedbacks__cta">
          <Button className="cta-btn btn btn--outlined btn--red btn--large">
            {'buttons.begin'}
          </Button>
        </div>
      </div>
    </section>
  )
}
