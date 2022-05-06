import React, { useReducer, useState, useRef } from 'react';

const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return [...state, { id: action.id, username: action.name, age: action.age }]
        case 'REMOVEUSER':
            return [...state.filter((user) => (String(user.id) !== action.id))]
        default:
            return state
    }

}



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
    return (
        <div>
            <input placeholder='이름을 입력하세요' value={name} onChange={changeUser} />
            <input placeholder='나이를 입력하세요' value={age} onChange={changeAge} />
            <button onClick={onAdd}>추가</button>
            {console.log(state)}
            <ul>
                {state.map((user) => (
                    <>
                        <li>{user.age}{user.username}<button value={user.id} onClick={onRemove}>삭제</button></li>
                    </>
                ))}
            </ul>

        </div>
    );
}

export default UseReducer_pr2;