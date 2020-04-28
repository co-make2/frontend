import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const Login = (props) => {
    const [credentials, setCredentials] = useState({
        // email: '',
        username: '',
        password: ''
    })

    const inputHandler = (event) => {
        event.preventDefault()
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const login = (event) => {
        axiosWithAuth().post('https://comakedatabase.herokuapp.com/api/users/login', credentials)
        .then(response => {
            localStorage.setItem('token', JSON.stringify(response.data.payload));
            props.history.push('/posts')
        })
    }

    return (
        <div>
            <h1>Welcome to Comake</h1>
            <h3>Please sign in below, and start reaching out!</h3>
            <form onSubmit={login}>
                {/* <input 
                    type="email"
                    placeholder="Email:"
                    name="email"
                    value={credentials.email}
                    onChange={inputHandler}
                /><br/> */}
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