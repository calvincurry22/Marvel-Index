import React, { useState, useEffect, useContext } from "react"
import { CharacterContext } from "./CharacterProvider"
import { CharacterSearchBar } from "./CharacterSearchBar"
import { CharacterSearchResults } from "./CharacterSearchResults"
import Character from "./Character"
import "./ComicsExplorer.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const { characters } = useContext(CharacterContext)
    const defaultCharacter = characters[0]
    const [selectedCharacter, setCharacter] = useState({characterObj: {id:0}})
    const [activeList, setActiveList] = useState("readingList")
    const [components, setComponents] = useState()
    
    const showReadingList = () => (
        <Character key={defaultCharacter.id} characterObj={defaultCharacter} />
    )

    const showCharacter = () => (
        <Character key={selectedCharacter.character.id} characterObj={selectedCharacter.character} />
    )


    useEffect(() => {
        if (activeList === "readingList") {
            setComponents(showReadingList)
            setTerms("a")    
        }
        else {
            console.log(selectedCharacter)
            setComponents(showCharacter)
        }
    }, [selectedCharacter])

    return(

        <div className="comicSearchContainer">
            <div className="listDisplay">
                {components}
            </div>
            <div className="searchContainer">
                    <CharacterSearchBar setTerms={setTerms} selectedCharacter={selectedCharacter}/>
                    <CharacterSearchResults searchTerms={searchTerms} setCharacter={setCharacter} setActiveList={setActiveList} />
            </div>
            <div className="characterPanelContainer"></div>
        </div>
    )
}


