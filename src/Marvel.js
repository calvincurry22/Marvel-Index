import React, { useState } from "react"
import Dashboard from "./Dashboard"
import Auth from "./components/auth/Auth"


export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    return (
        localStorage.getItem("marvel_user") ? <Dashboard /> : <Auth toggle={toggle} />
    )
}