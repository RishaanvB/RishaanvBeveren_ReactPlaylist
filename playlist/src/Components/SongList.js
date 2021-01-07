import React from "react"
import Song from "./Song"

function SongList(props) {
    const { songData, handleDeleteSong, songGenre, songRating } = props;

    const filterOnGenre = (genre, rating) => {
        const filteredByAll = songData.filter(song => song.songGenre === genre && song.songRating === rating);
        
        const filteredSongsByGenre = songData.filter(song => song.songGenre === genre);
        const filteredSongsByRating = songData.filter(song => song.songRating === rating);
        
        const allFilteredSongs = [...filteredSongsByGenre, ...filteredSongsByRating];
        console.log(allFilteredSongs, "allfiltered")
        const uniqueSongs = allFilteredSongs.filter((song, index) => {
            return allFilteredSongs.indexOf(song) === index;
        });
        if (genre && rating) {
            return filteredByAll;
        }
        return uniqueSongs;
    }


    const filteredData = filterOnGenre(songGenre, songRating).map(data => <Song
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
            {!songRating && !songGenre ? unFilteredSongData : filteredData}
        </>
    );
}



export default SongList