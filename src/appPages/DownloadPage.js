import React from 'react';
import styled from 'styled-components';
import { PageContainer, Topic, Content, NavBox } from '../styledComponents/GlobalStyles';
import  Pathname from "../components/Pathname";
import NavReturn from '../components/NavReturn';
import  { PdfSVG } from '../components/SVG';

const Downloader = styled.div`
    display: grid;
    padding: 5vmax;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-auto-rows: 200px;
    gap: 25px;
    font-size: 25px;
    div{
        border: 5px solid ${props => props.theme.color.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        cursor: pointer;
        svg{
            height: 100px;
            width: 100px;
        }
    }
`;

const DownloadPage = () => {
    return (
        <PageContainer>
            <NavBox>
                <NavReturn/>
            </NavBox>
            <Topic>
                <Pathname />
            </Topic>
            <Content>
                <p>hello world</p>
                {/* <Downloader>
                    <div><PdfSVG /><span>pdf file 1</span></div>
                </Downloader> */}
            </Content>
        </PageContainer>
    )
}

export default DownloadPage
