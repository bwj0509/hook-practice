import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남')
    return () => {
      console.log('컴포넌트가 화면에 사라짐')
    }
  }, [])

  const countUp = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>COUNTUP!!</button>
    </>
  );
}

export default App;



