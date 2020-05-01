import React, { useRef } from "react"

export const CharacterSearchBar = ({ setTerms }) => {

    const { terms } = useRef()

    return (
        <fieldset>
            <div className="form-group search">
                <label htmlFor="searchTerms">Search:</label>
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    required
                    autoFocus
                    className="form-control"
                />
            </div>
        </fieldset>
    )
}