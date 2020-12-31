import React, { useRef } from 'react'
import Slider from 'react-slick'

import { Button, SliderButtons } from '../components/buttons'
import { FeedbackCard } from '../components/cards'
import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { feedbackState } from '../recoil/stores/feedback'

const responsive = [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
    },
  },
]

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  focusOnSelect: false,
  responsive,
}

export const Feedbacks = () => {
  const [scrollToForm] = useScrollToForm()
  const feedback = useRecoilValue(feedbackState)
  const { t } = useTranslation()

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
          <SectionHeading className="--left" text={t('feedbacks:title')} />
          <div className="slider-buttons__wrapper">
            <SliderButtons className="btn--dark" onNext={handleNext} onPrev={handlePrev} />
          </div>
        </div>
        <div className="feedbacks__carousel-wrapper">
          <div id="feedbacks-carousel" className="feedbacks-carousel owl-carousel">
            <Slider ref={slider} {...settings}>
              {feedback?.map((card, idx) => {
                return <FeedbackCard key={idx} card={card} />
              })}
            </Slider>
          </div>
        </div>
        <div className="feedbacks__cta">
          <Button
            onClick={scrollToForm}
            className="cta-btn btn btn--outlined btn--red btn--large btn--uppercased"
          >
            {t('button:startFree')}
          </Button>
        </div>
      </div>
    </section>
  )
}
