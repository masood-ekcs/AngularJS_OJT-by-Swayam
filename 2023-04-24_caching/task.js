const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Sholay = require('./sholay.js') // get the schema
const redis = require('redis')
app.use(express.json())


mongoose.connect('mongodb+srv://Masood:ekcs@cluster0.qbocn6h.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected with database")
}).catch((err) => {
    console.log(err)
})


const client = redis.createClient();
client.on("connect", function () { // connect is an Event
    console.log("Connected to Redis");
});
client.connect();


var emailRequestsinLast10min = {}


// Goal - 10 min ke andar kisi user ke email id se search krna ka api call 3 baar se jaida aata hai toh hmko usko cache krlena hai, kyunki hm ye conclude kr sakte hai ki ye email ka search baar baar aayega, toh bina matlab ka database query kyun kare

app.post("/getUserDetailsbyEmail", async (req, res) => {
    let email = req.body.email
    console.log(emailRequestsinLast10min)
    // [{name: Ayush, email: Ayush@gmail.com, age: 23},{name: Ayush1, email: Ayush@gmail.com, age: 22} ]
    try {
        let user = await client.get(email)

        if (user) {
            return res.json({ user: JSON.parse(user) })
        }
        //  {name: "Ayush", age: 22} -> JSON.stringify -> '{"name": "Ayush", "age": 22}'
        // '{"name": "Ayush", "age": 22}' -> JSON.parse -> {name: "Ayush", age: 22}


        if (emailRequestsinLast10min[email]) {
            let userDetails = emailRequestsinLast10min[email]
            let currTime = Date.now()
            let time_diff = (currTime - userDetails.time)
            if (time_diff <= 30 * 1000) {
                userDetails.count++;
                userDetails.currTime = Date.now()
                emailRequestsinLast10min[email] = userDetails
            }
            else {
                userDetails.count = 1;
                userDetails.currTime = Date.now()
                emailRequestsinLast10min[email] = userDetails
            }

            let user = await Sholay.find({ email })
            if (user.length == 0) {
                return res.json({ message: "No user found with the given email id" })
            }
            else {
                user = user[0]
                if (emailRequestsinLast10min[email].count >= 3) {
                    await client.set(email, JSON.stringify(user))
                    return res.json({ user })
                }
                else {
                    user = user[0]
                    return res.json({ user })
                }
            }


        }
        else {
            emailRequestsinLast10min[email] = { time: Date.now(), count: 1 }
            let user = await Sholay.find({ email })
            if (user.length == 0) {
                return res.json({ message: "No user found with the given email id" })
            }
            else {    // user = [{name: Ayush, email: Ayush@gmail.com, age: 23}]
                user = user[0]
                //  user = {name: Ayush, email: Ayush@gmail.com, age: 23}
                return res.json({ user })
            }

        }
    } catch (err) {
        console.log(err)
        res.json({ err: err.message })
    }
})


app.listen(3000, () => {
    console.log("Server is running on PORT: 3000")
})



/*
Create a simple API endpoint 
cache the response if the query exceeds 10 times
*/