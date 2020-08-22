import React, { useRef } from 'react'
import Slider from 'react-slick'

import { Button, SliderButtons } from '../components/buttons'
import { SectionHeading } from '../components/headings'

export const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: false,
  // centerMode: true,
  // adaptiveHeight: true,
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
          <span className="price__amount">270</span>
          <span className="price__unit">грн / час</span>
        </div>
      </div>
    </div>
  )
}

export const Pricing = ({ title, cards }) => {
  const slider = useRef()

  const handleNext = () => {
    if (!slider.current) return
    slider.current.slickNext()
  }

  const handlePrev = () => {
    if (!slider.current) return
    slider.current.slickPrev()
  }

  console.log(slider, 'SLIDER')
  return (
    <section className="pricing section">
      <div className="pricing__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--left --light" text={title} />
          <div className="slider-buttons__wrapper">
            <SliderButtons className="btn--light" onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
        <div className="pricing__carousel-wrapper">
          <div id="pricing-carousel" className="pricing-carousel owl-carousel">
            <Slider ref={slider} {...settings}>
              {[...cards, ...cards].map((card, idx) => {
                return <Card key={idx} card={card} />
              })}
            </Slider>
          </div>
        </div>
        <div className="pricing__cta">
          <Button className="cta-btn btn btn--filled btn--red btn--large">{'buttons.begin'}</Button>
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
