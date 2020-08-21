// import { Button, SliderButtons } from '../components/buttons'
import { SectionHeading } from '../components/headings'

const Card = ({ className, icon, title, text }) => {
  return (
    <div class={'pipeline__card ' + className}>
      <div class="card__inner">
        <div class="card__icon-wrapper">
          <svg width="100%" height="100%">
            <use xlinkHref={`./assets/svg-min/sprite.svg#${icon}`} />
          </svg>
        </div>
        <div class="card__text">
          <h4 class="card__heading">{title}</h4>
          <p class="card__content">{text}</p>
        </div>
      </div>
    </div>
  )
}

export const Pipeline = () => {
  return (
    <section class="pipeline section">
      <div class="bg-layer"></div>
      <div class="pipeline__inner container">
        <div class="heading-wrapper">
          <SectionHeading className="--center" text={pipeline.title} />
        </div>
        <div class="pipeline__cards">
          <div class="pipeline__line">
            <svg width="3" height="100%">
              <line
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
                stroke="#0BC481"
                stroke-width="2"
                stroke-dasharray="3 8"
              ></line>
            </svg>
          </div>
          <div class="cards__wrapper">
            {/* card */}
            <div class="cards__row">
              <div class="pipeline__tips"></div>
              <div class="pipeline__point --first"></div>
              <Card
                className="--right"
                icon="warmup"
                title={pipeline.card_1.title}
                text={pipeline.card_1.text}
              />
            </div>
            {/* card */}
            <div class="cards__row --even">
              <Card
                className="--left"
                icon="leadin"
                title={pipeline.card_2.title}
                text={pipeline.card_2.text}
              />
              <div class="pipeline__point --even"></div>
              <div class="pipeline__tips --right">{pipeline.card_2.tip}</div>
            </div>
            {/* card */}
            <div class="cards__row">
              <div class="pipeline__tips"></div>
              <div class="pipeline__point"></div>
              <Card
                className="--right"
                icon="hometask"
                title={pipeline.card_3.title}
                text={pipeline.card_3.text}
              />
            </div>
            {/* card */}
            <div class="cards__row  --even">
              <Card
                className="--left"
                icon="presentation"
                title={pipeline.card_4.title}
                text={pipeline.card_4.text}
              />

              <div class="pipeline__point  --even"></div>
              <div class="pipeline__tips"></div>
            </div>
            {/* card */}
          </div>
        </div>
        {/* card */}
        <div class="cards__row --last">
          <div class="pipeline__tips --left">{pipeline.card_5.tip}</div>
          <div class="pipeline__point --last"></div>
          <Card
            className="--right --empty"
            icon="production"
            title={pipeline.card_5.title}
            text={pipeline.card_5.text}
          />
        </div>
      </div>
    </section>
  )
}
