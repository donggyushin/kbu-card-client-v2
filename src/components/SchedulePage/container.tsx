import React, { Dispatch, useEffect } from 'react'
import Presenter from './presenter'
import { useDispatch } from 'react-redux'
import { UPDATE_CURRENT_LOCATION } from '../../actions/types.d'

interface UpdateCurrentLocationDispatch {
    type: string
    current: string
}

const ScheduleContainer: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<UpdateCurrentLocationDispatch>>()
    useEffect(() => {
        updateCurrentLocation('schedule', locationDispatch)
    }, [])

    return <Presenter />
}

function updateCurrentLocation(currentLocation: string, dispatch: Dispatch<UpdateCurrentLocationDispatch>) {
    dispatch({
        type: UPDATE_CURRENT_LOCATION,
        current: currentLocation
    })


}





export default ScheduleContainer