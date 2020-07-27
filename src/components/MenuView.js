import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; 
import { PageContainer, Topic, Content } from '../styledComponents/GlobalStyles';
import menuviewH from '../img/menuviewH.jpg';
import menuviewV from '../img/menuviewV.jpg'
import  { SheriffSVG, BankSVG, GlobeSVG, CalculatorSVG, CalendarSVG, DownloadSVG, ProfileSVG, SettingsSVG, TimeXSVG } from '../components/SVG';

const MenuPageContainer = styled(PageContainer)`
    background-image: url(${menuviewH});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (orientation: landscape){   
        background-image: url(${menuviewV});
        
    }
`;

const AppUnit = styled.div`
    min-height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 17vw;
    grid-column-gap: 2.5vw;
    grid-row-gap: 2.5vw;

    @media (orientation: landscape){
        display: flex;
        background-color: #ccc;
        border-radius: 12vh;
        min-height: 0;
        height: 10vh;
        width: fit-content;
        position: absolute;
        bottom: 4vh;
        padding: 0 3vh;
        overflow: none;
    }


        a{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        
        p{
            font-size: 2vw;
            color: ${props => props.theme.color.primary};
        }

        @media (orientation: landscape){
            height: 8vh;
            width: 8vh;
            margin: 1vh;
            p{
                display:none;
            }
            &:hover{
                transform: scale(2, 2);
                p{
                    display: block;                    
                    font-size: 1.5vh;
                }
            }
        }

        svg{
            height: 15vw;
            width: 15vw;
            fill: ${props => props.theme.color.primary};

            @media (orientation: landscape){
                height: 9vh;
                width: 9vh;
            }
        }
    }
`;

const MenuContent = styled(Content)`
    display: flex;
    justify-content: center;
`;

const Menu = () => {
    const appList =[
        {link: 'sh3riff', svg: <SheriffSVG />, name: 'Sh3riff.me', id: 'sh3riff.me'},
        {link: 'bankapp', svg: <BankSVG />, name: 'Bank App', id: 'bankapp'},
        {link: 'calculator', svg: <CalculatorSVG />, name: 'Calculator', id: 'calculator'},
        {link: 'calendar', svg: <CalendarSVG />, name: 'Calendar', id: 'calendar'},
        {link: 'downloads', svg: <DownloadSVG />, name: 'downloads', id: 'downloads'},
        {link: 'map', svg: <GlobeSVG />, name: 'Map', id: 'map'},
        {link: 'profile', svg: <ProfileSVG />, name: 'Profile', id: 'profile'},
        {link: 'settings', svg: <SettingsSVG />, name: 'Settings', id: 'settings'},
        {link: 'timex', svg: <TimeXSVG />, name: 'Time-X', id: 'time-X'},
    ]

    const [appz, setAppz] = useState(appList);

    return (
        <MenuPageContainer>
            <Topic>
                <input type="text" placeholder='Search Apps' onChange={ e => setAppz(appList.filter( app => app.id.indexOf(e.target.value.toLowerCase()) !== -1 ))}/>
            </Topic>

            <MenuContent>
                <AppUnit>
                    {appz.map(app => <NavLink to={`/${app.link}`}  key={uuidv4()}> {app.svg} <p>{app.name}</p> </NavLink>)}
                </AppUnit>
            </MenuContent>
        </MenuPageContainer>
    )
}

export default Menu