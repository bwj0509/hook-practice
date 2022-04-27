import React, { useState, useReducer, useRef, useEffect } from 'react';


const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: action.id, name: action.name }]
        case 'REMOVE':
            return [...state.filter(user => String(user.id) !== action.targetId)]
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
        setName('')
    }

    const onRemove = (e) => {
        const targetId = e.target.value
        dispatch({ type: 'REMOVE', targetId })
    }

    useEffect(() => {
        console.log('onAdd실행!!!')
    }, [state])

    return (
        <div>
            <h1>출석부</h1>
            <p>총 학생 수 : {state.length}</p>
            <input
                type='text'
                placeholder='이름을 입력해주세요'
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                autoFocus
            />
            <button onClick={onAdd} >추가</button>
            {state.length == 0 ? <div className='popUp'>학생이 아무도 없습니다</div> : null}
            <div>
                <ul>
                    {state.map((user, index) => (
                        <li key={index}>{user.name} <button value={user.id} onClick={onRemove}>삭제</button></li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default UseReducer;