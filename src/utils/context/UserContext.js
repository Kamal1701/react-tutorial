import React, { createContext } from "react";

export const UserContext = createContext({
    id: 0,
    name: "",
    username: "",
    email: "",
 
    setUserData: () =>{},
});