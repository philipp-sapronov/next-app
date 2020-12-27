import React from 'react'

import { SectionHeading } from '../components/headings'
import { useTranslation } from 'react-i18next'
import { getRange } from '../helpers'

const Plane = () => {
  return (
    <svg
      width="1181"
      height="580"
      viewBox="0 0 1181 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1053.1 53.2131L1116.11 60.044L1074.7 112.582L1053.1 53.2131Z"
        stroke="white"
        strokeWidth="3"
      />
      <line
        y1="-1.5"
        x2="58.4886"
        y2="-1.5"
        transform="matrix(0.895822 -0.385128 0.394887 0.944204 1063.81 84.2382)"
        stroke="white"
        strokeWidth="3"
      />
      <path
        d="M62.5363 560.198C144.419 564.621 321.265 560.498 360.768 431.854C410.147 271.049 553.124 284.807 626.81 313.881C685.766 337.143 744.825 370.591 837.971 333.315C948.118 289.235 914.863 141.834 1064.69 83.0955"
        stroke="white"
        strokeWidth="3"
        strokeDasharray="4 10"
      />
      <ellipse
        cx="290.661"
        cy="518.421"
        rx="6"
        ry="6.46036"
        transform="rotate(-6.86328 290.661 518.421)"
        fill="white"
      />
      <ellipse
        cx="434.37"
        cy="323.266"
        rx="6"
        ry="6.46036"
        transform="rotate(-6.86328 434.37 323.266)"
        fill="white"
      />
      <ellipse
        cx="679.268"
        cy="332.832"
        rx="6"
        ry="6.46036"
        transform="rotate(-6.86328 679.268 332.832)"
        fill="white"
      />
      <ellipse
        cx="929.391"
        cy="226.811"
        rx="6"
        ry="6.46036"
        transform="rotate(-6.86328 929.391 226.811)"
        fill="white"
      />
    </svg>
  )
}

const Card = ({ index }) => {
  const { t } = useTranslation()

  return (
    <div className="reason__card">
      <div className="card__bg">
        <div className="card__inner">
          <div className="reason__number">{t(`why:options.${index}.number`)}</div>
          <div className="reason__text">{t(`why:options.${index}.text`)}</div>
        </div>
      </div>
    </div>
  )
}

export const Why = () => {
  const { t } = useTranslation()
  return (
    <section className="why section">
      <div className="why__inner">
        <div className="heading-wrapper">
          <SectionHeading className="--center --light" text={t('why:title')} />
          <div className="why__reasons">
            {getRange(5).map((it) => {
              return <Card key={it} index={it} />
            })}
          </div>
        </div>
      </div>
      <div className="image__wrapper">
        <Plane />
      </div>
    </section>
  )
}
