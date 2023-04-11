const giphy = "https://api.giphy.com"; //base URL for any giphy API requests

/*
 * Functions for GIPHY API requests.
 */
async function getGenreList(quer) {
  let reqUrl = `${giphy}/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=${quer}&limit=1&offset=0&rating=g&lang=en`;
  //For Fetch, other options are:
  // * body: <data for POST request>
  var response = await fetch(reqUrl);
  //the JSON response data will be found in response.json()
  return await response.json();
}

//EXPORT any functions to be used outside this file
module.exports = {
    getGenreList
};