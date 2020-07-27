import React from 'react';
// import styled from 'styled-components';
import { PageContainer, Topic, ExternalApp, NavBox } from '../styledComponents/GlobalStyles';
import  Pathname from "../components/Pathname";
import NavReturn from '../components/NavReturn';

const BankAppPage = () => {
    return (
        <PageContainer>
            <NavBox>
                <NavReturn/>
            </NavBox>
            <Topic>
                <Pathname />
            </Topic>
            <ExternalApp>
                <h3 style={ {textAlign: "center"} }>This app is hosted externally on <br /> on https://bank.sh3riff.me </h3>
                <a href="https://bank.sh3riff.me" target="_blank" rel="noopener noreferrer">open now</a>               
            </ExternalApp>
        </PageContainer>
    )
}

export default BankAppPage
