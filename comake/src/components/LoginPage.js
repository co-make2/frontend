import React, { useState } from "react";

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        username: '',
        password: ''
    })

    const inputHandler = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h1>Welcome to Comake</h1>
            <h3>Please sign in below, and start reaching out!</h3>
            <form>
                <input 
                    type="email"
                    placeholder="Email:"
                    name="email"
                    value={credentials.email}
                    onChange={inputHandler}
                /><br/>
                <input 
                    type="text"
                    placeholder="Username:"
                    name="username"
                    value={credentials.username}
                    onChange={inputHandler}
                /><br/>
                <input 
                    type="password"
                    placeholder="Password:"
                    name="password"
                    value={credentials.password}
                    onChange={inputHandler}
                /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}