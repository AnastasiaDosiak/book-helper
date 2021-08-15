# Book Helper

This app fetch a random book for the user's selected genre from the [goodreads.com](https://www.goodreads.com/). 
After that it looks for a book in the [Amazon](https://www.amazon.com/), adds to the cart and opens checkout page or reruns again if the book is not available for buying.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) on the client and with [Express](https://expressjs.com) for the server side.
Also [Puppeteer](https://pptr.dev/) was used for scrapping.

## How to start the app
You can start the project by running 

### `yarn && yarn start`

inside the _**client**_ directory 

and

### `yarn && nodemon index`
inside the **_server_** directory

