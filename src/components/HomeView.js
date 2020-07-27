import React from 'react';
import styled, { css }from 'styled-components';
import { HourMin, Today, TimeOfTheDay } from './DateTime';
import UserName from './UserName';
import homeviewH from '../img/homeviewH.jpg';
import homeviewV from '../img/homeviewV.jpg';

const Display = styled.main`
    height: calc(100% - 18vw);
    width: 100%;
    background-image: url(${homeviewH});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8vw 8vw 0 0;
    color: ${props => props.theme.color.primary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    @media (orientation: landscape){        
        height: 94%;
        position: absolute;   
        background-image: url(${homeviewV});
        top: 6%;
        border-radius: 0;
    }

`;

const Container = styled.div`
    margin: 0 0 6vh 0;
`;

const Hom = styled.div`
    color: ${props => props.theme.color.primary};
    font-size: ${props => props.size};
    font-weight: ${props => props.bold ? "bold" : "normal"};
    text-align: center;

    ${props => props.change && css`
        color: ${props => props.theme.color.accent};
        text-shadow: ${props => props.theme.color.neutral} -.3vmin .3vmin, ${props => props.theme.color.primary} -.5vmin .5vmin;;
    `};
`;

const HomeScreen = () => {
    return (
        <Display>
            <Container>
                <Hom size="20vmin" bold><HourMin /></Hom>
                <Hom size="6vmin" ><Today /></Hom>
            </Container>
            <Container>
                <Hom size="6vmin"><TimeOfTheDay /></Hom>                       
                <Hom size="8vmin" bold><UserName /></Hom>                    
            </Container>
            <Hom as="h1" size="5vmin" bold change>Welcome to my Web Dev Portfolio</Hom>         
        </Display>
    )
}

export default HomeScreen
