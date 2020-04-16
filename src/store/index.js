import RootReducer from '../reducers'
import {createStore, applyMiddleware, compose} from 'redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    RootReducer,
    composeEnhancer(applyMiddleware())
)

export default store