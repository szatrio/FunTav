import { combineReducers } from 'redux'

import itnrsPackage from './itnrsPackage'

const rootReducer = combineReducers({
  itnrsPackage: itnrsPackage
})

export default rootReducer