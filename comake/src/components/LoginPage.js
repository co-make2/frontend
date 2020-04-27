import React, { useState } from "react";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        username: '',
        password: ''
    })

    return (
        <div>
            <form>
                <input 
                    type="email"
                    placeholder="Email:"
                    name="email"
                /><br/>
                <input 
                    type="text"
                    placeholder="Username:"
                    name="username"
                /><br/>
                <input 
                    type="password"
                    placeholder="Password:"
                    name="password"
                /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}