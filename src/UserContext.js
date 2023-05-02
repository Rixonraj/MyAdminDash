import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userDetail, setuserDetail] = useState({username:""});
    return <UserContext.Provider value={{userDetail, setuserDetail}}> {children} </UserContext.Provider>
};