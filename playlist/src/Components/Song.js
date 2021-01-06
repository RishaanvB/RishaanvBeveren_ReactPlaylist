import React from "react"


function Song(props) {
    const { songTitle, songArtist, songGenre, songRating, handleDeleteSong, id } = props;





    return (
        <>
            <table style={{ width: "100%" }} id={id}>
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">{songTitle}</th>
                        <th className="song-row__item">{songArtist}</th>
                        <th className="song-row__item">{songGenre}</th>
                        <th className="song-row__item">{songRating}</th>
                        <th className="delete-btn" onClick={()=>handleDeleteSong(id)}>Delete Song</th>
                    </tr>
                </thead>
            </table>
        </>
    );
}




export default Song