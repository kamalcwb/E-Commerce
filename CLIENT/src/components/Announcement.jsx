import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: lightgray;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            INSCREVA-SE PARA ATUALIZAÇÕES EXCLUSIVAS
        </Container>
    )
}

export default Announcement
