import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
    const[islogged, setIslogged] = useState(false);
    const[username, setUsername] = useState(null);
    const[usermail, setUsermail] = useState(null);
    const[userid, setUserid] = useState(null);
    const[userrol, setUserrol] = useState(null);

    return (
    <GlobalContext.Provider value={{islogged, setIslogged, username, setUsername, usermail, setUsermail, userid, setUserid, userrol, setUserrol}}>
        {children}
    </GlobalContext.Provider>
    );
};

export default AppContext;