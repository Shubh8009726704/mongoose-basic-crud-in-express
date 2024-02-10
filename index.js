const express = require('express')
require('./config.js')
const Product = require('./product.js')

const app = express()
app.use(express.json())

app.post('/',async (req,resp)=>{
    let data = new Product(req.body)
    let result = await data.save()
    resp.send(result)
    console.log(result)
})

app.listen(3000,()=>{
    console.log('Server running 3000 port number')
})