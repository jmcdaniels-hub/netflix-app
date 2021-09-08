const API_KEY = "91160b947699e6793b454aeb4f1d2a3f";

const requests = {
   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&labguage=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `disocver/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;