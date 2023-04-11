const ottdetails = "https://ott-details.p.rapidapi.com"; //base URL for any ott details API requests

/*
 * Functions for OTT Details API requests.
 */
async function getGenreList() {
  let reqUrl = `${ottdetails}/getParams?param=genre`;
  //For Fetch, other options are:
  // * body: <data for POST request>
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': process.env.OTT_DETAILS_API_KEY,
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    }
  );
  //the JSON response data will be found in response.json()
  return await response.json();
}

async function getMovieList(title) {
  let reqUrl = `${ottdetails}/search?title=${title}`;
  //For Fetch, other options are:
  // * body: <data for POST request>
  var response = await fetch(
    reqUrl,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'X-RapidAPI-Key': process.env.OTT_DETAILS_API_KEY,
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
      }
    }
  );
  //the JSON response data will be found in response.json()
  return await response.json();
}

//EXPORT any functions to be used outside this file
module.exports = {
  getGenreList,
  getMovieList
};