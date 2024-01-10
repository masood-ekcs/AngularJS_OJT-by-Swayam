const express = require('express')
const app = express()







// fetch("some url", { method: "POST", headers: { 'Content-Type': 'application/json', 'secret': 'abcd', 'machineid': 'abc124' }, body: "Ayush" })


// Server Main - Transaction logic
// Server Client - Website Server
/*


[c1] - 134.12.13.56 - Ye computer bank ki website ko serve krega
If client has to transfer money

c1->c2

[c2] - 125.32.87.29





*/

// Custom header - Jo information chahe wo bhej sakte hai, aap aisa logic likh skte ho
// App - Angular/Andoid/React -> Backend (/Profile)  
// 

app.get("/", (req, res) => {
    res.setHeader("fname", "Masood") // to send header with response
    res.setHeader("lname", "Ahmad") // to send second header with reponse
    // res.writeHead(200, { "theme": "modern", "style": "tendy" })
    // 200 - 299 ––> OK
    // 300 - 399 ––> Redirect
    // 400 - 499 ––> Client side error
    // 500 - 599 ––> Internal Server error


    res.send("Welcome to our server")
})



// ≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠ S E R V E R
const port = 3000
// const port = process.env.PORT || 3000
app.listen(port, (err) => { (err) ? console.log(err) : console.log("Server is running on http://localhost:" + port) })