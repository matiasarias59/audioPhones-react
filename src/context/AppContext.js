import React, {createContext} from 'react'

export const AppContext = createContext();

export const AppProvider = (props) => {






  return (
<AppContext.Provider value={ {/* las func a exportar */}}>
        {props.children}
    </AppContext.Provider> 
  )
}
