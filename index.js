var express = require("express")
var app = express()
var name="Ganesh"
app.get('/Greet',function(req,res){
    res.send("Hi Bro")
});
app.get('/Greet',function(req,res){
    res.post("Hi "+name)
});
app.listen(3000)



