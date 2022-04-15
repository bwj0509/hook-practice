import React, { useRef, useState } from 'react';

function UseRef() {

    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    console.log('랜더링되었네...')

    const increaseCountState = () => {
        setCount(count + 1)
    }

    const increaseCountRef = () => {
        countRef.current += 1
    }

    return (
        <div>
            <h1>useRef</h1>
            <p>State : {count}</p>
            <p>Ref : {countRef.current}</p>
            <button onClick={increaseCountState}>State 올려</button>
            <button onClick={increaseCountRef}>Ref 올려</button>
        </div>
    );
}

export default UseRef;


//변수는 함수가 렌더링되면 값을 초기화시킨다...


//useRef가 사용가능한 상황!
// 1. 저장공간 : state는 렌더링되면 컴포넌트 내부 변수들이 초기화되는데 Ref는 렌더링되지 않아 값 유지가능
// 2 .DOM요소 접근 : input에 포커스 줄때! 등등