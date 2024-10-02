import { useState, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [grouping, setGrouping] = useState('Status')
    const [ordering, setOrdering] = useState('Priority')

    const states = {
        grouping, setGrouping,
        ordering, setOrdering
    }

  return (
    <AppContext.Provider value={states}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider