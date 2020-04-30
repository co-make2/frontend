import React, { useState, useEffect } from "react";
import axios from "axios";
import {userRegister} from "../actions/RegisterAction";
import { connect } from "react-redux";

const Register = props => {
    const [credentials, setCredentials] = useState({
        username: props.username,
        email: props.email,
        password: props.password,
        zip: props.zip
    })
    
    useEffect(() => {
        axios.get('https://comakedatabase.herokuapp.com/api/users/')
        .then(response => {
            console.log(response.data)
        })
    })

    const handleInput = (event) => {
        event.preventDefault()
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    // const registerUser = event => {
    //     event.preventDefault();
    //     axios.post('https://comakedatabase.herokuapp.com/api/users/register', credentials)
    //     .then(response => {
    //         console.log(response)
    //         localStorage.setItem('token', JSON.stringify(response.data.token));
    //         props.history.push("/posts")
    //     })
    // }

    return (
        <div>
            <h1>Please Enter the following information</h1>
            <h3>So that you can begin to reach out to your community!</h3>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.userRegister(credentials)
                props.history.push("/posts")
                props.history.go(0)
            }}>
                <input
                    type="username"
                    name="username"
                    placeholder="Username:"
                    value={credentials.username}
                    onChange={handleInput}
                /><br/>
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email:"
                    value={credentials.email}
                    onChange={handleInput}
                /><br/>

                <input
                    type="password"
                    name="password"
                    placeholder="Password:"
                    value={credentials.password}
                    onChange={handleInput}
                /><br/>
                    
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip-code:"
                    value={credentials.zip}
                    onChange={handleInput}
                /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
        password: state.password,
        zip: state.zip
    }
}

export default connect(mapStateToProps, {userRegister})(Register)