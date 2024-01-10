//  https://32d94ecc2689-stremio-addon-opensubtitles.baby-beamup.club/pick/configure


let mainClass = document.querySelector(".listerlist")
let item = document.querySelectorAll(".lister-item-header")

for (let i = 0; i < item.length; i++) {
    let everyTitle = item[i]
    let title = everyTitle.querySelector("a").innerHTML
    console.log(title)
}





// to copy all the code from an HTML page
fetch("https://www.imdb.com/search/title/?title_type=music_video&ref_=nv_mp_mpv")
    .then(response => {
        return response.text()
    }).then(f_result => {
        console.log(f_result)
    })



let tbody = console.log(document.querySelector(".ipc-accordion__item__content_inner"))
    (tbody)


ipc - metadata - list--base

ipc - accordion__item__content_inner accordion - content


let tbody = document.querySelector(".ipc-metadata-list")
ipc - metadata - list - summary - item

console.log(document.querySelectorAll(".ipc-metadata-list-summary-item__tc"))





//https://www.imdb.com/name/nm9723359/?ref_=nm_mv_close
let ulBody = document.querySelector(".ipc-metadata-list")
let liList = ulBody.querySelector(".ipc-metadata-list-summary-item")
let listDiv = liList.querySelectorAll(".ipc-metadata-list-summary-item__t")

for (let i = 0; i < listDiv.length; i++) {
    let item = listDiv[i]
    let data = item.querySelector("a").innerHTML
    console.log(data)
}






//https://www.imdb.com/name/nm9723359/?ref_=nm_mv_close
let listMovies = document.querySelectorAll(".ipc-metadata-list-summary-item__t")
console.log(listMovies)
// for (let i = 0; i < listMovies.length; i++) {
//     let item = listMovies[i]
//     let data = item.querySelector("a").innerHTML
    // console.log(data)
// }
