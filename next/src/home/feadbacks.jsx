import React, { useRef } from 'react'
import Slider from 'react-slick'

import { Button, SliderButtons } from '../components/buttons'
import { FeedbackCard } from '../components/cards'
import { SectionHeading } from '../components/headings'

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: false,
  // centerMode: true,
  // adaptiveHeight: true,
}

export const Feedbacks = ({ cards, title }) => {
  const slider = useRef()

  const handleNext = () => {
    if (!slider.current) return
    slider.current.slickNext()
  }

  const handlePrev = () => {
    if (!slider.current) return
    slider.current.slickPrev()
  }

  return (
    <section className="feedbacks section">
      <div className="feedbacks__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--left" text={title} />
          <div className="slider-buttons__wrapper">
            <SliderButtons className="btn--dark" onNext={handleNext} onPrev={handlePrev} />
          </div>
        </div>
        <div className="feedbacks__carousel-wrapper">
          <div id="feedbacks-carousel" className="feedbacks-carousel owl-carousel">
            <Slider ref={slider} {...settings}>
              {cards.map((card, idx) => {
                return <FeedbackCard key={idx} card={card} />
              })}
            </Slider>
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
