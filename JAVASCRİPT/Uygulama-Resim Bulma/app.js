const formWrapper=document.querySelector(".form-wrapper")
const form=document.querySelector("#form")
const searchInput=document.querySelector("#inputSearch")
const buttonWrapper=document.querySelector("#button-wrapper")
const searchButton=document.querySelector("#searchButton")
const clearButton=document.querySelector("#clearButton")
const imageList=document.querySelector("#imageList")

runEventsListener()

function runEventsListener(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clear)
}
function clear(){
    console.log("hello")
    searchInput.value=""
    Array.from(imageList.children).forEach((child)=>child.remove())
}

function search(e){
//    console.log("Çalışıyor mu ?")
    const value=searchInput.value.trim()
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers: {
            Authorization:"Client-ID JISPDeGURxZC-zO18FeH4hKvKVdlU1dhyCwK4NSMF-8"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
     
        Array.from(data.results).forEach((image)=>{
            addToUI(image.urls.small)
        })
    })
    .catch((err)=>console.log(err))

    e.preventDefault();
}

function addToUI(url){
    
    const div=document.createElement("div")
    div.className="card";
    
    const img=document.createElement("img")
    img.className="img"
    img.setAttribute("src",url)
    img.height="400"
    img.width="500"

    div.append(img)
    imageList.append(div)
}

