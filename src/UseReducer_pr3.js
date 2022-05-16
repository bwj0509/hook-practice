import React, { useReducer, useRef, useState } from 'react';

const initialState = [

]

const reducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return [...state, { id: action.id, age: action.age, name: action.name, active: action.active }]
        case 'REMOVE':
            return state.filter((user) => (action.id != user.id))
        case 'ACTIVE':
            return state.map((user) => (user.id == action.id ? { ...user, active: !user.active } : user))
        default:
            return state
    }

}


function UseReducer_pr3() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const id = useRef(1)

    const [state, dispatch] = useReducer(reducer, initialState)

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onCreate = (e) => {
        dispatch({
            type: 'CREATE', id: id.current, name, age, active: false
        })
        id.current += 1
        setAge('')
        setName('')
    }

    const onRemove = (e) => {
        dispatch({
            type: 'REMOVE', id: e.target.value
        })
    }

    const onActive = (e) => {
        dispatch({
            type: 'ACTIVE', id: e.target.dataset.value
        })
    }
    return (
        <>
            <div>
                <input placeholder='이름을 입력하세요' value={name} onChange={onChangeName} />
                <input placeholder='나이를 입력하세요' value={age} onChange={onChangeAge} />
                <button onClick={onCreate}>등록</button>
                <hr></hr>
                <div>{`학생수 : ${state.length}명`}</div>
                <div>{`활성화된 학생수 : ${state.filter(user => user.active == true).length}`}</div>
                <table>
                    <tr>
                        <th>아이디</th>
                        <th>이름</th>
                        <th>나이</th>
                        <td>비고</td>
                    </tr>
                    {state.map((user) => (user.active

                        ? <tr key={user.id}>
                            <td>{user.id}</td>
                            <td style={{ color: 'red', cursor: 'pointer' }} data-value={user.id} onClick={onActive}>{user.name}</td>
                            <td>{user.age}</td>
                            <td><button value={user.id} onClick={onRemove}>삭제</button></td>
                        </tr>
                        : <tr key={user.id}>
                            <td>{user.id}</td>
                            <td style={{ cursor: 'pointer' }} data-value={user.id} onClick={onActive}>{user.name}</td>
                            <td>{user.age}</td>
                            <td><button value={user.id} onClick={onRemove}>삭제</button></td>
                        </tr>
                    ))}




                </table>
            </div>
            {console.log(state)}
        </>

    );
}

export default UseReducer_pr3;