import axios from "axios";

//for axios, there's a bug with latter versions. Install @0.18.1 by "npm i axios@0.18.1"
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "908e5accd18cc91ae9bbf0be55fd431e",
        language: "en-US"
    } 
});


export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, { 
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, { 
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
          query: encodeURIComponent(term)
        }
    })
};

