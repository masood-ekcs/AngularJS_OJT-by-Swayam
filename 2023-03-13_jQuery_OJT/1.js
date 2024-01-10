// let mainClass = document.querySelector(".listerlist")
let item = document.querySelectorAll(".lister-item-header")

for (let i = 0; i < item.length; i++) {
    let everyItem = item[i]
    let title = everyItem.querySelector("a").innerHTML
    console.log(title)
}



console.log(year)

let year = document.querySelectorAll(".lister-item-year")
for (let x = 0; x < year.length; x++) {
    let everyYear = year[x]
    let itemYear = everyYear.querySelector("span")
    console.log(itemYear)
    console.log(everyYear)
}
