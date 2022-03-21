import React from 'react'
import './Header.css';


const Header = () => {
  return (
    <div className='HeaderContain'>
        <div className='Nav'>
            <div className='Headimage'></div>
            <ul className='navlist'>
                <li>Home</li>
                <li>Outside</li>
                <li>contact</li>
                <li>about</li>
            </ul>
        </div>
    </div>
  )
}

export default Header