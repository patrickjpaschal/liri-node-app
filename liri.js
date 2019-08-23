// BQB6oXCe97oz2s-OZ3htTTQpPzrXwsyTQ1djlQUFraxglzhWYf600fwnRSLDnWAKYsFYVv9fuYZC0CRHWH7okYPgmkH-9y3TPqjw7AOaYaxRsJr-I5N7TqKcdA_s3uo7lp2wx3MaXaSmZneBQ0_WSjzI08TglTDlrN_p-gkC

// omdb
// Here is your key: db872c51

// Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=db872c51

// Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=a3b2010c-ae19-47f9-b062-29bf228fd288
// If you did not make this request, please disregard this email.

// const db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
// client id spotify https://developer.spotify.com/my-applications/#!/applications/create
// client secret bd039fcee3b0477c8fc235bbb7195226

const axios = require("axios");

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var fs = require("fs");

// require('dotenv').config()
var userAction = process.argv[2];

var userTitle = process.argv[3];

//
fs.writeFile("movies.txt", "Inception, Die Hard", function(err) {
  if (err) {
    return console.log(err);
  }
  console.log("movies.txt was updated!");
});
fs.readFile("movies.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }
  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);
});

var getSpotify = function(songName) {
  var spotify = new Spotify(keys.spotifyKeys);

  // NPM package node-spotify-API
  spotify.search({ type: "track", query: songName }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    // console.log(JSON.stringify(data, null, 2))
    var songs = data.tracks.items[0];
    var cats = require("cat-me");
console.log(catme());
    // Console log Spotify
    console.log("artist(s): " + songs.artists[0].name);
    console.log("Song Name: " + songs.name);
    console.log("Preview Song: " + songs.preview_url);
    console.log("Album: " + songs.album.name);
    console.log("-----------------------------------------------");
  });
};

var getMovies = function(movieName) {
  // Run a request to the OMDB API with the movie specified
  var queryUrl =
    "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=db872c51";

  // Debug against the actual URL
  console.log(queryUrl);

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var movie = JSON.parse(body);

      // Movie title
      console.log("Title: " + movie.Title);

      // Release year of movie
      console.log("Release Year: " + movie.Year);

      // IMDB rating
      console.log("IMDB Rating: " + movie.imdbRating);

      // Rotten Tomatoes rating
      console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);

      // Country produced
      console.log("Country Produced: " + movie.Country);

      // Languages available
      console.log("Language(s) Available: " + movie.Language);

      // Plot synopsis
      console.log("Plot Synopsis: " + movie.Plot);

      // Actors
      console.log("Actors: " + movie.Actors);
    }
  });
};
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl =
  "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=db872c51";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios
  .get(queryUrl)
  .then(function(response) {
    console.log("Release Year: " + response.data.Year);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
 var queryAPI = function() {
 movie: axios.get("http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy").then(
    function(response) {
      console.log("The movie's rating is: " + response);
    })}
