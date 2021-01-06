import React from 'react'
import { Feedbacks } from './feadback'
import { Hero } from './hero'
import { Leading } from './leading'
import { Pipeline } from './pipeline'
import { Pricing } from './pricing'
import { Teachers } from './teachers'
import { Why } from './why'

export const Home = () => {
  return (
    <>
      <Hero />
      <Pipeline />
      <Pricing />
      <Why />
      <Teachers />
      <Feedbacks />
      <Leading />
    </>
  )
}
