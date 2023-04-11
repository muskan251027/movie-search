// imported modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const ottdetails = require("./modules/ott/api");
const giphy = require("./modules/giphy/api");

// set up express app
const app = express();
const port = process.env.port || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

// local variables
var selectedMovieTitle;
var selectedGenreList;

//In order to parse POST body data as JSON, do the following.
//The following lines will convert the form data from query
//string format to JSON format.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// page routes
app.get("/", async (request, response) => {
    let genreList = await ottdetails.getGenreList();
    let genreStickerList = await getStickers(genreList);
    
    response.render("index", { title: "Movie Search Platform", genres: genreStickerList });
});
app.get("/movies", async (request, response) => {
    let movieList = await ottdetails.getMovieList(selectedMovieTitle);
    let finalMovieList = searchByGenre(movieList["results"]);
    
    response.render("movies", { title: "Movies", movies: finalMovieList });
});

// set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

// form processing requests
app.post("/submit", async (request, response) => {
    //for a POST form, field values are passed in request.body.<field_name>
    //we can do this because of lines 23-24 above
    selectedMovieTitle = request.body.movieTitle;
    selectedGenreList = request.body.genreName ?? [];
    if(request.body.genreName) {
        if(Array.isArray(request.body.genreName)) {}
        else {
            selectedGenreList = [];
            selectedGenreList.push(request.body.genreName);
        }
    }
    else {
        selectedGenreList = [];
    }

    response.redirect("/movies");
});

// Get sticker-genre list from genre list
async function getStickers(genreList) {
    let arr = [];
    let obj = {};
    for(let i=0; i<genreList.length; i++) {
        let lisst = await giphy.getGenreList(genreList[i]);
        obj["name"] = genreList[i];
        obj["imgurl"] = lisst['data'][0]['images']['original']['url'];
        arr.push(obj);
        obj = {};
    }
    return arr;
}

// Filter the movie list according to selected genres
function searchByGenre(movies) {
    let arr = [];
    for(let i=0; i<movies.length; i++) {
        let hasAllGenre = selectedGenreList.every(item => movies[i]["genre"].includes(item));
        if(hasAllGenre) {
            arr.push(movies[i]);
        }
    }
    return arr;
}