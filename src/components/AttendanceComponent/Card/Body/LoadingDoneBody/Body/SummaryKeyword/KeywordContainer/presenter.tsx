import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../../types/index.d'
import { COLORS } from '../../../../../../../../consts/colors'



const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-left: 5px;
`

const Keyword = styled.div`
    display: flex;
    height: 23px;
    padding-left: 5px;
    padding-right: 5px;
    min-width: 20px;
    margin-bottom: 7px;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-right: 7px;
    color:${COLORS.deepGray};
    border:1px solid ${COLORS.deepGray};
`

const KeywordContainer = styled.div`
    display: flex;
    border-radius: 4px;
    overflow: hidden;
    font-size: 12px;
    margin-right: 7px;
    margin-bottom: 6px;
`

const KeywordLabel = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background:${COLORS.charcol};
    color:white;
    padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 7px;
        padding-right: 7px;
`
interface IKeywordValue {
    backgroundColor: string
}
const KeyWordValue = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background:${(props: IKeywordValue) => props.backgroundColor};
    color:white;
    padding-top: 3px;
        padding-bottom: 3px;
        padding-left: 7px;
        padding-right: 7px;
`


const Presenter: React.FC = () => {

    const selectedLecture = useSelector((state: ReducerStateType) => state.lecture.selectedCourse)
    const colorSet = useSelector((state: ReducerStateType) => state.colorSet)

    const backgroundColor = colorSet[selectedLecture[1]]

    return <Container>
        <KeywordContainer>
            <KeywordLabel>
                강좌코드
            </KeywordLabel>
            <KeyWordValue
                backgroundColor={backgroundColor}
            >
                {selectedLecture[0]}
            </KeyWordValue>
        </KeywordContainer>
        <KeywordContainer>
            <KeywordLabel>
                과목명
            </KeywordLabel>
            <KeyWordValue
                backgroundColor={backgroundColor}
            >
                {selectedLecture[1]}
            </KeyWordValue>
        </KeywordContainer>
        <KeywordContainer>
            <KeywordLabel>
                이수구분
            </KeywordLabel>
            <KeyWordValue
                backgroundColor={backgroundColor}
            >
                {selectedLecture[2]}
            </KeyWordValue>
        </KeywordContainer>
        <KeywordContainer>
            <KeywordLabel>
                학점
            </KeywordLabel>
            <KeyWordValue
                backgroundColor={backgroundColor}
            >
                {selectedLecture[3]}
            </KeyWordValue>
        </KeywordContainer>
        <KeywordContainer>
            <KeywordLabel>
                교수명
            </KeywordLabel>
            <KeyWordValue
                backgroundColor={backgroundColor}
            >
                {selectedLecture[4]}
            </KeyWordValue>
        </KeywordContainer>
        {/* <Keyword>
            강좌코드/{selectedLecture[0]}
        </Keyword>
        <Keyword>
            {selectedLecture[1]}
        </Keyword>
        <Keyword>
            {selectedLecture[2]}
        </Keyword>
        <Keyword>
            {selectedLecture[3]}학점
        </Keyword>
        <Keyword>
            교수명/{selectedLecture[4]}
        </Keyword> */}

    </Container>
}

export default Presenter