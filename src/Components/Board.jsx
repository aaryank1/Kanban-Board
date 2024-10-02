import React, { useContext } from 'react'
import './board.css'
import { AppContext } from '../Context/AppContext'
import Card from './Card'
import { assets } from '../assets/assets'

const Board = () => {
  const { tickets, users, grouping, ordering} = useContext(AppContext)

  const priorityMap = {
    0: assets.no_priority,
    1: assets.low,
    2: assets.medium,
    3: assets.high,
    4: assets.priority_colour
  }

  const statusMap = {
    "Todo": assets.todo,
    "In progress":assets.progress,
    "Done": assets.done,
    "Cancelled": assets.cancelled,
    "Backlog": assets.backlog
  }

  const groupTickets = (tickets, grouping) => {
    
    return tickets.reduce((groups, ticket) => {
      let groupKey;

      if (grouping.toLowerCase() === "user") {
        const user = users.find(u => u.id === ticket.userId);
        groupKey = user ? user.name : "Unknown User";
      } else {
        groupKey = ticket[grouping.toLowerCase()];
      }
      if(!groups[groupKey]){
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
      return groups;
    }, {});
  }

  const sortTickets = (tickets, ordering) => {
    return tickets.sort((a,b) => {
      if(ordering === 'Priority') return b.priority - a.priority
      if (ordering === 'Title') return a.title.localeCompare(b.title);
      return 0;
    })
  }

  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className='kanban-board'>
      {Object.entries(groupedTickets).map(([group, groupTickets]) => (
        
        <div className='kanban-column' key={group}>
          <div className="group-title">
            <div className="grp-iconame">
              {grouping.toLowerCase() === 'user' && statusMap[group] && (
                <img src={statusMap[group]} alt={`${group} icon`} className="group-icon" />
              )}

              {grouping.toLowerCase() === 'priority' && priorityMap[group] && (
                <img src={priorityMap[group]} alt={`Priority ${group} icon`} className="group-icon" />
              )}
              <h4 className='grp-name'>{group}</h4>
            </div>
            <div className="grp-opts">
              <img src={assets.add} alt="" />
              <img src={assets.menu} alt="" />
            </div>
          </div>
          <div className="tickets">
            {sortTickets(groupTickets, ordering).map((ticket) => {              
            return <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              tag={ticket.tag[0]}
              status={ticket.status}
              priority={ticket.priority}
              grouping={grouping}
              />

            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Board