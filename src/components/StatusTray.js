import React from 'react';
import styled from 'styled-components';
import  { BatterySVG, BluetoothSVG, NetworkSVG, WifiSVG }from './SVG'
import { HourMin } from './DateTime'

const Container = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 3vh;
    top: .5vh;

    @media (orientation: landscape){
        width: 20%;
        height: 6vh;
        right: 0;
        top: 0;
        display: flex;
        flex-direction: row-reverse;
    }
`;

const Tray = styled.div`
    height: 3vh;
    width: 14vh;
    right: 4vw;
    top: 0;
    background-color: transparent;
    position: absolute;
    z-index: 10;

    svg{
        fill: ${props => props.theme.color.primary};
        height: 2.5vh;
        width: 2.5vh;
        position: relative;
        margin: 0 0 0 1vh;
        &:first-child{
            margin: 0;
        }
    }

    @media (orientation: landscape){
        height: 6vh;
        width: 30vh;
        right: 6.5vh;

        svg{
        fill: ${props => props.theme.color.neutral};
        height: 4vh;
        width: 4vh;
        margin: 1vh 0 0 2vh;
        }
    }
`;

const Time = styled.span`
    time{
        color: ${props => props.theme.color.primary};
        margin: 0 0 0 5vw;
        font-size: 2.5vh;
        @media (orientation: landscape){
            font-size: 4vh;
            margin: 0 2vh 0 0;
            color: ${props => props.theme.color.neutral};
        }
    }
`;

const StatusTray = () => {
    return (
        <Container>
        <Time>
            <HourMin />
        </Time>
        <Tray>
            <BluetoothSVG />
            <NetworkSVG />
            <WifiSVG />            
            <BatterySVG />
        </Tray>
        </Container>
    )
}

export default StatusTray
