import React, { useState } from "react"
import UserReadingList from "./UserReadingList"
import { Spinner } from "reactstrap"

export default ({ setTotal }) => {
    const [loading, setLoading] = useState(false)
    return (
        <div className="myListContainer">
            <h1 className="myListHeader">My List</h1>
            {
                (loading) ? <Spinner className="spinner" color="primary" /> : <UserReadingList  setLoading={setLoading} />  
                
            }
        </div>
    )

}