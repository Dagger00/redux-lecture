import {getRandomColor} from "../utils";
import {CHANGE_LOGO_COLOR, RESET_LOGO_COLOR} from './constants'


export const changeColor = () => ({
  type: CHANGE_LOGO_COLOR,
  payload: getRandomColor()
})

export const resetColor = () => ({
  type: RESET_LOGO_COLOR,
})
