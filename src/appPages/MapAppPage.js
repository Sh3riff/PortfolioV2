import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import Map from "../components/GoogleMap";
import {getLocation} from '../components/getUserCoordinate';
import { PageContainer, Topic, NavBox } from '../styledComponents/GlobalStyles';
import  Pathname from "../components/Pathname";
import NavReturn from '../components/NavReturn';

const MapAppPage = () => {

    const [userInfo, setUserInfo] = useState({
        latitude: '',
        longitude: '',
    })
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getLocation( userInfo, setUserInfo )
        setIsLoading(false)
    }, [])
    if (isLoading) return ( <h1>Page loading</h1> )
    return (
        <PageContainer>
            <NavBox>
                <NavReturn/>
            </NavBox>
            <Topic>
                <Pathname />
            </Topic>
            <div style={{ height: '100%', width: '100%'}}>
                <Map lat={userInfo.latitude} lng={userInfo.longitude} />
            </div>
        </PageContainer>
    )
}

export default MapAppPage
