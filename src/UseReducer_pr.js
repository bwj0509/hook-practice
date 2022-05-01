import React, { useReducer, useRef, useState } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return [...state, { username: action.user, id: action.id }]
        case 'REMOVEUSER':
            return [...state.filter(user => user.id != action.id)]
        default:
            return state
    }
}

const initialState = [

]


function UseReducer_pr() {

    const [user, setUser] = useState('')
    const nextId = useRef(1)

    const changeUser = (e) => {
        setUser(e.target.value)
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const addUser = () => {
        dispatch({
            type: 'ADDUSER', user, id: nextId.current
        })
        nextId.current += 1;
    }

    const onRemove = (e) => {
        dispatch({
            type: 'REMOVEUSER', id: e.target.value
        })
    }

    return (
        <div>
            <h1>출석부</h1>
            <span>총학생수 : {state.length}</span>
            <div>
                <input placeholder='이름을 입력하세요' value={user} onChange={changeUser} />
                <button onClick={addUser}>추가</button>
                <ul>
                    {state.map((user) => (
                        <li key={user.id}>{user.username}<button value={user.id} onClick={onRemove}>삭제</button></li>
                    ))}
                    {console.log(state)}
                </ul>
            </div>
        </div>
    );
}

export default UseReducer_pr;