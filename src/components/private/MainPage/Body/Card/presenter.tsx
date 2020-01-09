import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import TextPresenter from './Text'


interface IProps {
    imageName: string
    title: string
    desc: string
}

const Container = styled.div`
    display:grid;
    grid-template-rows: 160px 140px;
    grid-template-columns:repeat(1,1fr);
`



const CardPresenter: React.FC<IProps> = ({
    imageName,
    title,
    desc
}) => {
    return <Container>
        <Image
            imageName={imageName}
        />
        <TextPresenter
            title={title}
            desc={desc}
        />
    </Container>
}

export default CardPresenter