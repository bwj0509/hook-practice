import React, { useState, useReducer, useRef } from 'react';


const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, [action.id, action.name]]
        case 'REMOVE':
            return [...state.filter(user => String(user[0]) !== action.targetId)]
        default:
            return state
    }
}



function UseReducer() {

    const [name, setName] = useState('')
    const id = useRef(1)

    const [state, dispatch] = useReducer(reducer, initialState)

    const onAdd = () => {
        dispatch({ type: 'ADD', name, id: id.current });
        id.current += 1;
    }

    const onRemove = (e) => {
        const targetId = e.target.value
        dispatch({ type: 'REMOVE', targetId })
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
                        <li key={index}>{user[1]} <button value={user[0]} onClick={onRemove}>삭제</button></li>
                    ))}
                </ul>
            </div>
            {/* {console.log(state)} */}
        </div>

    );
}

export default UseReducer;