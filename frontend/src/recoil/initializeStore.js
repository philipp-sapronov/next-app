import { snapshot_UNSTABLE } from 'recoil'
import { initializeConfigStore } from './stores/config'

export const initializeStore = (store) => ({ set }) => {
  const initialStore = store || {}
  const atoms = Array.from(snapshot_UNSTABLE().getNodes_UNSTABLE())

  initializeConfigStore({ set })

  atoms.forEach((atom) => {
    if (!initialStore[atom.key]) return

    set(atom, initialStore[atom.key])
  })
}
