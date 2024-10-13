import express from 'express'

const app = express()

app.use(express.json()); // This line is middleware use to analyse the body of the request and assign to the variable "body"
const PORT = process.env.PORT || 3000;

app.get("/", (resquest, respond) => {
    respond.send('Hello World');
    //respond.status(201).send({msg: "Hello"});
});

//Apply for one part of Step 4
const mockUsers = [
    {id: 1, username: "anson", displayName: "Anson"},
    {id: 2, username: "jack", displayName: "Jack"},
    {id: 3, username: "adam", displayName: "Adam"},
    {id: 4, username: "tina", displayName: "Tina"},
    {id: 5, username: "jason", displayName: "Json"},
    {id: 6, username: "henry", displayName: "Henry"},
    {id: 7, username: "marilyn", displayName: "Marilyn"},
];

app.get("/api/users", (request, response) => {
    //QUERY PARAMS
    console.log(request.query);
    const {
        query: {filter, value},
    } = request;
    // These three lines code above are the Destructing Assignment (which is used to query the data directly through request (which is currently a link))
    // "query:" is used to extract the (filter and value) through the request link
    if(!filter || !value) return response.send(mockUsers);
    else if (filter && value) 
        return response.send(mockUsers.filter((user) => user[filter].include(value)))
    // "filter()" function is used to filter and it will return the array whose elements are true
    // "user[filter].include(value)" is used to check whether it has the value if having it will return the value
    // where "user[filter]" to check the attribute of the user. In this case, this one is "username"
    // ".include(value)" to extract the value (string) of the user[filter]
    // Ex: if value is "an", it can show "anson".

})

/** Apply from Step 1 to a part of Step 4
app.get("/api/users", (resquest, response) => {
    response.send([
        {id: 1, username: "anson", displayName: "Anson"},
        {id: 2, username: "jack", displayName: "Jack"},
        {id: 1, username: "adam", displayName: "Adam"},
    ]);
});
*/

app.get("/api/products", (request, response) => {
    response.send([{id: 123, name:"chicken breast", price: 12.99}]);
});

//STEP 4: ROUTE PARAMAS
app.get('/api/users/:id', (request, response) => {
    console.log(request.params.id);  //http:/localhost/api/users/1 (1 is the "id")
    const parseID = parseInt(request.params.id); // Convert the above id (which is string) to Integer 
    console.log(parseID); // Remember to check if we do not enter ID or enter one that is not the number
    if(isNaN(parseID)) return response.status(400).send({msg: "Bad Request. Invalid ID"});
    const findUser = mockUsers.find((user) => user.id === parseID);
    if(!findUser) return response.sendStatus(404);
    return respond.send(findUser);
}
);    

// STEP 5: QUERY PARAMS
//Ex: localhost:3000/products?key=value&key2=value2
//Ex: http://localhost.3000/api/users?filter=username&value=an => The output would be:
// { filter: 'username', value: 'an'}

// STEP 6: POST REQUESTS
app.post('/api/users', (request, response) => {
    console.log(request.body);
    const{body} = request; // request của app.post() nằm trong "Thunder Client" 
    const newUser = {
        id: mockUsers[mockUsers.length - 1].id+1, ...body // "...body" dùng để gộp các thuộc tính từ body trong request vào trong NewUser
    }
    mockUsers.push(newUser);
    return response.status(201).send(newUser);
})

// Hàm callback sẽ được gọi lại sau khi server chạy thành công (sẽ thực thi trong tương lai)
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
