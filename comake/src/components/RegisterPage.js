import React, { useState } from "react";

export const Register = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        zip: ''
    })

    return (
        <div>
            <form>
                <input
                    type="username"
                    name="username"
                    placeholder="Username:"
                
                /><br/>
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email:"
                
                /><br/>

                <input
                    type="password"
                    name="password"
                    placeholder="Password:"
                
                /><br/>
                    
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip-code:"
                
                /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}