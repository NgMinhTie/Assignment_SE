# Assignment_SE

// FROM STEP 1 TO 5 IS HOW TO RETRIEVE DATA THROUGH GET

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

STEP 4: ROUTE PARAMS
- This is the step we add the parameter(explicit) in the link in order to access the data
- We have:
    app.get('/api/users/:id' (resquest, respond) => {})
    where ":id" is to access the user who has this id.
- request.params.id (extract the value of the id in the request)

STEP 5: QUERY PARAMS
- The link will have the type: 
    "localhost:3000/users?key=value&key2=value2"
    we can add more key and value
- Initial 2 variables "filter" and "value" from the "request".

// USE TO CREATE DATA FROM THE POST REQUEST

STEP 6: POST REQUESTS
- Install Extension "Thunder Clienmt" and enter our own URL
- Add the function app.post()
- Use "Thunder Client" again => Change from "GET" to "POST" and add this script below:
    {
        "username": "anson"
    }
- Add "app.use(express.json())" after app.
- Create variable "body" imported the data from "request".