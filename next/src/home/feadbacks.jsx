import { Button, SliderButtons } from '../components/buttons'
import { FeedbackCard } from '../components/cards'
import { SectionHeading } from '../components/headings'

export const Feedbacks = () => {
  ;<section class="feedbacks section">
    <div class="feedbacks__inner container">
      <div class="heading-wrapper">
        <SectionHeading className="--left" text={'feedbacks.title'} />
        <div class="slider-buttons__wrapper">
          <SliderButtons className="btn--dark" />
        </div>
      </div>
      <div class="feedbacks__carousel-wrapper">
        <div id="feedbacks-carousel" class="feedbacks-carousel owl-carousel">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return <FeedbackCard params={item} />
          })}
        </div>
      </div>
      <div class="feedbacks__cta">
        <Button className="cta-btn btn btn--outlined btn--red btn--large">{'buttons.begin'}</Button>
      </div>
    </div>
  </section>
}
