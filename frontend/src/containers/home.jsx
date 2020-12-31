import React from 'react'

import '../sass/main.scss'

import { Home } from '../home'
import { Head } from '../components/head'
import { getI18nextResources } from '../i18n'
import { fetchSEO } from '../api/seo'
import { fetchCourses, fetchSaleOptions } from '../api/courses'
import { fetchFeedback } from '../api/feedbacks'
import { fetchTeachers } from '../api/teachers'

const HomePage = () => {
  return (
    <>
      <Head />
      <Home />
    </>
  )
}

export default HomePage

// Generate static content
export const staticProps = (ln) => async () => {
  try {
    console.log(`\n === GET STATIC PROPS for ${ln} == \n`)

    const [seo, teachers, feedback, saleOptions, courses] = await Promise.all([
      fetchSEO(ln),
      fetchTeachers(ln),
      fetchFeedback(ln),
      fetchSaleOptions(ln),
      fetchCourses(ln),
    ])

    return {
      props: {
        initialLanguage: ln,
        initialI18nStore: getI18nextResources({ locales: [ln] }),
        initialRecoilStore: {
          seo: await seo,
          teachers: await teachers,
          feedback: await feedback,
          saleOptions: await saleOptions,
          courses: await courses,
        },
      },
    }
  } catch (e) {
    console.dir(e)
    throw e
  }
}
