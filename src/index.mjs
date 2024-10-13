import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (resquest, respond) => {
    respond.send('Hello World');
    //respond.status(201).send({msg: "Hello"});
});

app.get("/api/users", (resquest, response) => {
    response.send([
        {id: 1, username: "anson", displayName: "Anson"},
        {id: 2, username: "jack", displayName: "Jack"},
        {id: 1, username: "adam", displayName: "Adam"},
    ]);
});

app.get("/api/products", (request, response) => {
    response.send([{id: 123, name:"chicken breast", price: 12.99}]);
});

// Hàm callback sẽ được gọi lại sau khi server chạy thành công (sẽ thực thi trong tương lai)
app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});
