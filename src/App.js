import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyles from './styledComponents/GlobalStyles';
import Theme from './styledComponents/GlobalTheme';
import NavContextProvider from './contexts/NavContext';

import StatusTray from './components/StatusTray';
import NavContainer from './components/NavContainer';
import Sh3riffPage from './appPages/Sh3riffPage';
import BankAppPage from './appPages/BankAppPage';
import CalculatorPage from './appPages/CalculatorPage';
import CalendarPage from './appPages/CalendarPage';
import DownloadPage from './appPages/DownloadPage';
import HomePage from './appPages/HomePage';
import MapAppPage from './appPages/MapAppPage';
import ProfilePage from './appPages/ProfilePage';
import SettingsPage from './appPages/SettingsPage';
import TimexPage from './appPages/TimexPage';

const Phone = styled.main`
    height: 100vh;
    width: 100vw;
    border: 2vw solid ${props => props.theme.color.accent};
    border-radius: 10vw;
    position: relative;

    @media (orientation: landscape){
        border-radius: 0;
        border-width: 0;
    }
    &:fullscreen{
        background-color: ${props => props.theme.color.neutral};
    }
`;

const App = () => {
    return (
        <>
        <GlobalStyles />
        <Theme>
            <NavContextProvider>
                <BrowserRouter>
                    <Phone>
                        <StatusTray />
                            <Route exact path='/' component={HomePage}/>
                            <Route path='/bankapp' component={BankAppPage}/>
                            <Route path='/calculator' component={CalculatorPage}/>
                            <Route path='/calendar' component={CalendarPage}/>
                            <Route path='/downloads' component={DownloadPage}/>
                            <Route path='/map' component={MapAppPage}/>
                            <Route path='/profile' component={ProfilePage}/>
                            <Route path='/settings' component={SettingsPage}/>                    
                            <Route path='/sh3riff' component={Sh3riffPage}/>
                            <Route path='/timex' component={TimexPage}/>
                        <NavContainer />                    
                    </Phone>
                </BrowserRouter>
            </NavContextProvider>
        </Theme>
        </>
    )
}

export default App
