import React from 'react'
import { Feedbacks } from './feadbacks'
import { Hero } from './hero'
import { Leading } from './leading'
import { Pipeline } from './pipeline'
import { Pricing } from './pricing'
import { Teachers } from './teachers'
import { Why } from './why'

export const Home = ({ content }) => {
  return (
    <>
      <Hero {...content.hero} common={content.common} />
      <Pipeline {...content.pipeline} common={content.common} />
      <Pricing {...content.pricing} common={content.common} />
      <Why {...content.why} common={content.common} />
      <Teachers {...content.teachers} common={content.common} />
      <Feedbacks {...content.feedbacks} common={content.common} />
      <Leading
        content={{
          main: content.leading,
          common: content.common,
        }}
      />
    </>
  )
}
