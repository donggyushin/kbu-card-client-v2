import React, { useEffect, Dispatch } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from './types/index.d';
import styled from 'styled-components'
import { COLORS } from './consts/colors';
import ReactRoutesComponent from './routes';
import NavigationTab from './components/NavigationTab';
import AlertModal from './components/AlertModel';
import Loading from './components/Loading';
import { userGetProfileNonThunkFunction, userGetProfileImageNonThunkFunction } from './actions/user'
import { verifyToken } from './utils/decodeToken'
import { turnOnAlertNonThunkFunction } from './actions/modal'
import { logoutNonThunkFunction } from './actions/user'
import { chapelNotThunkFunction } from './actions/chapel'
import MobiledStudentCard from './components/MobileStudentCard';

interface containerProps {
  lightMode: boolean
}

interface IDispatchGetChapel {
  type: string
  daysOfWeek: number
  duty: number
  late: number
  attendance: number
  sure: number
  tbody: string[][]
  thead: string[]
  selected: string
  selectable: string[]
}

interface IDispatchLogout {
  type: string
}

interface IDispatchTurbOnModal {
  type: string
  text: string
  title: string,
  callBack?: (parameter: any) => void
}

interface IDispatchForGetProfile {
  type: string
  token?: string
  sid?: string
  name?: string
  major?: string
  jwtToken?: string
}

interface IGetProfileDispatch {
  type: string
  img: string
}

const Container = styled.div`
  background:${(props: containerProps) => props.lightMode ? `${COLORS.white}` : `${COLORS.background}`};
  color:${(props: containerProps) => props.lightMode ? `${COLORS.black}` : `${COLORS.white}`};
  min-height:100vh;
  transition-duration:0.2s;
  position:relative;
`

const App: React.FC = () => {
  const themeReducerState = useSelector((state: ReducerStateType) => state.theme)
  const theme = themeReducerState.lightTheme
  const loading: boolean = useSelector((state: ReducerStateType) => state.loading.loading)
  const navigationTabVisiable: boolean = useSelector((state: ReducerStateType) => state.navigationTab.visiable)
  const mobileStudentCard: boolean = useSelector((state: ReducerStateType) => state.mobildStudentCard.visible)
  const dispatch = useDispatch<Dispatch<IDispatchForGetProfile>>()
  const imageDispatch = useDispatch<Dispatch<IGetProfileDispatch>>()
  const modalDispatch = useDispatch<Dispatch<IDispatchTurbOnModal>>()
  const logoutDispatch = useDispatch<Dispatch<IDispatchLogout>>()
  const getChapelDispatch = useDispatch<Dispatch<IDispatchGetChapel>>()


  useEffect(() => {
    console.log('App mount it!')
    const jwtToken = localStorage.getItem('kbucard')
    if (jwtToken) {
      const verified: boolean = verifyToken()
      if (verified) {
        userGetProfileNonThunkFunction(jwtToken, dispatch)
        userGetProfileImageNonThunkFunction(jwtToken, imageDispatch)
        chapelNotThunkFunction(jwtToken, getChapelDispatch)

      } else {
        turnOnAlertNonThunkFunction('경고', '토큰의 유효기간이 만료되었습니다. 다시 로그인 해주세요. ', modalDispatch, () => {
          logoutNonThunkFunction(logoutDispatch)
        })
      }

    }
  }, [])

  return (
    <Container
      lightMode={theme}
    >
      <ReactRoutesComponent />
      {mobileStudentCard && <MobiledStudentCard />}
      {navigationTabVisiable && <NavigationTab />}
      <AlertModal />
      {loading && <Loading />}
    </Container>
  );
}

export default App;
