import type { InjectionKey } from 'vue'
import { Store, createStore, useStore as baseUseStore } from 'vuex'

export interface State {
  timeAsButton: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export const storeSettings = createStore<State>({
  state: {
    timeAsButton: false
  },
  mutations: {
    timeAsButtonToggle(state) {
      state.timeAsButton = !state.timeAsButton
    }
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key)
}
