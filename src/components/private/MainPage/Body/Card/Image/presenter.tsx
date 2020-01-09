import React from 'react'
import styled from 'styled-components'

interface IProps {
    imageName: string
}

const Container = styled.div`
    background-image:url(${(props: IProps) => props.imageName});
    background-size:cover;
    background-position:center center;
`

const ImagePresenter: React.FC<IProps> = ({
    imageName
}) => {
    return <Container
        imageName={imageName}
    />
}

export default ImagePresenter