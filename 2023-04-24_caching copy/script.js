const mongoose = require('mongoose')
const Sholay = require('./sholay.js') // get the schema

mongoose.connect('mongodb+srv://Masood:ekcs@cluster0.qbocn6h.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Connected with database")
}).catch((err) => {
    console.log(err)
})

let tempCache1 = new Sholay({ name: "Ghabbar", email: "ghabbar@sholay.com", phone: 11111, address: "Ramgarh, UP" })
let tempCache2 = new Sholay({ name: "Kalia", email: "kalia@sholay.com", phone: 22222, address: "Ramgarh, UP" })
let tempCache3 = new Sholay({ name: "Sambha", email: "sambha@sholay.com", phone: 33333, address: "Pahari ka teela, Ramgarh, UP" })

let tempCache4 = new Sholay({ name: "Soorma Bhopali", email: "soormabhopali@sholay.com", phone: 44444, address: "lakri ki taal, Ramgarh, UP" })
let tempCache5 = new Sholay({ name: "Thakur", email: "thakur@sholay.com", phone: 55555, address: "Polic Chowki, Ramgarh, UP" })

let tempCache6 = new Sholay({ name: "Jai", email: "jai@sholay.com", phone: 66666, address: "Lawaris Colony, UP" })
let tempCache7 = new Sholay({ name: "Veeru", email: "veeru@sholay.com", phone: 77777, address: "Lawaris Colony, UP" })

let tempCache8 = new Sholay({ name: "Basanti", email: "basanti@sholay.com", phone: 88888, address: "Chup Chaap colony, Ramgarh, UP" })
let tempCache9 = new Sholay({ name: "Mausi", email: "mausi@sholay.com", phone: 99999, address: "Chup Chaap colony, Ramgarh, UP" })

/*
Ramlal
Hariram
Jailer
Ahmed
Imaam Saheb
Deepak

*/

tempCache1.save().then((data) => { console.log(data) })
tempCache2.save().then((data) => { console.log(data) })
tempCache3.save().then((data) => { console.log(data) })
tempCache4.save().then((data) => { console.log(data) })
tempCache5.save().then((data) => { console.log(data) })
tempCache6.save().then((data) => { console.log(data) })
tempCache7.save().then((data) => { console.log(data) })
tempCache8.save().then((data) => { console.log(data) })
tempCache9.save().then((data) => { console.log(data) })
