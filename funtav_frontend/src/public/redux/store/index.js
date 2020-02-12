import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger({})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk, logger))
)

export default store