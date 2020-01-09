import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:1032px;
    height:100px;
    margin-top:30px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

const Text = styled.div`
    color:gray;
`

const CopyrightPresenter: React.FC = () => {
    return <Container>
        <Text>
            © Copyright Agency and contributors 2020. shin donggyu
        </Text>
    </Container>
}

export default CopyrightPresenter