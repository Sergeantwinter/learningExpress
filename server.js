var exp = require('express');
var app = exp();

app.get('/', (req, res) => {
    res.send("Hi, I created a server");
});

app.listen(3000, () => {
    console.log("Serving is routing in port 8080.");
});

