For running only the backend server use this config on the nodemon.json :
{ "verbose": false, "watch": [ "./server" ], "exec" : "babel-node ./server/server.js" }, And use express.js file on the server.js file import

For running the frontend and backend of the app use this config on the nodemon.json :
{ "verbose": false, "watch": [ "./server" ], "exec": "webpack --mode=development --config webpack.config.server.js && node ./dist/server.generated.js" } And use express-fullstack.js file on the server.js file import