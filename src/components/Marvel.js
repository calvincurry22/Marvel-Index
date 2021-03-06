import React, { useState } from "react"
import Dashboard from "./Dashboard"
import Auth from "./auth/Auth"



export default () => {
    const [check, update] = useState(false)
    const toggle = () => update(!check)

    const logout = () => {
        localStorage.clear()
        toggle()
    }

    return (
        localStorage.getItem("marvel_user") ? <Dashboard  logout={logout}/> : <Auth toggle={toggle} />
    )
}