import { SectionHeading } from '../components/headings'

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
        stroke-width="3"
      />
      <line
        y1="-1.5"
        x2="58.4886"
        y2="-1.5"
        transform="matrix(0.895822 -0.385128 0.394887 0.944204 1063.81 84.2382)"
        stroke="white"
        stroke-width="3"
      />
      <path
        d="M62.5363 560.198C144.419 564.621 321.265 560.498 360.768 431.854C410.147 271.049 553.124 284.807 626.81 313.881C685.766 337.143 744.825 370.591 837.971 333.315C948.118 289.235 914.863 141.834 1064.69 83.0955"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="4 10"
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

const Card = ({ number, text }) => {
  return (
    <div class="reason__card">
      <div class="card__bg">
        <div class="card__inner">
          <div class="reason__number">{number}</div>
          <div class="reason__text">{text}</div>
        </div>
      </div>
    </div>
  )
}

export const Why = () => {
  return (
    <section class="why section">
      <div class="why__inner">
        <div class="heading-wrapper">
          <SectionHeading className="--center --light" text={why.title} />
          <div class="why__reasons">
            {cards.map((card) => {
              return <Card number={card.number} text={card.text} />
            })}
          </div>
        </div>
      </div>
      <div class="image__wrapper">
        <Plane />
      </div>
    </section>
  )
}
