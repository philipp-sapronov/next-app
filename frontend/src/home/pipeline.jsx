import React from 'react'

import { SectionHeading } from '../components/headings'
import { useScrollToForm } from '../hooks/useScrollToForm'
import { Button } from '../components/buttons'
import { useTranslation } from 'react-i18next'

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
            {/* TODO: create constant with path*/}
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

export const Pipeline = () => {
  const [scrollToForm] = useScrollToForm()
  const { t } = useTranslation()

  return (
    <section className="pipeline section">
      <div className="bg-layer" />
      <div className="pipeline__inner container">
        <div className="heading-wrapper">
          <SectionHeading className="--center" text={t('how:title')} />
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
              />
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
                title={t('how:options.0.title')}
                text={t('how:options.0.text')}
              />
            </div>
            {/* card */}
            <div className="cards__row --even">
              <Card
                className="--left"
                icon={icons.leadin}
                title={t('how:options.1.title')}
                text={t('how:options.1.text')}
              />
              <div className="pipeline__point --even" />
              <div className="pipeline__tips --right">{t('how:options.1.tip')}</div>
            </div>
            {/* card */}
            <div className="cards__row">
              <div className="pipeline__tips" />
              <div className="pipeline__point" />
              <Card
                className="--right"
                icon={icons.hometask}
                title={t('how:options.2.title')}
                text={t('how:options.2.text')}
              />
            </div>
            {/* card */}
            <div className="cards__row  --even">
              <Card
                className="--left"
                icon={icons.presentation}
                title={t('how:options.3.title')}
                text={t('how:options.3.text')}
              />
              <div className="pipeline__point  --even" />
              <div className="pipeline__tips" />
            </div>
          </div>
        </div>
        {/* card */}
        <div className="cards__row --last">
          <div className="pipeline__tips --left">{t('how:options.4.tip')}</div>
          <div className="pipeline__point --last" />
          <Card
            className="--right --empty"
            icon={icons.production}
            title={t('how:options.4.title')}
            text={t('how:options.4.text')}
          />
        </div>
      </div>
      <div className="pricing__cta">
        <Button
          onClick={scrollToForm}
          className="cta-btn btn btn--outlined btn--red btn--large btn--uppercased"
        >
          {t('button:wantTry')}
        </Button>
      </div>
    </section>
  )
}
