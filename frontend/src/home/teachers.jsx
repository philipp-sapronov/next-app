import React, { useRef } from 'react'

import { Button, SliderButtons } from '../components/buttons'
import { TeacherCard } from '../components/cards'
import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'
import { getRange } from '../helpers'
import { useRecoilValue } from 'recoil'
import { teachersState } from '../recoil/stores/teachers'

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export const Teachers = () => {
  const { t } = useTranslation()
  const [scrollToForm] = useScrollToForm()
  const teachers = useRecoilValue(teachersState)

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
    <section className="teachers section">
      <div className="teachers__inner ">
        {/* --HEADER */}

        <div className="teachers__header">
          <div className="left-side">
            <div className="slider-buttons__wrapper">
              <SliderButtons className="btn--light" onPrev={handlePrev} onNext={handleNext} />
            </div>
          </div>
          <div className="right-side">
            <div className="heading-wrapper">
              <SectionHeading className="--left --light" text={t('teachers:title')} />
            </div>
          </div>
        </div>

        {/* -- CONTENT */}

        <div className="teachers__content">
          <div className="left-side">
            <div className="left-side__inner">
              <div className="carousel-wrapper">
                <div id="teachers-carousel">
                  <Slider ref={slider} {...settings}>
                    {teachers?.map((card, idx) => {
                      return <TeacherCard key={idx} card={card} />
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side">
            <ul className="teachers__options">
              {/* TODO: get array helper */}
              {getRange(5).map((option, idx) => {
                return (
                  <span key={idx} className="teachers__option">
                    {t(`teachers:options.${idx}`)}
                  </span>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="teachers__cta">
          <Button
            onClick={scrollToForm}
            className="cta-btn btn btn--filled btn--green btn--large btn--uppercased"
          >
            {t('button:startFree')}
          </Button>
        </div>
      </div>
    </section>
  )
}
