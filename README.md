My idea for the TDDD27 course is to create a movie community where users can log in and rate movies they have seen. Rating as well as a short description could be provided. A watchlist for movies that the user want to see in the future can also be implemented (see IMDB watchlist for example). The user should be able to search for movies and see reviews by users as well as reviews from other sites such as IMDB and Rottentomatoes.

This will require API-handling from both IMDB and Rotten Tomates and Oauth logins from Facebook/Twitter/Google for user handling. The finished product will be a community where you will be able to see what your friends have seen and their take on that movie.

**Client-side framework**: React will be used for the client-side.

**Server-side framework**: Flask or Ruby on Rails will be used for the server-side, this will mainly be for login functionality with Facebook/Twitter/Google, as well as storing data in a sql server.

**Deployment platform**: The application will be deployed on Heroku.

I am also aiming to use a continuous integration tool such as Travis. Testing for the client-side will be conducted using Mocha.

Do you have any insight on using eiter Flask or Ruby on Rails for the server-side?
