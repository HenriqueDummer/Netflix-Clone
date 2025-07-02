const REQUEST_END_POINTS = {
    movie: {
        nowPlaying: "movie/now_playing?language=en-US&page=1",
        popular: "movie/popular?language=en-US&page=1",
        topRated: "movie/top_rated?language=en-US&page=1",
        upcoming: "movie/upcoming?language=en-US&page=1",
        discover: "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        customDiscover: (page, genre) => {
            return `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
        },
        similar: (id) => {
            return `movie/${id}/similar?language=en-US`
        },
        cast: (id) => {
            return `movie/${id}/credits?language=en-US`
        },
        trailer: (id) => {
            return `movie/${id}/videos?language=en-US`
        },
        info: (id) => {
            return `movie/${id}?language=en-US`
        }

    },

    tv: {
        airingToday: "tv/airing_today?language=en-US&page=1",
        onTheAir: "tv/on_the_air?language=en-US&page=1",
        popular: "tv/popular?language=en-US&page=1",
        topRated: "tv/top_rated?language=en-US&page=1",
        discover: "discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        customDiscover: (page, genre) => {
            return `discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
        },
        similar: (id) => {
            return `tv/${id}/videos?language=en-US`
        },
        cast: (id) => {
            return `tv/${id}/credits?language=en-US`
        },
        trailer: (id) => {
            return `tv/${id}/videos?language=en-US`
        },
        info: (id) => {
            return `tv/${id}?language=en-US`
        }
    },
    search: (query) => {
        return `search/multi?query=${query}&include_adult=false&language=en-US&page=1`
    }
}

export default REQUEST_END_POINTS