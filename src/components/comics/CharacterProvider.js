import React, { useState, useEffect } from "react"

export const CharacterContext = React.createContext()


export const CharacterProvider = (props) => {
    const [characters, setCharacters] = useState([])
    const [comics, setComics] = useState([])

    const getCharacters = () => {
        return fetch("http://localhost:8090/characters")
            .then(res => res.json())
            .then(setCharacters)
    }

    const getAddedComics = () => {
        return fetch("http://localhost:8090/userLists")
            .then(res => res.json())
            .then(setComics)
    }

    
    const addComic = comic => {
        return fetch("http://localhost:8090/userLists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comic)
        })
            .then(getAddedComics)
    }

    
    const deleteComic = comicId => {
        return fetch(`http://localhost:8090/userLists/${comicId}`, {
            method: "DELETE"
        })
            .then(getAddedComics)
    }

    /*
        Load all characters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCharacters()
    }, [])

    useEffect( () => {
        getAddedComics()
    },[])


    useEffect(() => {
        console.log("****  CHARACTER APPLICATION STATE CHANGED  ****")
    }, [characters])

    useEffect(() => {
        console.log("****  MY-LIST APPLICATION STATE CHANGED  ****")
    }, [comics])


    return (
        <CharacterContext.Provider value={{
            characters, comics, addComic, deleteComic
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
}