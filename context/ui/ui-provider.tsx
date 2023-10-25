import { useReducer, type ReactNode } from 'react'
import { UiContext } from './ui-context'
import { uiReducer } from './ui-reducer'

export interface UiState {
  isToggleMenu: boolean
}

const UI_INITIAL_STATE: UiState = {
  isToggleMenu: false
}

export function UiProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' })
  }

  return (
    <UiContext.Provider value={{
      ...state,
      toggleSideMenu
    }}
    >
      {children}
    </UiContext.Provider>
  )
}
