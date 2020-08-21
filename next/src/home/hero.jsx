import { Button } from '../components/buttons'

export const Hero = ({ hero }) => {
  return (
    <div class="hero hero-wrapper">
      <div class="hero__inner">
        <div class="title__wrapper">
          <h2 class="subtitle">{hero.subtitle}</h2>
          <div class="title__dash" />
          <h1 class="title">{hero.title}</h1>
          <div class="hero-cta__wrapper">
            <Button className="cta-btn hero-cta btn--filled btn--red btn--uppercased">
              {'buttons.begin'}
            </Button>
          </div>
          <div class="additional-msg__wrapper">
            <div class="additional-msg__arrow">
              <svg>
                <use xlinkHref="./assets/svg-min/sprite.svg#hero-arrow" />
              </svg>
            </div>
            <p class="additional-msg">{'hero.tip'}</p>
          </div>
        </div>

        {/* IMAGES */}

        <div class="images">
          {/* IMAGE */}
          <div class="image__wrapper">
            <div class="circle__main">
              <svg class="svg-image" viewBox="0 0 606 480" fill="none">
                {/* CLIP PATH */}
                <clipPath id="clip-photo">
                  <use
                    class="stroke--yellow"
                    stroke-width="14"
                    xlinkHref="./assets/svg-min/sprite.svg#clipping-path"
                  />
                </clipPath>
                {/* BACKGROUND IMAGE */}
                <image
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMinYMin slice"
                  clip-path="url(#clip-photo)"
                  xlinkHref="./assets/pic2.png"
                />
                {/* STROKE AROUND IMAGE */}
                <use
                  class="stroke--yellow"
                  stroke-width="14"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
                {/* TEXT LAYER FIRST */}
                <path
                  d="M512.779 99.0749L512.723 99.061L493.78 108.975L491.741 92.6891C475.265 84.1662 447.353 76.775 447.606 39.7685C447.858 2.76206 500.323 0.0475382 529.798 2.73596C555.278 2.85584 611.047 15.0945 604.085 67.731C597.133 120.296 526.407 102.503 512.779 99.0749Z"
                  fill="#FFC700"
                />
                <text
                  transform="translate(491.644 7.44531) rotate(16.8754)"
                  fill="white"
                  xmlSpace="preserve"
                  style="white-space: pre"
                  font-family="Caveat"
                  font-size="48"
                  letter-spacing="0em"
                >
                  <tspan x="0" y="46.84">
                    Hello!
                  </tspan>
                </text>
                {/* TEXT LAYER SECOND */}
                <path
                  d="M55.057 323.251C97.9861 282.946 117.072 317.544 121.248 339.882L138.615 338.854L126.011 352.937C131.833 361.529 136.485 386.321 108.513 416.747C80.5416 447.172 49.5289 423.812 37.519 408.329C25.4779 396.763 12.1279 363.556 55.057 323.251Z"
                  fill="#FF6A21"
                />
                <text
                  transform="translate(38.3743 374.27) rotate(-53.8573)"
                  fill="white"
                  xmlSpace="preserve"
                  style="white-space: pre"
                  font-family="Caveat"
                  font-size="48"
                  letter-spacing="0em"
                >
                  <tspan x="0" y="46.84">
                    Hi!
                  </tspan>
                </text>
              </svg>
            </div>

            {/* USE PATHS */}
            <div class="circle__1">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  class="stroke--yellow fill--yellow"
                  stroke-width="8"
                  xlinkHref="./assets/svg-min/sprite.svg#point__1"
                />
                <use
                  class="stroke--yellow"
                  stroke-width="2"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
              </svg>
            </div>

            {/* USE PATHS */}
            <div class="circle__2">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
                <use
                  class="stroke--yellow fill--yellow"
                  stroke-width="2"
                  xlinkHref="./assets/svg-min/sprite.svg#point__7"
                />
                <use
                  class="stroke--yellow fill--yellow"
                  stroke-width="4"
                  xlinkHref="./assets/svg-min/sprite.svg#point__4"
                />
              </svg>
            </div>

            {/* USE PATHS */}
            <div class="circle__3">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  stroke-dasharray="4 6"
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
                <use
                  class="stroke--red fill--red"
                  stroke-width="4"
                  xlinkHref="./assets/svg-min/sprite.svg#point__6"
                />
              </svg>
            </div>

            {/* USE PATHS */}
            <div class="circle__4">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  stroke-dasharray="2 10"
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
                <use
                  class="stroke--white fill--white"
                  xlinkHref="./assets/svg-min/sprite.svg#point__8"
                />
              </svg>
            </div>

            {/* USE PATHS */}
            <div class="circle__5">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  stroke-dasharray="2 10"
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
                <use class="fill--yellow" href="#point__3" />
              </svg>
            </div>

            <div class="circle__6">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  stroke-dasharray="2 10"
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
              </svg>
            </div>

            <div class="circle__7">
              <svg viewBox="0 0 606 480" fill="none" width="100%" height="100%">
                <use
                  stroke-dasharray="2 10"
                  class="stroke--yellow"
                  stroke-width="1"
                  xlinkHref="./assets/svg-min/sprite.svg#path"
                />
              </svg>
            </div>
          </div>

          <div class="icon__wrapper">
            <div class="icon__inner" />
          </div>
        </div>
      </div>
    </div>
  )
}
