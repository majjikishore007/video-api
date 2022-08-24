# Topic
To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Tech stack
- javascript
- Postgres
- docker

## End points
- Endpoint `/api/getAllVideoes?size={noOfItemsInPage}&page={pageNo}`
    `queryparams - size,page`
    - Returns the stored video data in a paginated response sorted in descending order of published datetime.
- Endpoint `/api/getByTitleAndDesc?title={}&description={}`
     `queryparams - title,description`
    - To search the stored videos using their title and description.

## Setting up the 

- Make sure to  have  `node v16 or higher` installed 
- Clone the repo `git clone https://github.com/majjikishore007/video-api.git `or `git clone  git@github.com:majjikishore007/video-api.git` 
- Then `cd video-api`
- Run `npm install ` to install all the node modules 
- Get an `api-key` form the google console
- set up the `.env` reference `.env.example`   
- Make sure to install `docker` and `docke-compose`
- Run `sudo docker-compose up --build -d` which builds the containers and starts the project
- To stop the containers Run `docker-compose down`

