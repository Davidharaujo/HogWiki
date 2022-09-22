import styled , { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-image: url('https://img.elo7.com.br/product/600x380/2CF04C8/papel-de-parede-autocolante-harry-potter-rolo-de-3mt-x-58cm-harry-potter.jpg');
        font-family: 'Henny Penny', cursive;
    }
`
/* Estilização dos links da page */
export const SLink = styled(Link)`
    color: #860304;
    text-decoration: none;

    &:hover{
        text-shadow: 0px 5px 10px #E09C09;
    }
`

/* Estilização da Header */
export const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 13vh;
    width: 100%;
    background-color: wheat;
    margin-bottom: 5vh;

    @media screen (max-width: 520px){
        height:10vh
    }
`

export const Titulo = styled.h1 `
    font-size: 3vw;
    margin-left: 10px;

    @media screen (max-width: 520px){
        font-size: 7vw;
`

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 13vh;
    width: 60%;
`

export const Lista = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 13vh;
    width: 100%;
    list-style: none;
    font-size: 1.4vw;
`
/*Estilização da Home */

export const Chamada = styled.div`
    background-image: url('https://thumbs.gfycat.com/HardHoarseBarasinga-size_restricted.gif');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 -150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 87vh;
    font-size: 2vw;
`

/* Cards */

export const Container = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
`

export const Card = styled.div `
    padding: 1vw;
    margin: .5vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid;
    border-radius:10px;
    background-color: wheat;
    width: 20%;
    font-size: 1rem;

    @media screen and (max-width: 520px){
        width: 40%;
    }
`

export const Imagem = styled.img `
    width: 10vw;
    margin: 0 auto;
    border-radius: 10px;
`
