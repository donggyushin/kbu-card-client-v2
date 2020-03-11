import React, { useEffect, Dispatch, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType, ReducerChapelOneDataType, ReducerCafeteriaType } from './types/index.d';
import styled from 'styled-components'
import { COLORS } from './consts/colors';
import ReactRoutesComponent from './routes';
import NavigationTab from './components/NavigationTab';
import AlertModal from './components/AlertModel';
import Loading from './components/Loading';
import { userGetProfileNonThunkFunction, userGetProfileImageNonThunkFunction, loginNonThunk, IuserLoginDispatch } from './actions/user'
import { verifyToken } from './utils/decodeToken'
import { chapelNotThunkFunction } from './actions/chapel'
import { ImileageGetBalanceThunkFunctionD, mileageGetBalanceNormalFunction } from './actions/mileage'
import { getMenu } from './actions/cafeteria'
import MobiledStudentCard from './components/MobileStudentCard';
import AttendanceComponent from './components/AttendanceComponent';
import AttendanceDetailListTable from './components/AttendaceDetailListTable';
import ScheduleDetail from './components/ScheduleDetail';
import QrCode from './components/Qrcode';
import { Helmet } from 'react-helmet'
import { decrypt } from './utils/cryptr'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from './consts/localStorageKeys';
import SnackBar from './components/Snackbar';

interface containerProps {
  lightMode: boolean
}

interface IDispatchGetChapel {
  type: string
  daysOfWeek?: number
  duty?: number
  late?: number
  attendance?: number
  sure?: number
  tbody?: string[][]
  thead?: string[]
  selected?: string
  selectable?: string[]
  attendances?: ReducerChapelOneDataType[]
  lates?: ReducerChapelOneDataType[]
  sures?: ReducerChapelOneDataType[]
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

interface ICafeteriaGetMenuDispatch {
  type: string
  menu?: ReducerCafeteriaType
  title?: string
  text?: string
  callBack?: (param: any) => void
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
  const attendanceVisible: boolean = useSelector((state: ReducerStateType) => state.attendance.visible)
  const attendanceDetailListTableView: boolean = useSelector((state: ReducerStateType) => state.attendance.detailListTable)
  const scheduleDetailView: boolean = useSelector((state: ReducerStateType) => state.scheduleDetail.visible)
  const qrCodeVisible: boolean = useSelector((state: ReducerStateType) => state.mcu.hasQrcode)

  const getProfileDispatch = useDispatch<Dispatch<IDispatchForGetProfile>>()
  const imageDispatch = useDispatch<Dispatch<IGetProfileDispatch>>()
  const getChapelDispatch = useDispatch<Dispatch<IDispatchGetChapel>>()
  const getBalanceDispatch = useDispatch<Dispatch<ImileageGetBalanceThunkFunctionD>>()
  const cafeteriaGetMenuDispatch = useDispatch<Dispatch<ICafeteriaGetMenuDispatch>>()
  const userLoginDispatch = useDispatch<Dispatch<IuserLoginDispatch>>()

  // PWA install prompt code
  const [visible, setVisible] = useState(false)


  useEffect(() => {
    getMenu(new Date().getTime(), cafeteriaGetMenuDispatch)
    if (localStorage.getItem('kbucard')) {
      if (verifyToken()) {
        getInitialDatas()
      } else {
        loginUserWithLocalstorage()
      }
    }


    window.addEventListener('beforeinstallprompt', function (event) {
      event.preventDefault();
      //@ts-ignore
      window.promptEvent = event;

      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('display-mode is standalone');

      } else {
        setVisible(true)

      }

    });

    if (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) {
      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('display-mode is standalone');

      } else {
        setVisible(true)

      }
    }

  }, [])

  return (
    <Container
      lightMode={theme}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇" />
        <title>성서봇 | 한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇</title>
      </Helmet>
      <ReactRoutesComponent />
      {mobileStudentCard && <MobiledStudentCard />}
      {qrCodeVisible && <QrCode />}
      {navigationTabVisiable && <NavigationTab />}
      {attendanceVisible && <AttendanceComponent />}
      {attendanceDetailListTableView && <AttendanceDetailListTable />}
      {scheduleDetailView && <ScheduleDetail />}
      <AlertModal />
      {loading && <Loading />}
      {visible && <SnackBar downloadApp={addToHomeScreen} />}
    </Container>
  );

  function addToHomeScreen() {
    //@ts-ignore
    window.promptEvent.prompt();
    //@ts-ignore
    window.promptEvent.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt')
      } else {
        console.log('User dismissed the A2HS prompt')
      }
    })


  }

  function getInitialDatas() {
    const jwtToken = localStorage.getItem('kbucard') as string
    userGetProfileNonThunkFunction(jwtToken, getProfileDispatch)
    userGetProfileImageNonThunkFunction(jwtToken, imageDispatch)
    chapelNotThunkFunction(jwtToken, getChapelDispatch)
    mileageGetBalanceNormalFunction(getBalanceDispatch)
  }
  function loginUserWithLocalstorage() {
    const encryptedUserId = localStorage.getItem(ENCRYPTED_USER_ID)
    const encryptedUserPassword = localStorage.getItem(ENCRYPTED_USER_PASSWORD)
    if (encryptedUserId && encryptedUserPassword) {

      loginNonThunk(encryptedUserId, encryptedUserPassword, userLoginDispatch)
    }
  }

}

export default App;
