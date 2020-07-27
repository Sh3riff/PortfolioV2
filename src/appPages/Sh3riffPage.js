import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { PageContainer, Topic, Content, NavBox } from '../styledComponents/GlobalStyles';
import  Pathname from "../components/Pathname";
import NavReturn from '../components/NavReturn';
import pix from '../img/pix.jpg';
import icon192 from './icon192.png';
import  { BrowserSVG, EmailSVG, GitHubSVG, LinkedInSVG } from '../components/SVG';

const CONTENT = styled(Content)` 
    @media (orientation: landscape) {
        padding: 5vh 10vw;
    }
    
    h1{
        font-size: 10vw;
        text-align: center;
        margin: 2vh 0;
        &:first-child{
            margin: 0 0 2vh 0;
        }
        @media (orientation: landscape) {
            font-size: 7.5vw;            
            margin: 2.5vw 0;
            &:first-child{
                margin: 0 0 2.5vw 0;
            }
        }
    }

    img{
        height: 20vw;
        width: 20vw;
        border-radius: 50%;
        float: left;
        shape-outside: circle();
        margin: 0 5vw 0 0;
    }

    p{
        font-size: 5vw;
        line-height: 7.5vw;
        span{
            border: .5vw solid ${props => props.theme.color.accent};
            border-radius: 5vw;
            padding: 0 1vw;
            margin: 0 1vw;
            background-color: ${props => props.theme.color.primary};
            a{
                color: ${props => props.theme.color.neutral};                
                font-size: 3.5vw;
                position: relative;
                bottom: .5vw;
                svg{
                    fill: ${props => props.theme.color.neutral};
                    height: 3.5vw;
                    width: 3.5vw;
                }
            }
        }
        &:nth-of-type(2){
            text-indent: 5vw;
        }        

        @media (orientation: landscape){
            font-size: 3.5vw;
            line-height: 5vw;
            span{
                a{
                    font-size: 2.5vw;
                    bottom: 0;
                    svg{
                        height: 2.5vw;
                        width: 2.5vw;
                    }
                }
            }
        }
    }



    ul{
        margin: 2vh 2vw;
    }
    div{
        display: flex;
        margin: 5vmax 0 2vmax;
        justify-content: space-evenly;
        a{
            width: 15vw;
            height: 15vw;
            max-width: 150px;
            max-height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.color.primary};
            border-radius: 50%;
            border: .5vw solid ${props => props.theme.color.accent};
            font-size: 5vw;            
            box-shadow: 0 .5vw  ${props => props.theme.color.neutral}, 0 1vw  ${props => props.theme.color.primary};
            &:hover, &:active{
                position: relative;
                top: .5vw;
                box-shadow: 0 .5vw  ${props => props.theme.color.primary};
            }
            svg{
                width: 8vw;
                height: 8vw;
                max-width: 80px;
                max-height: 80px;
                fill: ${props => props.theme.color.neutral};
            }
        }
    }
`;

const List = styled.li`
    font-size: 5vw;
    line-height: 7.5vw;
    font-weight: bold;
    margin-left: ${props => props.mgl};
    img{
        height: 4vw;
        width: 4vw;
        margin: 1.5vw 2.5vw 0 0;
    }
    @media (orientation: landscape){
        font-size: 2.5vw;
        line-height: 3.75vw;
        img{
            margin: .75vw 1.5vw 0 0;
            height: 2vw;
            width: 2vw;
        }
    }
`;

const Sh3riffPage = () => {
    return (
        <PageContainer>
            <NavBox> <NavReturn/> </NavBox>
            <Topic> <Pathname /> </Topic>
            <CONTENT>
                <h1> Web Developer </h1>
                <img src={pix} alt="sheriff"/>
                <p > Hi, welcome to <b>sh3riff.me</b> I am Olowolagba Sheriff, a fullstack web developer with an ever expanding <i>stack.</i> I build <b>performant</b> web & native apps using modern best practices. This portfolio has links to other projects I have create overtime.</p>
                <h1> Tech Stack </h1>          
                <p> Technology in my stack include but no limited to</p>
                <ul>
                    <List> <img src={icon192} alt="sh3riff.me icon"/>HTML</List>
                    <List mgl="2.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>SVG</List>
                    <List mgl="5vmin"> <img src={icon192} alt="sh3riff.me icon"/>S(CSS)</List>
                    <List mgl="7.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>JavaScript (ES6+)</List>
                    <List mgl="10vmin"> <img src={icon192} alt="sh3riff.me icon"/>PWA</List>
                    <List mgl="12.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>React</List>
                    <List mgl="15vmin"> <img src={icon192} alt="sh3riff.me icon"/>React Native</List>
                    <List mgl="12.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>Next JS</List>
                    <List mgl="10vmin"> <img src={icon192} alt="sh3riff.me icon"/>Node JS</List>
                    <List mgl="7.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>Express</List>
                    <List mgl="5vmin"> <img src={icon192} alt="sh3riff.me icon"/>MongoDB</List>
                    <List mgl="2.5vmin"> <img src={icon192} alt="sh3riff.me icon"/>AWS (Serverless)</List>
                    <List> <img src={icon192} alt="sh3riff.me icon"/>More ...</List>
                </ul>

                <div>
                    <a href="mailto:contactme@sh3riff.me" > <EmailSVG /></a>
                    <a href="https://www.linkedin.com/in/olowolagba-sheriff" target="_blank" rel="noopener noreferrer nofollow" > <LinkedInSVG  /> </a>
                    <a href="https://github.com/sh3riff" target="_blank" rel="noopener noreferrer nofollow" > <GitHubSVG /> </a>
                </div>
            </CONTENT>
        </PageContainer>
    )
}

export default Sh3riffPage
