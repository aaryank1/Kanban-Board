import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import {assets} from '../assets/assets'
import DropdownOptions from './DropdownOptions'

const Navbar = () => {
    const [openOptions, setOpenOptions] = useState(false)
    const menuRef = useRef();
    const btnRef = useRef();

    window.addEventListener('click', (e) => {
        if(e.target != menuRef.current && e.target != btnRef.current){
            setOpenOptions(false)
        }
    })

    const handleButtonClicks = (e) => {
        e.stopPropagation();
        setOpenOptions(!openOptions)
    }

    return (
        <div className='navbar'>
            <button ref={btnRef} onClick={handleButtonClicks} className='ordering'>
                <img className='display-icon' src={assets.display} alt="display-icon" />
                <p style={{alignContent: 'center', backgroundColor: 'white'} }>Display</p>
                <img className='down-arrow' src={assets.down} alt="down-arrow" />
            </button>
            {openOptions && <DropdownOptions ref={menuRef} setOpenOptions = {setOpenOptions} />}
        </div>
    )
}

export default Navbar