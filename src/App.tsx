import React from 'react'
import { useSelector } from 'react-redux'
import { ReducerStateType } from './types/index.d';
import PrivateRouter from './components/private/routes';
import PublicRouter from './components/public/routes';
import ToggleThemeButton from './components/global/ToggleThemeButton';
import styled from 'styled-components'

interface containerProps {
  lightMode: boolean
}

const Container = styled.div`
  background:${(props: containerProps) => props.lightMode ? 'white' : '#353b48'};
  color:${(props: containerProps) => props.lightMode ? 'black' : 'white'};
  min-height:100vh;
  transition-duration:0.2s;
`

const App: React.FC = () => {
  const userReducerState = useSelector((state: ReducerStateType) => state.user)
  const themeReducerState = useSelector((state: ReducerStateType) => state.theme)
  const isLoggedIn: boolean = userReducerState.isLoggedIn
  const theme = themeReducerState.lightTheme
  return (
    <Container
      lightMode={theme}
    >
      <ToggleThemeButton />
      {isLoggedIn ? <PrivateRouter /> : <PublicRouter />}
    </Container>
  );
}

export default App;
