const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Cache = require('./cache.js') // get the schema
const fetch = require('cross-fetch')

mongoose.connect('mongodb+srv://Masood:ekcs@cluster0.qbocn6h.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected with database")
}).catch((err) => {
    console.log(err)
})


//  *************    using db to store the cache
app.get("/news", async (req, res) => {

    let emptyCache = await Cache.find({}) // find the record in the db. Find always return an Array
    let main_cache = emptyCache[0] // store the find results in a variable
    emptyCache = main_cache.cache // .cache is the field of the record

    console.log(emptyCache)

    if (emptyCache == "") { // if cache is empty, api will be called
        let resp = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93")
        let news = await resp.json()
        main_cache.cache = JSON.stringify(news) // empty cache value will get equal to the news
        await main_cache.save() // saving the record in db
        return res.json({ news }) // this will display the news
    }
    else {
        return res.json({ news: emptyCache }) // assigned the cache value (which now has news) to the news variable
    }
})


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})