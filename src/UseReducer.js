import React, { useState, useReducer, useRef } from 'react';


const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.name]
    }
}



function UseReducer() {

    const [name, setName] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)

    const onAdd = () => {
        dispatch({ type: 'ADD', name })
    }

    const onRemove = (e) => {
        console.log(e.target)
    }

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {state.length}</p>
            <input
                type='text'
                placeholder='이름을 입력해주세요'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
            />
            <button onClick={onAdd} >추가</button>
            <div>
                <ul>
                    {state.map((user, index) => (
                        <li>{index + 1}{user} <button onClick={onRemove}>삭제</button></li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default UseReducer;