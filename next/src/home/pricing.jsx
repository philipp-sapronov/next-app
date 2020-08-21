import { Button, SliderButtons } from '../components/buttons'
import { SectionHeading } from '../components/headings'

const TickIcon = () => {
  return (
    <svg width="20" height="15" viewBox="0 0 20 15">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.4128 2.09535L6.68179 14.8003L0 8.13216L1.41277 6.7165L6.68179 11.9748L18 0.679688L19.4128 2.09535Z"
        fill="#0cce87"
      />
    </svg>
  )
}

const ListItem = ({ text }) => {
  return (
    <li class="list__item">
      <div class="list__item-icon">
        <TickIcon />
      </div>
      <span>{text}</span>
    </li>
  )
}

const Card = ({ params }) => {
  return (
    <div class="pricing__card">
      <div class="card-layer"></div>
      <div class="card__inner">
        <div class="heading__wrapper">
          <h4 class="heading">{params.title}</h4>
        </div>
        <div class="card__divider"></div>
        <ul class="list">
          {params.items.map((item) => {
            return <ListItem text={item} />
          })}
        </ul>
        <div class="price__wrapper">
          <span class="price__amount">270</span>
          <span class="price__unit">грн / час</span>
        </div>
      </div>
    </div>
  )
}

export const Pricing = () => {
  return (
    <section class="pricing section">
      <div class="pricing__inner container">
        <div class="heading-wrapper">
          <SectionHeading className="--left --light" text={pricing.title} />
          <div class="slider-buttons__wrapper">
            <SliderButtons className="btn--light" />
          </div>
        </div>
        <div class="pricing__carousel-wrapper">
          <div id="pricing-carousel" class="pricing-carousel owl-carousel">
            {cards.map((card) => {
              return <Card params={card} />
            })}
          </div>
        </div>
        <div class="pricing__cta">
          <Button className="cta-btn btn btn--filled btn--red btn--large">{'buttons.begin'}</Button>
        </div>
      </div>
      <div class="image__wrapper">
        <svg viewBox="0 0 1196 529" fill="none" width="100%" height="100%">
          <use xlinkHref="./assets/svg-min/sprite.svg#pricing-circles" />
        </svg>
      </div>
    </section>
  )
}
