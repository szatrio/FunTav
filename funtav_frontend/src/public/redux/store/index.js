import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reduxpromise from 'redux-promise-middleware'

const logger = createLogger({})

const store = createStore(
    rootReducer,
    compose(applyMiddleware(reduxpromise, thunk, logger))
)

export default store