import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../types/index.d'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

const Image = styled.img`
    width:300px;
`

const Timer = styled.div`
    margin-top: 22px;
    font-size: 25px;
`

interface IProps {
    qrcodeComponentOff: () => void
}

const Presenter: React.FC<IProps> = ({
    qrcodeComponentOff
}) => {

    const [leftTime, setLeftTime] = useState(0)
    const [counter, setCounter] = useState(0)
    const image: string = useSelector((state: ReducerStateType) => state.mcu.img)
    const exp: number = useSelector((state: ReducerStateType) => state.mcu.exp)


    useEffect(() => {
        if (counter === 0) {
            setCounter(counter + 1)
            setLeftTime(getLeftTime(exp))
        } else {
            tiktok()
        }
    }, [leftTime])

    return <Container>
        <Image src={`data:image/png;base64, ${image}`} />
        <Timer>{leftTime}</Timer>
    </Container>

    function tiktok() {
        setTimeout(() => {
            if (leftTime === 1) {
                qrcodeComponentOff()
            } else {
                setLeftTime(leftTime - 1)
            }
        }, 1000);
    }

    function getLeftTime(exp: number): number {
        const now = new Date().getTime()
        const diff = exp * 1000 - now

        console.log('diff: ', diff)
        return Math.floor(diff / 1000)
    }

}

export default Presenter