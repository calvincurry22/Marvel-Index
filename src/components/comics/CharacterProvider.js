import React, { useState, useEffect, createContext } from "react"

export const CharacterContext = React.createContext()


export const CharacterProvider = (props) => {
    const [characters, setCharacters] = useState([])
    const [comics, setComics] = useState([])
    const [selectedComic, setSelectedComic] = useState([])

    const getCharacters = () => {
        return fetch("http://localhost:8090/characters")
            .then(res => res.json())
            .then(setCharacters)
    }

    const getComics = charID => {
        return fetch(`https://gateway.marvel.com:443/v1/public/characters/${charID}/comics?limit=20&apikey=6d001b15224bd9411b67705ef5d04bb5`)
            .then(response => response.json())
            .then(setComics)
    }


    const getSelectedComic = singleComicId => {
        return fetch(`https://gateway.marvel.com:443/v1/public/comics/${singleComicId}?apikey=6d001b15224bd9411b67705ef5d04bb5`)
            .then(res => res.json())
            .then(setSelectedComic)
    }
    /*
        Load all characters when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCharacters()
    }, [])

    useEffect(() => {
        console.log("****  CHARACTER APPLICATION STATE CHANGED  ****")
    }, [characters])

    return (
        <CharacterContext.Provider value={{
            characters, comics, setComics, getComics, selectedComic, setSelectedComic, getSelectedComic
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
}