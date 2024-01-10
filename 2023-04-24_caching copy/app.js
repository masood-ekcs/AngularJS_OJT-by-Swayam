const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Cache = require('./sholay.js')
const fetch = require('cross-fetch')
const cache = require('./sholay.js')
const redis = require('redis')
// mongoose.connect('mongodb+srv://Masood:ekcs@cluster0.qbocn6h.mongodb.net/?retryWrites=true&w=majority').then(()=>{
//     console.log("Connected with database")
// }).catch((err)=>{
//     console.log(err)
// })


const client = redis.createClient();
client.on("connect", function () {
    console.log("Connected to Redis");
});
client.connect();


// let dict = {
//     "kayush479@gmail.com": 12354321,
//     "tariq@ekcs.co": 8799575775
// }


// app.post("/getDetailsByEmail", (req,res)=>{
//     let email = req.body.email
//     if(dict[email])
//     {
//          let time = dict[email] // 8799575775
//          let currTime = Date.now()
//          let diff = currTime - time
//          if(diff>=10*60*1000)
//          {

//          }
//     }
//     else
//     {

//     }


// })




app.get("/news", async (req, res) => {

    let cache = await client.get('cache')

    // let cache = await Cache.find({})
    // let main_cache = cache[0]

    // cache = main_cache.cache
    // let cache = await client.get('cache')

    // console.log(cache)

    if (!cache) {
        let resp = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=cc5286a815534790a94b21281df35e93")
        let news = await resp.json()
        // main_cache.cache = JSON.stringify(news)
        // await main_cache.save()
        await client.set("cache", JSON.stringify(news))
        return res.json({ news }) // this will display the news
    }
    else {

        return res.json({ news: cache }) // assigned the cache value (which now has news) to the news variable
    }










})





app.listen(3000, () => {
    console.log("Server is running on port 3000")
})