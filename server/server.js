const express = require('express')
const app = express()
const mongoose = require('mongoose')



////////routesss///////
app.get('/', (req, res) => {
    res.send("Hello NODE API")
})


app.get('blog', (req, res) => {
    res.send("Hello Blog my name is martha")
})  

app.listen(3000,()=>{
    console.log('App is running on port 3000')
})

mongoose.connect('mongodb+srv://project:newproject@cluster0.wpnukce.mongodb.net/Daystar?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((error)=>{
    console.log(error)
})