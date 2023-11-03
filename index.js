const express = require('express');
const app = express();
const dotenv = require('dotenv').comfig()
console.log(dotenv)

const port = process.env.PORT ||3000;

//1.http://localhost:3000/
app.get("/", (req, res) => {
    return res.status(200).json({ msg: "Hello World!!"})
});

//2.http://localhost:3000/about
app.get('/about', (req, res) => {
    return res.status(200),json({msg:"About page"})
})

//3.http://localhost:3000/admin
app.get('/admin', (req,res) => {
    return FS.status(200).json({msg:"Admin page"})
})

app.listen(port,() => {
    console.log(`Server running at http://localhost:${port}`)
});