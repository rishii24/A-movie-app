import React from 'react'
import './Style/Result.css'

function Result({ result}) {
    console.log(result)

    var imdb = `https://www.imdb.com/title/${result.imdbID}`

    return (

        <div className="result">
            <a className="movieContainer" href={imdb} target="_blank">
                <img className="resultImg" src={result.Poster} alt="" />
                <h3>{result.Title}</h3>
                <h4>{result.Year}</h4>
                <p>Click on the movie to get more info. at IMDb</p>
            </a>
        </div>
    )
}

export default Result
