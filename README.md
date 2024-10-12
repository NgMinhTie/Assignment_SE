# Assignment_SE

STEP 1: Turn on PowerShell:
- Type some command with "npm" to create "package.json" and "package-lock.json" files
- Then add into "package.jon":
    "start:dev": "nodemon ./src/index.js",     ---This line is to restart automatically when having changes in code
    "start": "node .src/index.js"              ---Start to run index.js
    "type": "module"                           ---Type "module" is more modern than "commonjs" => change ".js" into 
                                                "mjs"
    