const http = require("http");
const fs = require("fs");

var server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.writeHead(200);
        fs.readFile("index.html", (err,data)=>{
            if (err) {
                res.write(err);
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    if(req.url=="/tile.jpg"){
        res.writeHead(200);
        fs.readFile("tile.jpg", (err,data)=>{
            if (err){
                res.write("none");
            } else{
                res.write(data);
            }
            res.end();
        })
    }
    if(req.url=="/bg.png"){
        res.writeHead(200);
        fs.readFile("bg.png", (err,data)=>{
            if (err){
                res.write("none");
            } else{
                res.write(data);
            }
            res.end();
        })
    }
});

server.listen(1234,"localhost",(err)=>{
    if (err) {
        console.log("some error at connecting to the port and host");
    } else {
        console.log("Server started at http://localhost:1234/");
    }
});