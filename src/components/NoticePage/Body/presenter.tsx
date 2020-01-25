import React, { Dispatch, useEffect, useState, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { getNoticeNonThunkFunction, getNoticeWithMinimunId } from '../../../actions/notice'
import { useDispatch, useSelector } from 'react-redux'
import { ReducerStateType, ReducerNoticeDataType } from '../../../types/index.d'
import Cell from './Cell'

const Container = styled.div`
    width: 100%;
    height: 83vh;
    display: grid;
    grid-template-columns: 94%;
    justify-content: center;
    overflow-y:scroll;
`

interface INoticeDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
    minId?: number
}


const Presenter: React.FC = () => {

    const noticeDispatch = useDispatch<Dispatch<INoticeDispatch>>()
    const noticeReducer = useSelector((state: ReducerStateType) => state.notice)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        callGetNoticeFunction()

    }, [])

    useEffect(() => {
        const containerElement = document.getElementById('noticeBody')
        containerElement?.addEventListener('scroll', trackScrolling)
        return () => {
            containerElement?.removeEventListener('scroll', trackScrolling)
        }
    }, [noticeReducer, loading])

    useEffect(() => {
        setLoading(false)
    }, [noticeReducer])


    return <Container id='noticeBody'>
        {noticeReducer.datas.map((data, i) => {
            return <Cell data={data} key={i} />
        })}
    </Container>



    function isBottom(el: HTMLElement) {

        if (el.scrollTop === (el.scrollHeight - el.offsetHeight)) {
            if (loading === false) {
                setLoading(true)
                getNoticeWithMinimunId(noticeReducer.minId, noticeDispatch)

            }
        }
    }

    function trackScrolling() {
        const wrappedElement = document.getElementById('noticeBody')
        if (wrappedElement) {
            isBottom(wrappedElement)
        }
    }


    function callGetNoticeFunction() {
        getNoticeNonThunkFunction(noticeDispatch)
    }
}

export default Presenter