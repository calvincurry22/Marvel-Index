import React from "react"
import { Button } from "reactstrap"




export default () => {

    return (
    
    <div className="container">
    <h1>Hello World</h1>
    
    <Button onClick={evt => {
        evt.preventDefault()
        localStorage.clear("marvel_user")
        
    }}>Logout</Button>
    

    </div>
    )
}