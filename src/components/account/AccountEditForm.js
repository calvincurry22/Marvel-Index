import React, { useContext, useState } from "react"
import { UserContext } from "../users/UserProvider"
import ImageUpload from "../images/ImageUpload"
import "./AccountEditForm.css"


export default ({toggle}) => {
    const { users, editUser } = useContext(UserContext)
    console.log(users)
    const currentUserId = parseInt(localStorage.getItem("marvel_user"))
    const currentUser = users.find(user => user.id === currentUserId)
    const [ updatedUser, setUser ] = useState(currentUser)
    const [visible, setVisible] = useState(false)
    const onDismiss = () => setVisible(!visible)
    const [imageUrl, setImageUrl] = useState('')
    
    
    const handleControlledInputChange = (event) => {
        const newUser = Object.assign({}, updatedUser)
        newUser[event.target.name] = event.target.value
        setUser(newUser)
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
            <fieldset>
                <ImageUpload setImageUrl={setImageUrl}/>
            </fieldset>
            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
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
                    toggle()
                    alert("Changes successfully updated")
                }}>
                Save Updates
            </button>
        </form>
    
    )
    
}