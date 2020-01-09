import React, { Dispatch } from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../types/index.d'
import { TOGGLE_THEME } from '../../../actions/types.d'

interface dispatchType {
    type: string
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    background:transparent;
    position:absolute;
`

const ToggleThemeButtonPresenter: React.FC = () => {
    const themeState = useSelector((state: ReducerStateType) => state.theme)
    const light: boolean = themeState.lightTheme
    const dispatch = useDispatch<Dispatch<dispatchType>>()

    const toggleButton = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: TOGGLE_THEME
        })
    }

    return <Container>
        <Switch
            checked={light}
            onChange={toggleButton}
            value={light}
        />
    </Container>
}
export default ToggleThemeButtonPresenter