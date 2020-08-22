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
      <Hero {...content.hero} />
      <Pipeline {...content.pipeline} />
      <Pricing {...content.pricing} />
      <Why {...content.why} />
      <Teachers {...content.teachers} />
      <Feedbacks {...content.feedbacks} />
      <Leading {...content.leading} />
    </>
  )
}
