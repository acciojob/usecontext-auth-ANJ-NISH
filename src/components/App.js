
import React, { createContext, useState } from "react";
import './../styles/App.css';
import { Auth } from "./Auth";

export const AuthContext=createContext();

const App = () => {

    const [loggedin, setLoggedIn]=useState(false);

    const loginFunc=()=>
    {
      setLoggedIn(!loggedin);
    }

  return (
    <AuthContext.Provider value={[loggedin,loginFunc]}>
    <div>
        <h1>Click on the checkbox to get authenticated</h1>
        <br />
        <Auth/>
    </div>
    </AuthContext.Provider>
  )
}

export default App
