import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
    return (
    <div>
        <h1>{title}, {year} ({id})</h1>
        <h6>{summary}</h6>
        <img src={poster} />
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;