export const sortByTitle = (array) => {
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

export const sortByArtist = (array) => {
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

export const sortByRating = (array) => {
    const copiedArray = [...array];
    copiedArray.sort((a, b) => {
        return a.songRating - b.songRating;
    });

    return copiedArray;
}

export const reverseArray = (array) => {
    const copiedArray = [...array];
    return copiedArray.reverse();
}
