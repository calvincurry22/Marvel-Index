import React, { useContext } from "react"
import { CharacterContext, CharacterProvider } from "./CharacterProvider"
import UserReadingList from "./UserReadingList"


export default () => (
    <div>
        <h1>My List</h1>
        <CharacterProvider>
            <UserReadingList />
        </CharacterProvider>

        <div className="listContainer"></div>
    </div>

)