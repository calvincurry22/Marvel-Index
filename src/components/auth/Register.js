import React, { useRef } from "react"

const Register = props => {
    const name = useRef()
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8090/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return true
                }
                return false
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8090/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            name: name.current.value,
                            userName: userName.current.value
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("marvel_user", createdUser.id)
                                props.toggle()
                            }
                        })
                })
        } else {
            window.alert("Passwords do not match")
        }
    }

    return (
        <div className="container--login">
            <form className="form--register" onSubmit={handleRegister}>
                <h4 className="darkgray">If you do not have an account yet, please register below</h4>
                <fieldset className="register--fieldset">
                    <label htmlFor="name"> Name </label>
                    <input ref={name} type="text"
                        name="name"
                        className="form-control"
                        required  />
                </fieldset>
                <fieldset>
                    <label htmlFor="userName"> Username </label>
                    <input ref={userName} type="text"
                        name="userName"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Register
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Register

