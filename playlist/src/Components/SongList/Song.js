import React from "react"


function Song(props) {
    const { songTitle, songArtist, songGenre, songRating, handleDeleteSong, id } = props;

    return (
        <>
            <ul className="song-row-container" id={id}>

                <li className="song-row-item">{songTitle}</li>
                <li className="song-row-item">{songArtist}</li>
                <li className="song-row-item">{songGenre}</li>
                <li className="song-row-item">{songRating}</li>
                <li className="delete-btn" onClick={() => handleDeleteSong(id)}>Delete Song</li>

            </ul>
        </>
    );
}




export default Song