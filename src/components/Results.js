import React from 'react'
import Result from './Result'
import './Style/Result.css'

function Results({ results }) {
    return (
        <div className="results">
            {results.map(result => (
                <Result key={result.imdbID} result={result} />
            )

        )}
        </div>
    )
}

export default Results
