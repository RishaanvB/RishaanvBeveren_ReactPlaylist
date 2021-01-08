import React from "react"
import Song from "./Song"

function SongList(props) {
    const { songData, handleDeleteSong, songGenre, songRating, filterOnGenre } = props;



    const filteredData = filterOnGenre(songGenre, songRating, songData).map(data => <Song
        songTitle={data.songTitle}
        songArtist={data.songArtist}
        songGenre={data.songGenre}
        songRating={data.songRating}
        key={data.id}
        id={data.id}
        handleDeleteSong={handleDeleteSong}
    />)


    const unFilteredSongData = songData.map(data => <Song
        songTitle={data.songTitle}
        songArtist={data.songArtist}
        songGenre={data.songGenre}
        songRating={data.songRating}
        key={data.id}
        id={data.id}
        handleDeleteSong={handleDeleteSong}
    />)

    return (
        <div className="songlist">
            {!songRating && !songGenre ? unFilteredSongData : filteredData}
        </div>
    );
}



export default SongList