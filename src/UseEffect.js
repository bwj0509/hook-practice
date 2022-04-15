import React, { useEffect, useState } from 'react';


function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // setInterval(() => {
        //     console.log('실행!')
        // }, 1000)
        // return () => {
        //     console.log('컴포넌트가 화면에 사라짐')
        // }
    })

    const countUp = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>useEffect</h1>
            <div>count : {count}</div>
            <button onClick={countUp}>COUNTUP!!</button>
        </>
    );
}

export default UseEffect;