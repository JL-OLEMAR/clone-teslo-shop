import { UiContext } from '@/context'
import { useContext } from 'react'

export function useUi() {
  const uiContext = useContext(UiContext)

  if (uiContext == null) {
    throw new Error('useUi must be used within a UiProvider')
  }

  return uiContext
}
