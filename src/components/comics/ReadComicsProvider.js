import React, { useEffect, useState } from "react"

export const ReadComicsContext = React.createContext()

export const ReadComicsProvider = (props) => {
    const [readComics, setReadComics] = useState([])

    const getReadComics = () => {
        return fetch("http://localhost:8090/readComics")
            .then(res => res.json())
            .then(setReadComics)
    }

    const addReadComic = comic => {
        return fetch("http://localhost:8090/readComics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comic)
        })
            .then(getReadComics)
    }

    useEffect( () => {
        getReadComics()
    },[])

    useEffect( () => {
        console.log("Read Comics Component State Changed")
    }, [readComics])

    return (
        <ReadComicsContext.Provider value={{
            readComics, addReadComic
        }}>
            {props.children}
        </ReadComicsContext.Provider>
    )
}