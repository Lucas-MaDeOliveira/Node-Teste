let express = require("express")
let app = express()

let port = process.env.PORT || 3000

app.get("/", function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.send("Olá!")
}) 

app.listen(port,() =>{
    console.log(`Servidoer rodando com a porta ${port}`)
})