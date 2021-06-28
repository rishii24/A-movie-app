import React from 'react'
import './Style/Search.css'

function search({ handleInput, search }) {
    return (
        <div className="searchBar">
            <div className="searchText">
                <h2>Find any movie you wish to know about.. </h2>
            </div>
            <input type="text"
                placeholder="Search here.."
                className="searchBox"
                onChange={handleInput}
                onKeyPress={search} />
        </div>
    )
}

export default search
