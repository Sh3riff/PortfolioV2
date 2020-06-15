import React from 'react';

const Pathname = () => {
    return (
        <div style={{}}>{window.location.pathname.substr(1).toUpperCase()}</div>
    )
}

export default Pathname 
