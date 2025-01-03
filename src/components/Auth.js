import React, {useContext} from 'react'
import {AuthContext} from './App.js';

export const Auth = () => {

    const values=useContext(AuthContext);

  return (
    <div>
        {values[0]? <p>You are now authenticated, you can proceed</p>:<p>you are not authenticated</p>}
        <input type="checkbox" onClick={()=>values[1]()}/>
        <label>I'm not a robot</label>
        </div>
  )
}
