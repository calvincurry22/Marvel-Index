import React, { useContext, useState, useEffect } from "react"
import { CharacterContext } from "./CharacterProvider"
import { ListGroup, ListGroupItem } from "reactstrap"
import { Avatar } from "@material-ui/core"
import "./CharacterSearchResults.css"


export const CharacterSearchResults = ({ searchTerms, setCharacter, setActiveList }) => {
    const { characters } = useContext(CharacterContext)
    const [filteredCharacters, setFiltered] = useState([])

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
            <div className="characters">
                <ListGroup className="listGroup" >
                    {
                        filteredCharacters.map(character => {
                            const image = `${character.thumbnail.path}.${character.thumbnail.extension}`
                            return (
                                <ListGroupItem
                                    key={character.id}
                                    className="fakeLink href"
                                    onClick={evt => {

                                        setCharacter({ character })
                                        setActiveList("characterSelected")

                                    }}
                                ><Avatar src={image} /> {character.name}</ListGroupItem>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </div>
    )
}