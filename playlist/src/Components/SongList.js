import React from "react"
import Song from "./Song"

function SongList(props) {
    const { songData } = props;


    return (
        <>

            {songData.map(data => <Song
                songTitle={data.songTitle}
                songArtist={data.songArtist}
                songGenre={data.songGenre}
                songRating={data.songRating}

            />)}
        </>
    );
}

export default SongList