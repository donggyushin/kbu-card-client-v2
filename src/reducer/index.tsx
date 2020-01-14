import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import user from './user'
import theme from './theme'
import navigationTab from './navigationTab'
import modal from './modal'
import routing from './routing'
import location from './location'
import loading from './loading'
import chapel from './chapel'
import mobildStudentCard from './mobileStudentCard'

const initialState = {}

const allReducers = combineReducers({
    user,
    theme,
    navigationTab,
    modal,
    routing,
    location,
    loading,
    chapel,
    mobildStudentCard
})

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store