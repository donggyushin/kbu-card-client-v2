import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerChapelOneDataType, ReducerStateType } from '../../../../../types/index.d'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    
    align-items:center;
    display: grid;
    grid-template-columns: 76% 1fr;
    border-bottom:1px solid ${COLORS.lightGray};
`

const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    color: gray;
    padding-left: 20px;
    font-size:12px;
`

const IContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const ICon = styled.i``

interface IProps {
    data: ReducerChapelOneDataType
}

const Presenter: React.FC<IProps> = ({
    data
}) => {

    const currentName: string = useSelector((state: ReducerStateType) => state.chapel.current)

    const [className, setClassName] = useState("")

    useEffect(() => {
        setClassName(getClassName(currentName))
    }, [currentName])

    const getClassName = (name: string): string => {
        switch (name) {
            case "attendance":
                return "fas fa-check"
            case "late":
                return "far fa-clock"
            case "absence":
                return "fas fa-times"
            case "etc":
                return "fas fa-tags"
            default: return ""
        }
    }

    return <Container>
        <Text>
            {data.year}년{data.month}월{data.day}일 {data.date}요일 {data.time} {currentName === "etc" && data.etc}
        </Text>
        <IContainer>
            <ICon className={className} />
        </IContainer>
    </Container>
}

export default Presenter