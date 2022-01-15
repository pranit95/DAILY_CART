import React from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

const Account = () => {
    return (
        <div style={{display:"flex"}}>
           <div style={{width:"40%"}}>
             <Login/>
           </div>
           <div style={{width:"50%"}}>
             <Register/>
           </div>
        </div>
    )
}

export default Account
