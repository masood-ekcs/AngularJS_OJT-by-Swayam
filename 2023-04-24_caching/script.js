// code to write a record in the db
const mongoose = require('mongoose')
const cache = require('./cache.js')
mongoose.connect('mongodb+srv://Masood:ekcs@cluster0.qbocn6h.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected with database")
}).catch((err) => {
    console.log(err)
})

let tempCache = new cache({ cache: "Hello" })
tempCache.save().then((data) => { console.log(data) })



// Homework
//1. Database mein ek collection banake usme 10 random dummy user data daalna hai

/*
ex -
name: "Ayush"
email: "kayush479@gmail.com"
phone: "9801254033"
address: "Ring Bandh, Sitamarhi"

*/


//2. Ek route banana POST jisme getDetailsByEmail 
//3. Aapko ek counter banana hoga, ye counter dekhega ki koi ek particular email id ke liye 10 min ke andar 2 baar api call aati hai, to aapko us user ka detail cache kr lena hai aur agli baar koi bhi request aaye toh cache se response bhejna actaul database query ki jagah





