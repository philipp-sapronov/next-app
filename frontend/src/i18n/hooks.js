import { init } from './init'
import { useEffect, useState } from 'react'
import { applyStore } from './utils'
import i18next from 'i18next'

export const useI18Next = (store, language) => {
  const [isInit, setIsInit] = useState(() => i18next?.isInitialized)

  if (!process.browser) {
    if (!isInit) throw new Error('i18next should be initialized')
    applyStore(store, language, i18next)
  }

  useEffect(() => {
    init({ resources: store, lng: language }, () => setIsInit(true))
  }, [])

  useEffect(() => {
    // if (!isInit) return
    applyStore(store, language, i18next)
  }, [store, language])

  return isInit ? i18next : null
}
