import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../Context/AppContext'
import './card.css'

const Card = (props) => {
    const { grouping } = useContext(AppContext)

    const priorityMap = {
        0: "no_priority",
        1: "low",
        2: "medium",
        3: "high",
        4: "priority_grey"
    }

    const statusMap = {
        "Todo": "todo",
        "In progress":"progress",
        "Done": "done",
        "Cancelled": "cancelled",
        "Backlog": "backlog"
    }

    const propStatus = statusMap[props.status];
    const propPriority = priorityMap[props.priority];
    const statusImg = assets[propStatus]
    const priorityImg = assets[propPriority]


    return (
        <div className="card">
            <p className='id'>{props.id}</p>
            <div className='title-area'>
                {(grouping !== 'Status') && <img className='icons' src={statusImg} alt='status'/> }
                <p className='title'>{props.title}</p>
            </div>
            <div className='priority-area'>
                { (grouping !== 'Priority') && <img className='icons' src={priorityImg} alt="priority" />}
                <p style={{alignContent: 'center'}} className='tag'>{props.tag}</p>
            </div>
        </div>
    )
}

export default Card