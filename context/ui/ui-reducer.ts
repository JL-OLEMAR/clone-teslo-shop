import { type UiState } from './ui-provider'

type UiActionType =
  | { type: '[UI] - ToggleMenu' }

export function uiReducer(state: UiState, action: UiActionType): UiState {
  switch (action.type) {
    case '[UI] - ToggleMenu':
      return {
        ...state,
        isToggleMenu: !state.isToggleMenu
      }

    default:
      return state
  }
}
