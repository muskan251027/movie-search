# MOVIE SEARCH PLATFORM
- A platform to search movies according to title you enter or selecting specified genres if you want.
- URL - https://allmoviesearch.vercel.app/

## INSTALLATION
- Clone repository into your local folder.
- Run 'npm install' to install all necessary modules.
- Change environment variables in .env file using your own api key ids (optional).
- Run 'npm run dev' to run your project locally (http://localhost:8888/) 

## SOME COMMON ERRORS
If nothing shows up on screen that means there is some problem with api keys used in environment variables. Follow these steps:
- Go to https://rapidapi.com/gox-ai-gox-ai-default/api/ott-details
- Subscribe to get your own api key. (Sign up if required)
- Change OTT_DETAILS_API_KEY in .env with your new api key
- Refresh

If things still don't work properly, follow the below steps:
- Go to https://developers.giphy.com/explorer/
- Subscribe to get your own api key. (Sign up if required)
- Change GIPHY_API_KEY in .env with your new api key
- Refresh
