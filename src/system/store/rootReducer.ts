import { combineReducers } from 'redux'
import { systemReducer } from 'app/system/store/system'

export const rootReducer = combineReducers({
  system: systemReducer,
})