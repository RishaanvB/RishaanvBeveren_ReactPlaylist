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
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="song-header">
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </thead>
            </table>
            <br />
            {!songRating && !songGenre ? unFilteredSongData : filteredData}
        </>
    );
}



export default SongList