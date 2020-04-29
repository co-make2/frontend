import React, { useState } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";
import {userLogin} from "../actions/LoginAction";

const Login = (props) => {
    // console.log(userLogin)
    const [credentials, setCredentials] = useState({
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

    // const login = (event) => {
    //     event.preventDefault()
    //     axiosWithAuth().post('https://comakedatabase.herokuapp.com/api/users/login', credentials)
    //     .then(response => {
    //         localStorage.setItem('token', JSON.stringify(response.data.token));
            
    //     })
    // }

    return (
        <div>
            <h1>Welcome to Comake</h1>
            <h3>Please sign in below, and start reaching out!</h3>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.userLogin(credentials)
                setCredentials({
                    username: '',
                    password: ''
                })
                props.history.push("/posts")
            }}>
            
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

export default connect(null, {userLogin})(Login)