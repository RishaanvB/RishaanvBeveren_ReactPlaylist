const filterOnGenre = (genre, rating, array) => {
    const filteredByAll = array.filter(song => song.songGenre === genre && song.songRating === rating);
    const filteredSongsByGenre = array.filter(song => song.songGenre === genre);
    const filteredSongsByRating = array.filter(song => song.songRating === rating);
    const allFilteredSongs = [...filteredSongsByGenre, ...filteredSongsByRating];
    const uniqueSongs = allFilteredSongs.filter((song, index) => {
        return allFilteredSongs.indexOf(song) === index;
    });
    if (genre && rating) {
        return filteredByAll;
    }
    return uniqueSongs;
}

export default filterOnGenre