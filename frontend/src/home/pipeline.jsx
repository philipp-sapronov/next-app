import React from 'react'

import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'
import { Button } from '../components/buttons'

const icons = {
  warmup: 'warmup',
  leadin: 'leadin',
  hometask: 'hometask',
  presentation: 'presentation',
  production: 'production',
}

const Card = ({ className, icon, title, text }) => {
  return (
    <div className={'pipeline__card ' + className}>
      <div className="card__inner">
        <div className="card__icon-wrapper">
          <svg width="100%" height="100%">
            <use xlinkHref={`./assets/sprite.svg#${icon}`} />
          </svg>
        </div>
        <div className="card__text">
          <h4 className="card__heading">{title}</h4>
          <p className="card__content">{text}</p>
        </div>
      </div>
    </div>
  )
}

export const Pipeline = ({ title, card_1, card_2, card_3, card_4, card_5, common }) => {
  const [scrollToForm] = useScrollToForm()

  return (
    <section className="pipeline section">
      <div className="bg-layer" />
      <div className="pipeline__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--center" text={title} />
        </div>
        <div className="pipeline__cards">
          <div className="pipeline__line">
            <svg width="3" height="100%">
              <line
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
                stroke="#ff6a21"
                strokeWidth="2"
                strokeDasharray="3 8"
              ></line>
            </svg>
          </div>
          <div className="cards__wrapper">
            {/* card */}
            <div className="cards__row">
              <div className="pipeline__tips" />
              <div className="pipeline__point --first" />
              <Card
                className="--right"
                icon={icons.warmup}
                title={card_1.title}
                text={card_1.text}
              />
            </div>
            {/* card */}
            <div className="cards__row --even">
              <Card
                className="--left"
                icon={icons.leadin}
                title={card_2.title}
                text={card_2.text}
              />
              <div className="pipeline__point --even" />
              <div className="pipeline__tips --right">{card_2.tip}</div>
            </div>
            {/* card */}
            <div className="cards__row">
              <div className="pipeline__tips" />
              <div className="pipeline__point" />
              <Card
                className="--right"
                icon={icons.hometask}
                title={card_3.title}
                text={card_3.text}
              />
            </div>
            {/* card */}
            <div className="cards__row  --even">
              <Card
                className="--left"
                icon={icons.presentation}
                title={card_4.title}
                text={card_4.text}
              />

              <div className="pipeline__point  --even" />
              <div className="pipeline__tips" />
            </div>
          </div>
        </div>
        {/* card */}
        <div className="cards__row --last">
          <div className="pipeline__tips --left">{card_5.tip}</div>
          <div className="pipeline__point --last" />
          <Card
            className="--right --empty"
            icon={icons.production}
            title={card_5.title}
            text={card_5.text}
          />
        </div>
      </div>
      <div className="pricing__cta">
        <Button
          onClick={scrollToForm}
          className="cta-btn btn btn--outlined btn--red btn--large btn--uppercased"
        >
          {common.button.wantTry}
        </Button>
      </div>
    </section>
  )
}
