import React, { useState } from 'react';
import FilmList from '../components/FilmList';


const FilmContainer = () => {

    const [films, setFilms] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    )






    return(
        <div className="film-container">
            <h3>Upcoming Film Releases for UK</h3>
            <hr></hr>
            <FilmList films={films}/>
            <hr></hr>
            <a href="https://www.imdb.com/calendar/?region=gb" target="_blank"><p id="view-more">View more upcoming releases &gt; &gt;</p></a>
        </div>
    )
};




export default FilmContainer;