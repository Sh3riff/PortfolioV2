import React, { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';
import MenuView from '../components/MenuView';
import HomeView from '../components/HomeView';


const Homepage = () => {
    const { navBtn } = useContext(NavContext);

    const viewNow = navBtn.val ? navBtn.viewHome : navBtn.viewMenu;

    return (
        <>
            <div style={{height: '100vh', display: viewNow.Home}}>
                <HomeView />
            </div>
            <div style={{height: '100vh', display: viewNow.Menu}}>
                <MenuView />
            </div>
        </>
    )
}

export default Homepage