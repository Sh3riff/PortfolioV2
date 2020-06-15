import React, {useState} from 'react'



const UserName = () => {
    const [userName, setUserName] = useState("[Enter Your Name]")
    return (
        <p contentEditable>{userName}</p>
    )
}

export default UserName
