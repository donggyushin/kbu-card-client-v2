import React from 'react'
import { useSelector } from 'react-redux'
import { ReducerStateType } from './types/index.d';
import styled from 'styled-components'
import { COLORS } from './consts/colors';
import ReactRoutesComponent from './routes';

interface containerProps {
  lightMode: boolean
}

const Container = styled.div`
  background:${(props: containerProps) => props.lightMode ? `${COLORS.white}` : `${COLORS.background}`};
  color:${(props: containerProps) => props.lightMode ? `${COLORS.black}` : `${COLORS.white}`};
  min-height:100vh;
  transition-duration:0.2s;
`

const App: React.FC = () => {
  const themeReducerState = useSelector((state: ReducerStateType) => state.theme)
  const theme = themeReducerState.lightTheme
  return (
    <Container
      lightMode={theme}
    >
      <ReactRoutesComponent />
    </Container>
  );
}

export default App;
