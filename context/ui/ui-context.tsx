/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'

interface ContextProps {
  isToggleMenu: boolean
  toggleSideMenu: () => void
}

export const UiContext = createContext({} as ContextProps)
