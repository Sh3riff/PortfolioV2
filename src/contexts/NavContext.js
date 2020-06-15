import React, { useState, createContext } from 'react';

export const NavContext = createContext();

const NavContextProvider = (props) => {
    const [navBtn, setNavBtn] = useState({
        val: true,
        viewHome: { Home: 'block', Menu: 'none'},
        viewMenu: { Home: 'none', Menu: 'Block'},  
    
    })

    const changeVal = () => setNavBtn({...navBtn, val: !navBtn.val});
    const falseVal = () => setNavBtn({...navBtn, val: false });

    return(
        <NavContext.Provider value={{ navBtn, changeVal, falseVal }}>
            {props.children}
        </NavContext.Provider>
    )
    
}

export default NavContextProvider