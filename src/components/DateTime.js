import React, { useEffect, useState } from 'react';

export const HourMin = () => {
    const Format = m => (m < 10) ? '0'+m : m;
    const [time, setTime] = useState( `${Format(new Date().getHours())}:${Format(new Date().getMinutes())}` );

    useEffect(() => {
        const ops = setInterval( () => setTime( `${Format(new Date().getHours())}:${Format(new Date().getMinutes())}`  ), 1000)
        return () => clearInterval(ops)
    }, [ time ])

    return <time>{ time }</time>
}

export const Today = () => {

    const [date, setDate] = useState( new Date().toDateString() );

    useEffect(() => {
        const ops = setInterval( () => setDate( new Date().toDateString() ), 1000)
        return () => clearInterval(ops)
    }, [ date ])

    return(
        <p>{date}</p>
    )
}

export const TimeOfTheDay = () => {
    const Format = h => (h < 12) ? 'Good Morning' : (h < 18) ? 'Good Afternoon' : 'Good Evening';

    const [greet, setGreet] = useState( Format( new Date().getHours() ) )

    useEffect(() => {
        const ops = setInterval( () =>  setGreet( Format( new Date().getHours() ) ), 1000)
        return () => clearInterval(ops)
    }, [ greet ])

    return(
        <p>{greet}</p>
    )
}

