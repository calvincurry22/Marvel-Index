import React, { useContext, useState, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import "./AccountEditForm.css"
import { DropdownToggle } from "reactstrap"


export default ({toggle}) => {
    const { users, editUser } = useContext(UserContext)
    console.log(users)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const currentUser = users.find(user => user.id === currentUserId)
    const [ updatedUser, setUser ] = useState(currentUser)

    const handleControlledInputChange = (event) => {
        const newUser = Object.assign({}, updatedUser)
        newUser[event.target.name] = event.target.value
        setUser(newUser)
    }
        
    return (
        
        <form className="accountForm">
            <h1>Account Info</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" required className="form-control"
                        placeholder="name"
                        defaultValue={currentUser.name}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="userName">Username: </label>
                    <input type="text" name="userName" required className="form-control"
                        placeholder="Username"
                        defaultValue={currentUser.userName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input  type="email" name="email" className="form-control"
                        defaultValue={currentUser.email}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="customer" className="form-control"
                        defaultValue={currentUser.password}
                    />
                </div>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    editUser({
                        id: currentUserId,
                        email: updatedUser.email,
                        password: updatedUser.password,
                        name: updatedUser.name,
                        userName: updatedUser.userName,                       
                    })
                    toggle()
                }}>
                Save Updates
            </button>
        </form>
    
    )
    
}