import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function Footer1() {
    const { isDark, setIsDark } = useContext(ThemeContext)

    const ChangeDark = () => {
        setIsDark(!isDark)
    }

    console.log(isDark)
    return (
        <div className='footer' style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }}>
            <button className='btn' onClick={ChangeDark}>Dark Mode</button>
        </div>
    );
}

export default Footer1;