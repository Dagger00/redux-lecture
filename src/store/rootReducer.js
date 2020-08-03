import { CHANGE_LOGO_COLOR, RESET_LOGO_COLOR } from './constants.js'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOGO_COLOR:
      return {
        ...state,
        logoColor: action.payload,
      };
    case RESET_LOGO_COLOR:
      return {
        ...state,
        logoColor: '#fff',
      };
    default:
      return state;
  }
}
