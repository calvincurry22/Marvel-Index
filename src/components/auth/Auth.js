import React from "react"
import Login from "./Login"
import Register from "./Register"
import "./Auth.css"


export default ({toggle}) => {
    return (
        <>
            <h1 className="welcome">Marvel Index</h1>
            <div className="authContainer">
                <Login toggle={toggle} />
                <Register toggle={toggle} />
            </div>
        </>
    )
}
