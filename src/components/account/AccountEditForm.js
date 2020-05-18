import React, { useContext, useState, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import ImageUpload from "../images/ImageUpload"
import "./AccountEditForm.css"


export default ({toggle}) => {
    const { users, editUser } = useContext(UserContext)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const currentUser = users.find(user => user.id === currentUserId)
    const [ updatedUser, setUser ] = useState(currentUser)
    const [imageUrl, setImageUrl] = useState('')
    const userName = useRef()
    const email = useRef()

    const handleControlledInputChange = (event) => {
        const newUser = Object.assign({}, updatedUser)
        newUser[event.target.name] = event.target.value
        setUser(newUser)
    }

    const existingEmailCheck = () => {
        return fetch(`http://localhost:8090/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                console.log(user.length)
                if ((user.length) && user[0].id !== currentUserId) {
                    alert("Email already exists")   
                } else {
                    updateUserInfo()
                    alert("Changes successfully updated")
                    toggle()
                }
            })
    }

    const updateUserInfo = () => {
        if ( imageUrl !== '') {

            editUser({
                id: currentUserId,
                email: updatedUser.email,
                password: updatedUser.password,
                name: updatedUser.name,
                userName: updatedUser.userName,
                userImage: imageUrl                       
            })
        } else {
            editUser({
                id: currentUserId,
                email: updatedUser.email,
                password: updatedUser.password,
                name: updatedUser.name,
                userName: updatedUser.userName,
                userImage: currentUser.userImage                      
            })
        }
    }
        
    const validateUserInfo = () => {
        return fetch(`http://localhost:8090/users?userName=${userName.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if ((user.length) && user[0].id !== currentUserId) {
                    return alert("UserName already exists")
                } else {
                 existingEmailCheck()
                }
            })
    }
    

    return (
        
        <form className="accountForm">
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
                        ref={userName}
                        defaultValue={currentUser.userName}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input  type="email" name="email" className="form-control"
                        ref={email}
                        defaultValue={currentUser.email}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" className="form-control"
                        defaultValue={currentUser.password}
                    />
                </div>
            </fieldset>
            <fieldset>
                <ImageUpload setImageUrl={setImageUrl}/>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    validateUserInfo()  
                }}>
                Save Updates
            </button>
        </form>
    
    )
    
}