import React, { useContext, useState, useEffect } from "react"
import { CharacterContext } from "./CharacterProvider"
import Character from "./Character"
import "./CharacterSearchResults.css"
import { ListGroup, ListGroupItem } from "reactstrap"
import { ListItem } from "@material-ui/core"

export const CharacterSearchResults = ({ searchTerms, setCharacter, setActiveList }) => {
    const { characters } = useContext(CharacterContext)

    const [filteredCharacters, setFiltered] = useState([])
    // const [selectedCharacter, setCharacter] = useState([])
    // const [selectedComics, setComics] = useState([])

    

   

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = characters.filter(character => character.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }
    }, [searchTerms, characters])

    return (
        <div className="searchResults">
            {/* <h3 className="resultsHeader">Results</h3> */}
            <div className="characters">
                <ListGroup className="listGroup" >
                    {
                        filteredCharacters.map(character => {
                        return (
                                <ListGroupItem
                                    className="fakeLink href"
                                    onClick={ evt => {
                                        
                                        setCharacter({character})
                                        setActiveList("characterSelected")
                                        
                                    }}
                                >{character.name}</ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </div>

            
        </div>
    )
}