const express = require("express")

const app = express()

var frname = []
app.get("/fname",function(req,res)
{
    console.log(req.query.FruitName)
    frname.push(req.query.FruitName)
    console.log("FruitName Added : ",req.query.FruitName)
    res.send(frname)
})
app.listen(5000,function()
{
    console.log("Server Is Started...")
})