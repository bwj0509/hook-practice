import React, { useReducer, useRef, useState } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return [...state, { username: action.user, id: action.id, active: false }]
        case 'REMOVEUSER':
            return [...state.filter(user => user.id != action.id)]
        case 'ACTIVE':
            return [...state.map((user) => user.id == action.id ? { ...user, active: !user.active } : user)]
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

    const onActive = (e) => {
        dispatch({
            type: 'ACTIVE', id: e.target.value
        })
    }
    return (
        <div>
            <h1>출석부</h1>
            <span>총학생수 : {state.length}</span><br />
            <span>활성화된 학생수 : {state.filter((user) => user.active == true).length}</span>
            <div>
                <input placeholder='이름을 입력하세요' value={user} onChange={changeUser} />
                <button onClick={addUser}>추가</button>
                <ul>
                    {state.map((user) => (
                        <li style={{ background: 'green' }} key={user.id}>
                            {user.active ? <span style={{ color: 'green' }}>{user.username}</span> : <span>{user.username}</span>}
                            <button value={user.id} onClick={onActive}>활성화</button>
                            <button value={user.id} onClick={onRemove}>삭제</button>
                        </li>
                    ))}
                    {console.log(state)}
                </ul>
            </div>
        </div>
    );
}

export default UseReducer_pr;