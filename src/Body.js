import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function Body() {

    const { isDark } = useContext(ThemeContext);

    return (
        <div className='bodys' style={{
            backgroundColor: isDark ? 'darkgray' : 'white',
            color: isDark ? 'white' : 'black'
        }}>
            바디입니다.
        </div>
    );
}

export default Body;