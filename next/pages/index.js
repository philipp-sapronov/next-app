import { Home } from '../src/home'
import { Layout } from '../src/layout'

import { feedbacks, hero, leading, why, teachers, pricing, pipeline } from '../src/translations/ru'

const HomePage = () => (
  <Layout title="Home page">
    <Home
      content={{
        feedbacks,
        hero,
        leading,
        why,
        teachers,
        pricing,
        pipeline,
      }}
    />
  </Layout>
)

export default HomePage
