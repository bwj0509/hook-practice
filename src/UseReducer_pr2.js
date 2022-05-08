import React, { useReducer, useState, useRef } from 'react';

const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return [...state, { id: action.id, username: action.name, age: action.age, active: false }]
        case 'REMOVEUSER':
            return [...state.filter((user) => (String(user.id) !== action.id))]
        case 'ACTIVE':
            return state.map((user) => (user.id == action.id ? { ...user, active: !user.active } : user))
        default:
            return state
    }
}
// [...state] === state


function UseReducer_pr2() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const nextId = useRef(1)
    const [state, dispatch] = useReducer(reducer, initialState)


    const changeUser = (e) => {
        setName(e.target.value)
    }
    const changeAge = (e) => {
        setAge(e.target.value)
    }

    const onAdd = () => {
        dispatch({
            type: 'ADDUSER', id: nextId.current, name, age
        })
        nextId.current += 1
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
            <input placeholder='이름을 입력하세요' value={name} onChange={changeUser} />
            <input placeholder='나이를 입력하세요' value={age} onChange={changeAge} />
            <button onClick={onAdd}>추가</button>
            <hr></hr>
            <span>{`유저 : ${state.length}명`}</span><br></br>
            <span>{`활성화된 유저 : ${state.filter(user => user.active == true).length}명`}</span>
            {console.log(state)}
            <ul>
                {state.map((user) => (
                    <>{user.active
                        ? <li style={{ color: 'red' }} key={user.id} value={user.id} onClick={onActive}>{user.username}{user.age}
                            <button value={user.id} onClick={onRemove}>삭제</button>
                        </li>
                        : <li key={user.id} value={user.id} onClick={onActive}>{user.username}{user.age}
                            <button value={user.id} onClick={onRemove}>삭제</button>
                        </li>
                    }

                    </>
                ))}
            </ul>

        </div>
    );
}

export default UseReducer_pr2;