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
import mileage from './mileage'
import timeTable from './timeTable'
import colorSet from './colorSet'
import lectureCode from './lectureCode'
import attendance from './attendance'
import mcu from './mcu'
import lecture from './lecture'
import schedule from './schedule'
import scheduleDetail from './scheduleDetail'
import notice from './notice'

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
    mobildStudentCard,
    mileage,
    timeTable,
    colorSet,
    lectureCode,
    attendance,
    mcu,
    lecture,
    schedule,
    scheduleDetail,
    notice
})

// @ts-ignore
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store