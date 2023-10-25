import { UiContext } from '@/context'
import { useContext } from 'react'

export function useUiContext() {
  const uiContext = useContext(UiContext)

  if (uiContext == null && uiContext === undefined) {
    throw new Error('useUi must be used within an UiProvider')
  }

  return uiContext
}
