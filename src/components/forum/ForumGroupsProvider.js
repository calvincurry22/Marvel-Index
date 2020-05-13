import React, { useState, useEffect } from "react"


export const ForumGroupsContext = React.createContext()


export const ForumGroupsProvider = (props) => {
    const [forumGroups, setForumGroups] = useState([])
    
    const getForumGroups = () => {
        return fetch("http://localhost:8090/forumGroups")
            .then(res => res.json())
            .then(setForumGroups)
    }

    const addForumGroup = group => {
        return fetch("http://localhost:8090/forumGroups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(group)
        })
            .then(getForumGroups)
    }
    
    /*
        Load all characters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getForumGroups()
    }, [])

    


    useEffect(() => {
        console.log("****  Forum Group APPLICATION STATE CHANGED  ****")
    }, [forumGroups])

    

    return (
        <ForumGroupsContext.Provider value={{
            forumGroups, getForumGroups, addForumGroup
        }}>
            {props.children}
        </ForumGroupsContext.Provider>
    )
}