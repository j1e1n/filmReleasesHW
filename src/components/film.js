import React from 'react';


const Film = ({name, url}) => {
    return(
        <div className="film">
            <a href={url} target="_blank"><li>{name}</li></a>
        </div>
        
    )
}



export default Film;

