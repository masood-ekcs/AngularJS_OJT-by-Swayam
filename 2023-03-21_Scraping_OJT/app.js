const cheerio = require("cheerio")
const fetch = require('cross-fetch')
const urlP = require('url-parser')
const fs = require('fs')
const path = require('path')
// Crawling Strategy 
// Home page scrape krna hai-> Usme se jo bhi links mile usme mereko jaana aur us page ko scrape krna hai




let seenUrl = {}




async function crawl(url) {

    if (seenUrl[url]) {
        return
    }
    console.log("Crawling " + url)
    seenUrl[url] = true


    let { host } = urlP.parse(url)
    let res = await fetch(url)
    let text = await res.text();
    // console.log(text)
    // using Cheerio
    let $ = cheerio.load(text)
    // map method traverse krta hai ek array ko [10,20,56,21,56]
    let allLinks = $("a").map((index, value) => {
        let link = value.attribs.href
        if (link.search(".html") != -1 || link.search("http") != -1) {
            let tempHost = urlP.parse(link).host
            if (!tempHost) {
                tempHost = "http://" + host + "/" + link
                return tempHost
            }
            else {
                if (tempHost == host) {
                    return tempHost
                }
            }
        }
    }).get()



    let allImages = $("img").map((index, value) => {
        let src = value.attribs.src
        if (src.search("http") == -1) {
            return "http://" + host + "/" + src
        }
        else {
            return src
        }
    }).get()


    console.log(allImages)
    console.log(allLinks)


    for (let i = 0; i < allImages.length; i++) {
        let fileName = path.basename(allImages[i])
        fetch(allImages[i]).then((imgChunk) => {
            const dir = fs.createWriteStream(__dirname + "/images/" + fileName)
            imgChunk.body.pipe(dir)
            // console.log(fileName + " downloaded")
        })
    }





    for (let i = 0; i < allLinks.length; i++) {
        crawl(allLinks[i])
        // Recurssion mein ek function khud ko call krta hai
    }
}

// Home page - saare images download kiye + links nikale saare [home, about, contact]
// 


let url = "https://www.ekcs.co"
crawl(url)