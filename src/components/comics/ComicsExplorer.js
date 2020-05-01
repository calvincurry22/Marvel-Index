import React, { useState, useEffect } from "react"
import { CharacterProvider } from "./CharacterProvider"
import { CharacterSearchBar } from "./CharacterSearchBar"
import { CharacterSearchResults } from "./CharacterSearchResults"
import Character from "./Character"
import ReadingList from "./ReadingList"
import "./ComicsExplorer.css"

export default () => {
    const [searchTerms, setTerms] = useState(null)
    const [selectedCharacter, setCharacter] = useState({characterObj: {id:0}})
    const [activeList, setActiveList] = useState("readingList")
    const [components, setComponents] = useState()

    const showReadingList = () => (
        
        <ReadingList />
    )

    const showCharacter = () => (
        <CharacterProvider>

            <Character key={selectedCharacter.character.id} characterObj={selectedCharacter.character} />
        </CharacterProvider>
        
    )

    useEffect(() => {
        if (activeList === "readingList") {
            setComponents(showReadingList)
        }
        else {
            console.log(selectedCharacter)
            setComponents(showCharacter)
        }
    }, [selectedCharacter])

    return(

        <div className="comicSearchContainer">
            <div className="searchContainer">

                <CharacterProvider>
                    <CharacterSearchBar setTerms={setTerms} />
                    <CharacterSearchResults searchTerms={searchTerms} setCharacter={setCharacter} setActiveList={setActiveList} />
                </CharacterProvider>
            </div>
            <div className="listDisplay">
                {components}
            </div>
            <div className="characterPanelContainer"></div>
        </div>
    )
}


