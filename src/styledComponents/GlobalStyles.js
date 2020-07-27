import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
    font-family: 'Gugi', cursive;
    outline: none;
    text-decoration: none;
    }    
`;

export const PageContainer = styled.div`
    height: calc(100% - 18vw);
    width: 100%;
    padding: 5vh 0 0 0;    
    border-radius: 8vw 8vw 0 0;

    @media (orientation: landscape){        
        height: 94vh;
        position: absolute;
        top: 6vh;
        padding: 0;        
        border-radius: 0;
    }
`;

export const NavBox = styled.div`
    position: absolute;
    width: 10vw;
    height: 10vw;
    left: 3vw;
    padding: 2vw;
    svg{
        fill: ${props => props.theme.color.primary};
        height: 6vw;
        width: 6vw;
    }

    @media (orientation: landscape){
        width: 3vw;
        height: 5vh;
        left: 33.5%;
        top: -5.5vh;
        z-index: 1;
        padding: 0;
        svg{
            fill: ${props => props.theme.color.neutral};
            height: 4vh;
            width: 3vw;
            padding: 0;
            margin-top: .5vh;
        }

    }
`;

export const Topic = styled.div`
    width: 70%;
    height: 6vh;
    border: .6vh solid ${props => props.theme.color.accent};
    border-radius: 3vh;
    background-color: ${props => props.theme.color.primary};
    color:  ${props => props.theme.color.neutral};
    font-size: 3vh;
    padding: .5vh 2vh; 
    position: relative;
    left: 15%;
    margin-bottom: 2vh;

    div, input{
        width: 100%;
        height: 100%;        
        text-align: center;
        background-color: transparent;
        border: none;
        color:  ${props => props.theme.color.neutral};        
        font-size: 3vh;
    }

    @media (orientation: landscape){
        width: 25%;
        height: 5vh;
        border-radius: 2.5vh;
        color: ${props => props.theme.color.primary};
        background-color:  ${props => props.theme.color.neutral};
        font-size: 3.5vh;
        position: absolute;
        left: 37.5%;
        top: -5.5vh;
        margin: 0;        
        padding: 0 2vh;
        z-index: 1;

        div, input{
        color:  ${props => props.theme.color.primary};
        font-size: 3.5vh;
        }
    }
`;

export const Content = styled.div`
    position: relative;
    height: calc(100% - 8vh);
    width: 100%;    
    padding: 2.5vw;
    overflow-y: auto;

    @media (orientation: landscape){
        height: 100%;       
        padding: 0;
    }
`;

export const ExternalApp = styled.div`
    position: relative;
    height: calc(100% - 8vh);
    width: 100%;    
    padding: 2.5vw;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-size: calc(1.125rem + ((1vw - 3.75px) * 1.2109));
        margin: calc(1.125rem + ((1vw - 3.75px) * 1.2109)) 0;
    }
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.color.primary};
        color: ${props => props.theme.color.neutral};
        padding: 1vmin 3vmin;
        border-radius: 5vmin;
        border: 1vmin solid ${props => props.theme.color.accent};
        font-size: 5vmin;            
        box-shadow: 0 .5vw  ${props => props.theme.color.neutral}, 0 1vw  ${props => props.theme.color.primary};
        &:hover, &:active{
            position: relative;
            top: .5vw;
            box-shadow: 0 .5vw  ${props => props.theme.color.primary};
        }
    }

    @media (orientation: landscape){
        height: 100%;       
        padding: 0;
    }
`;