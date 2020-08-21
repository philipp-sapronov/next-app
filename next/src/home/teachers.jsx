import { Button, SliderButtons } from '../components/buttons'
import { TeacherCard } from '../components/cards'
import { SectionHeading } from '../components/headings'

export const Teachers = () => {
  return (
    <section class="teachers section">
      <div class="teachers__inner ">
        {/* --HEADER */}

        <div class="teachers__header">
          <div class="left-side">
            <div class="slider-buttons__wrapper">
              <SliderButtons className="btn--light" />
            </div>
          </div>
          <div class="right-side">
            <div class="heading-wrapper">
              <SectionHeading className="--left --light" text="teachers.title" />
            </div>
          </div>
        </div>

        {/* -- CONTENT */}

        <div class="teachers__content">
          <div class="left-side">
            <div class="left-side__inner">
              <div class="carousel-wrapper">
                <div id="teachers-carousel" class="owl-carousel">
                  {teachers.cards.map((card) => {
                    return <TeacherCard params={card} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div class="right-side">
            <ul class="teachers__options">
              {teachers.options.map((option) => {
                return <span>{option}</span>
              })}
            </ul>
          </div>
        </div>
        <div class="teachers__cta">
          <Button className="cta-btn btn btn--filled btn--green btn--large">
            {'buttons.begin'}
          </Button>
        </div>
      </div>
    </section>
  )
}
