import React from 'react';
// import styled from 'styled-components';
import { PageContainer, Topic, Content, NavBox } from '../styledComponents/GlobalStyles';
import  Pathname from "../components/Pathname";
import NavReturn from '../components/NavReturn';

const BrowserPage = () => {
    return (
        <PageContainer>
            <NavBox>
                <NavReturn/>
            </NavBox>            
            <Topic>
                <Pathname />
            </Topic>
            <Content>
                hello world
            </Content>
        </PageContainer>
    )
}

export default BrowserPage

