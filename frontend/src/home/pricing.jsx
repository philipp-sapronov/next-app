import React, { useRef } from 'react'
import Slider from 'react-slick'

import { Button, SliderButtons } from '../components/buttons'
import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'
import { useTranslation } from 'react-i18next'
import { useRecoilValue } from 'recoil'
import { coursesState, saleOptionsState } from '../recoil/stores/courses'

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
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
  focusOnSelect: false,
}

const TickIcon = () => {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4128 2.09535L6.68179 14.8003L0 8.13216L1.41277 6.7165L6.68179 11.9748L18 0.679688L19.4128 2.09535Z"
        fill="#0cce87"
      />
    </svg>
  )
}

const ListItem = ({ text }) => {
  return (
    <li className="list__item">
      <div className="list__item-icon">
        <TickIcon />
      </div>
      <span>{text}</span>
    </li>
  )
}

const Card = ({ card }) => {
  return (
    <div className="pricing__card">
      <div className="card-layer"></div>
      <div className="card__inner">
        <div className="heading__wrapper">
          <h4 className="heading">{card.title}</h4>
        </div>
        <div className="card__divider"></div>
        <ul className="list">
          {/*  */}
          {card.items.map((item, idx) => {
            return <ListItem key={idx} text={item} />
          })}
          {/*  */}
        </ul>
        <div className="price__wrapper">
          <span className="price__amount">{card.price}</span>
          <span className="price__unit">{`${card.currency}\n/ ${card.time}`}</span>
        </div>
      </div>
    </div>
  )
}

export const Pricing = () => {
  const courses = useRecoilValue(coursesState)

  console.log(courses, '\n\n\n RECOIL COURSES\n')
  const saleOptions = useRecoilValue(saleOptionsState)

  const { t } = useTranslation()

  const slider = useRef()
  const [scrollToForm] = useScrollToForm()

  const handleNext = () => {
    if (!slider.current) return
    slider.current.slickNext()
  }

  const handlePrev = () => {
    if (!slider.current) return
    slider.current.slickPrev()
  }

  return (
    <section className="pricing section">
      <div className="pricing__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--left --light" text={t('courses:title')} />
          <div className="slider-buttons__wrapper">
            <SliderButtons className="btn--light" onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
        <div className="pricing__carousel-wrapper">
          <div id="pricing-carousel" className="pricing-carousel owl-carousel">
            <Slider ref={slider} {...settings}>
              {courses?.map((card, idx) => {
                return <Card key={idx} card={card} />
              })}
            </Slider>
          </div>
        </div>
        <div className="sale">
          <div className="sale__title">{t('courses:saleTitle')}</div>
          <ul className="sale__options">
            {saleOptions?.map((option, idx) => {
              return (
                <li className="sale__option" key={idx}>
                  {option}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="pricing__cta">
          <Button
            onClick={scrollToForm}
            className="cta-btn btn btn--filled btn--red btn--large btn--uppercased"
          >
            {t('button:startFree')}
          </Button>
        </div>
      </div>
      <div className="image__wrapper">
        <svg viewBox="0 0 1196 529" fill="none" width="100%" height="100%">
          <use xlinkHref="./assets/sprite.svg#pricing-circles" />
        </svg>
      </div>
    </section>
  )
}
