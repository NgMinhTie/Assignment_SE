# Assignment_SE

STEP 1: Turn on PowerShell:
- Type some command with "npm" to create "package.json" and "package-lock.json" files
- Then add into "package.jon":
    "start:dev": "nodemon ./src/index.js",     ---This line is to restart automatically when having changes in code
    "start": "node .src/index.js"              ---Start to run index.js
    "type": "module"                           ---Type "module" is more modern than "commonjs" => change ".js" into 
                                                "mjs"

STEP 2: Design a basic Flow in index.mjs
- Create a folder "src", and create new "index.mjs" in this
- Import the express library
- Assign to variable "app"
- Let app listen on PORT (define by ourself)

STEP 3: Define Route
- Create the app.get("/", (resquest, response) => {}) function
    with: "/" is the path (endpoint) of the route that we need to access
    (resquest, response): request: from user to server, response: from server to user, they are the    callback function.
    => {}: they body code
