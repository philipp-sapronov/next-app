import { SectionHeading } from '../components/headings'

export const Leading = () => {
  return (
    <section id="leadform-section" class="leading section">
      <div class="leading__inner container">
        <div class="heading-wrapper">
          <SectionHeading className="--center --light" text={'leading.title'} />
        </div>

        <div class="leading__content">
          <div class="left-side">
            <h4 class="content__heading">{'leading.optionsTitle'}:</h4>
            <ul class="list">
              <div class="content__line">
                <svg width="3" height="100%">
                  <line
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-dasharray="3 8"
                  ></line>
                </svg>
              </div>
              {leading.options.map((item) => {
                return (
                  <li class="list__item">
                    <span class="item__number">{'item.number'}</span>
                    <p class="item__text">{'item.text'}</p>
                  </li>
                )
              })}
            </ul>
          </div>

          <div class="right-side">
            <div class="leading__card">
              <div class="card-layer"></div>
              <div class="card__inner">
                <form class="leading__form form">
                  <div class="form__item success">
                    <label class="input-label" for="input-name">
                      {'leading.form.inputName.label'}
                    </label>
                    <input
                      class="input-text"
                      name="name"
                      placeholder="{'leading.form.inputName.placeholder'}"
                      id="input-name"
                      type="text"
                    />
                    <span class="input-msg" data-name="name"></span>
                  </div>

                  <div class="form__item">
                    <label class="input-label" for="input-email">
                      {'leading.form.inputEmail.label'}
                    </label>
                    <input
                      class="input-text"
                      name="email"
                      placeholder="{'leading.form.inputEmail.placeholder'}"
                      id="input-email"
                      type="text"
                    />
                    <span class="input-msg" data-name="email"></span>
                  </div>

                  <div class="form__item error">
                    <label class="input-label" for="input-phone">
                      {'leading.form.inputPhone.label'}
                    </label>
                    <input
                      class="input-text"
                      name="phone"
                      placeholder="{'leading.form.inputPhone.placeholder'}"
                      id="input-phone"
                      type="text"
                    />
                    <span class="input-msg" data-name="phone"></span>
                  </div>

                  <div class="form__submit-wrapper">
                    <button
                      class="form__submit-btn btn btn--filled btn--red btn--large btn--uppercased"
                      type="submit"
                    >
                      {'buttons.sendApplication'}
                    </button>
                    <p class="confirm-msg">{'leading.form.confirmText'}</p>
                  </div>
                </form>
              </div>
            </div>

            <div class="additional-msg">
              <div class="additional-msg__arrow">
                <svg fill="none">
                  <use xlinkHref="./assets/svg-min/sprite.svg#leading-arrow" />
                </svg>
              </div>
              <span class="additional-msg__text">{'leading.subscription'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
