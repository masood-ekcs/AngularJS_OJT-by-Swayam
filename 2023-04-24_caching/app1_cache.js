const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Cache = require('./cache.js') // get the schema
const fetch = require('cross-fetch')


//  *************    using Cache to store the News
let emptyCache = ""

app.get("/news", async (req, res) => {

    if (emptyCache == "") { // if cache is empty, api will be called

        let resp = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93")
        let news = await resp.json()

        emptyCache = news // saving news to the empty variable
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