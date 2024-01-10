const express = require('express')
const app = express()
const fetch = require('cross-fetch')

//  *************    calling the api everytime
app.get("/news", async (req, res) => {

    let resp = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93")
    let news = await resp.json()
    return res.json({ news }) // this will display the news
})


// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})