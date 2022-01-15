import React, { useState } from "react" 

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            username,
            password
        }
        console.log(payload)
    }
    return (
        <div>
            <h1>
                Login
            </h1>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"300px",margin:"30px auto"}}>
                <input onChange={(e) => setUsername(e.target.value)} 
                placeholder="enter username" 
                value={username} 
                type="text"/><br/>
                <input onChange={(e) => setPassword(e.target.value)} 
                placeholder="enter password" 
                value={password} 
                type="password" /><br/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}


export default Login