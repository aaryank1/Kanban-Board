import React, { useContext, useState } from 'react'
import {AppContext} from '../Context/AppContext'

const DropdownOptions = React.forwardRef((props, menuRef) => {
    const { grouping, setGrouping, ordering, setOrdering } = useContext(AppContext)

    const handleChangeGrouping = (e) => {
        setGrouping(e.target.value)
        localStorage.setItem('grouping', e.target.value)
    }
    const handleChangeOrdering = (e) => {
        setOrdering(e.target.value)
        localStorage.setItem('ordering', e.target.value)
    }

    return (
        <div ref={menuRef} onClick={(e) => e.stopPropagation()} className='dropdown-menu'>
            <div className='filter'>
                <label style={{alignContent: 'center'}} htmlFor="grouping" className='label'>Grouping</label>
                <select
                className='select'
                name="grouping"
                id="grouping"
                value={grouping}
                onChange={handleChangeGrouping}>
                    <option value="Status">Status</option>
                    <option value="User">User</option>
                    <option value="Priority">Priority</option>
                </select>
            </div>
            <div className='filter'>
                <label style={{alignContent: 'center'}} htmlFor="ordering" className='label'>Ordering</label>
                <select
                className='select'
                name="ordering"
                id="ordering"
                value={ordering}
                onChange={handleChangeOrdering}>
                    <option value="Priority">Priority</option>
                    <option value="Title">Title</option>
                </select>
            </div>
        </div>
    )
})

export default DropdownOptions