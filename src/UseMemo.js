import React, { useMemo, useState } from 'react';

const hardCalculate = (number) => {
    console.log('어려운 계산입니다.');
    for (let i = 0; i < 999999999; i++) { } // 생각하는 시간!(과부하걸어줌)
    return number + 10000;
}
const easyCalculate = (number) => {
    console.log('쉬운 계산입니다.');
    return number + 1;
}


function UseMemo() {

    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    //const hardsum = hardCalculate(hardNumber)
    const hardsum = useMemo(() => {
        return hardCalculate(hardNumber)
    }, [hardNumber])
    const easysum = easyCalculate(easyNumber)

    return (
        <>
            <div>
                <h3>어려운계산기</h3>
                <input type='number'
                    value={hardNumber}
                    onChange={(e) => { setHardNumber(parseInt(e.target.value)) }}
                />
                <span>
                    + 10000 = {hardsum}
                </span>
                <hr></hr>
                <h3>쉬운계산기</h3>
                <input type='number'
                    value={easyNumber}
                    onChange={(e) => { setEasyNumber(parseInt(e.target.value)) }}
                />
                <span>
                    + 1 = {easysum}
                </span>
                <hr></hr>
            </div>

        </>

    );
}

export default UseMemo;


//useMemo 결론

// useMemo를 사용하면 컴포넌트가 랜더링될때 복잡한 작업들은 캐싱해뒀다가
// 다시 작업하지 않고 빠르게 랜더링 할 수 있다
// 사용방법은 useMemo()함수에 첫번째 인자로 콜백함수를 넣어주고 리턴값으로 캐싱하고자하는 값을 넣어주고
// 두번째 인자로 디펜던시 어레이를 넣어서 [a] a라는 값이 변할때에만 실행하도록 한다.