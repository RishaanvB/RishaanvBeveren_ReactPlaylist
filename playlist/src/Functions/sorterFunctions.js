// sortBy functions copy/paste van https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/







const sortByTitle = (array) => {
    const copiedArray = [...array];
    copiedArray.sort((a, b) => {
        const fa = a.songTitle.toLowerCase(),
            fb = b.songTitle.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    return copiedArray;
}

const sortByArtist = (array) => {
    const copiedArray = [...array];
    copiedArray.sort((a, b) => {
        const fa = a.songArtist.toLowerCase(),
            fb = b.songArtist.toLowerCase();

        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    return copiedArray;
}

const sortByRating = (array) => {
    const copiedArray = [...array];
    copiedArray.sort((a, b) => {
        return a.songRating - b.songRating;
    });

    return copiedArray;
}

const reverseArray = (array) => {
    const copiedArray = [...array];
    return copiedArray.reverse();
}


module.exports = { sortByTitle, sortByArtist, sortByRating, reverseArray }