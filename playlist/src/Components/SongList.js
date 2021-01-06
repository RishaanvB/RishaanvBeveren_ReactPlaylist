import React from "react"
import Song from "./Song"

function SongList(props) {
    const { songData, handleDeleteSong } = props;


    return (
        <>
            {songData.map(data => <Song
                songTitle={data.songTitle}
                songArtist={data.songArtist}
                songGenre={data.songGenre}
                songRating={data.songRating}
                key={data.id}
                id={data.id}
                handleDeleteSong={handleDeleteSong}
            />)}
          
        </>
    );
}



export default SongList