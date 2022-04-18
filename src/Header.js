import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function Header() {

    const { isDark } = useContext(ThemeContext);

    return (
        <div className='header' style={{
            backgroundColor: isDark ? 'black' : 'lightgray',
            color: isDark ? 'white' : 'black'
        }} >
            <h1>Welcome 우진!</h1>
        </div>
    );
}

export default Header;