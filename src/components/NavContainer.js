import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../contexts/NavContext'
import  { SheriffSVG } from './SVG';

const Container = styled.nav`
    height: 18vw;
    width: 100%;    
    position: absolute;
    bottom: 0;
    border-radius: 0 0 8vw 8vw;
    background-color: ${props => props.theme.color.neutral};    
    border-top: .5vh solid ${props => props.theme.color.primary};

    @media (orientation: landscape){        
        height: 6vh;
        border-radius: 0;
        border: none;
        top: 0;
        background-color: ${props => props.theme.color.primary};
    }
`;

const NavBorder = styled.div`
    height: 15vw;
    width: 15vw;
    border-radius: 50%;
    border: solid .5vw ${props => props.theme.color.accent};
    padding: .5vw;
    position: absolute;
    left: 42.5vw;
    bottom: 1.5vw;

    &:active{
        animation-name: click;
        animation-duration: .5s;
    }

    @keyframes click {
        0%   {bottom: 1.5vw;}
        50%  {bottom: 0;}
        100% {bottom: 1.5vw;}
    }

    @media (orientation: landscape){
        height: 5.5vh;
        width: 5.5vh;
        border: none;
        background-color: ${props => props.theme.color.neutral};
        padding: .5vh;
        left: 1vw;
        bottom: 0;

        @keyframes click {
            50%  {transform: scale(2,2)}
        }
    }

    svg{
        fill: ${props => props.theme.color.primary};
        height: 4.5vh;
        width: 4.5vh;
        margin: 0;
        animation-name: menu;
        animation-duration: 2;
        animation-iteration-count: infinite;

        @media (orientation: portrait){
            display:none;
        }
    }

`;

const NavButton = styled.div`
    height: 13vw;
    width: 13vw;    
    border-radius: 50%;
    background-color: ${props => props.theme.color.primary};

    @media (orientation: landscape){
        display: none;
    }
`

const NavContainer = () => {
    const { changeVal } = useContext(NavContext);
    return (
        <Container>
                <NavBorder onClick={ () => window.location.pathname !== '/' ?  window.location.pathname = '/' : changeVal() }>
                    <NavButton>
                    </NavButton>
                    <SheriffSVG />
                </NavBorder>
        </Container>
    )
}

export default NavContainer
