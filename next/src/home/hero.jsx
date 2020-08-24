import React from 'react'

import { Button } from '../components/buttons'
import { HeroSvg } from '../components/icons'
import { useScrollToForm } from '../hooks/useScrollToForm'

export const Hero = ({ title, subtitle, tip }) => {
  const [scrollToForm] = useScrollToForm()

  return (
    <div className="hero hero-wrapper">
      <div className="hero__inner">
        <div className="title__wrapper">
          <h2 className="subtitle">{subtitle}</h2>
          <div className="title__dash" />
          <h1 className="title">{title}</h1>
          <div className="hero-cta__wrapper">
            <Button
              onClick={scrollToForm}
              className="cta-btn hero-cta btn--filled btn--green btn--uppercased"
            >
              {'Начать прямо сейчас'}
            </Button>
          </div>
          <div className="additional-msg__wrapper">
            <div className="additional-msg__arrow">
              <svg>
                <use href="#hero-arrow" />
              </svg>
            </div>
            <p className="additional-msg">{tip}</p>
          </div>
        </div>

        {/* IMAGES */}

        <div className="images">
          {/* IMAGE */}
          <HeroSvg />
          <div className="image__wrapper">
            <div className="circle__main">
              <svg className="svg-image" viewBox="0 0 606 480" fill="none">
                {/* CLIP PATH */}
                <clipPath id="clip-photo">
                  <use className="stroke--green" strokeWidth="14" href="#clipping-path" />
                </clipPath>
                {/* BACKGROUND IMAGE */}
                <image
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMinYMin slice"
                  clipPath="url(#clip-photo)"
                  xlinkHref="./assets/hero-image.jpg"
                />
                {/* STROKE AROUND IMAGE */}
                <use className="stroke--green" strokeWidth="14" href="#path" />
                {/* TEXT LAYER FIRST */}
                <path
                  d="M512.779 99.0749L512.723 99.061L493.78 108.975L491.741 92.6891C475.265 84.1662 447.353 76.775 447.606 39.7685C447.858 2.76206 500.323 0.0475382 529.798 2.73596C555.278 2.85584 611.047 15.0945 604.085 67.731C597.133 120.296 526.407 102.503 512.779 99.0749Z"
                  className="fill--green"
                />
                <text
                  transform="translate(491.644 7.44531) rotate(16.8754)"
                  fill="white"
                  xmlSpace="preserve"
                  style={{ 'white-space': 'pre' }}
                  fontFamily="Caveat"
                  fontSize="48"
                  letterSpacing="0em"
                >
                  <tspan x="0" y="46.84">
                    Hello!
                  </tspan>
                </text>
                {/* TEXT LAYER SECOND */}
                <path
                  d="M55.057 323.251C97.9861 282.946 117.072 317.544 121.248 339.882L138.615 338.854L126.011 352.937C131.833 361.529 136.485 386.321 108.513 416.747C80.5416 447.172 49.5289 423.812 37.519 408.329C25.4779 396.763 12.1279 363.556 55.057 323.251Z"
                  fill="#FFD1DC"
                />
                <text
                  transform="translate(38.3743 374.27) rotate(-53.8573)"
                  fill="white"
                  xmlSpace="preserve"
                  style={{ 'white-space': 'pre' }}
                  fontFamily="Caveat"
                  fontSize="48"
                  letterSpacing="0em"
                >
                  <tspan x="0" y="46.84">
                    Hi!
                  </tspan>
                </text>
              </svg>
            </div>

            {/* USE PATHS */}
            <div className="circle__1">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use className="stroke--green" strokeWidth="2" href="#path" />
                <use className="stroke--white fill--white" strokeWidth="8" href="#point__1" />
              </svg>
            </div>

            {/* USE PATHS */}
            <div className="circle__2">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use className="stroke--green" strokeWidth="1" href="#path" />
                <use className="stroke--green fill--green" strokeWidth="2" href="#point__7" />
                <use className="stroke--green fill--green" strokeWidth="4" href="#point__4" />
              </svg>
            </div>

            {/* USE PATHS */}
            <div className="circle__3">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  strokeDasharray="4 12"
                  className="stroke--green"
                  strokeWidth="0.7"
                  href="#path"
                />
                <use className="stroke--red fill--red" strokeWidth="4" href="#point__6" />
              </svg>
            </div>

            {/* USE PATHS */}
            <div className="circle__4">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  strokeDasharray="2 10"
                  className="stroke--green"
                  strokeWidth="0.5"
                  href="#path"
                />
                <use className="stroke--white fill--white" href="#point__8" />
              </svg>
            </div>

            {/* USE PATHS */}
            <div className="circle__5">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  strokeDasharray="2 10"
                  className="stroke--green"
                  strokeWidth="0.5"
                  href="#path"
                />
                <use className="fill--green" href="#point__3" />
              </svg>
            </div>
          </div>

          <div className="icon__wrapper">
            <div className="icon__inner" />
          </div>
        </div>
      </div>
    </div>
  )
}
