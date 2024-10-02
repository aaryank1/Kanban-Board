import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [grouping, setGrouping] = useState('')
    const [ordering, setOrdering] = useState('')
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const checkLocalStorageForGrouping = localStorage.getItem('grouping');
        const checkLocalStorageForOrdering = localStorage.getItem('ordering');
        if(checkLocalStorageForGrouping && checkLocalStorageForOrdering){
            setGrouping(checkLocalStorageForGrouping);
            setOrdering(checkLocalStorageForOrdering);
        }
        else{
            setGrouping('Status')
            setOrdering('Priority')
        }
    })

    const fetchData = async () => {
        try {
            const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment")
            setTickets(response.data.tickets)
            // console.log(response.data.tickets)
            setUsers(response.data.users)
            // console.log(response.data.users)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])
    
    const sort = {
        grouping, setGrouping,
        ordering, setOrdering,
        tickets, setTickets,
        users, setUsers,
    }
    return (
        <AppContext.Provider value={sort}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider