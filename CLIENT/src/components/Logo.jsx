import React from 'react'
import styled from "styled-components";
// import { mobile } from "../responsive";
// import { Link } from "react-router-dom";
import LogoIMG from "../img/logo.png"

const Container = styled.div`
    height: 8em;
    position: relative }
    padding: 10px;
`

const Image = styled.img`
    width: 60px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
`

const LogoH1 = styled.h1`
    font-size: 8px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) }
`

const Logo = () => {
    return (
        <Container>
            <Image src={LogoIMG} />
            <LogoH1>© Kinngs Corp S.r.l. P.IVA IT0463456906783</LogoH1>
        </Container>
    )
}

export default Logo
