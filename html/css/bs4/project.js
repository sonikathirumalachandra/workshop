fetch("data.json").then(res=>res.json()).then(
    data=>
    // console.log(data)
display(data.profile)
)
function display(iti){
    var sdack=document.querySelector(".card-deck")
console.log(cdeck)
var cd=document.createElement("div")
cd.classList.add("card")
console.log(cd)
cdeck.appendchild(cd)
//
for(var i in iti){
    //image area
    var in=document.createElement("img")
    Image.src=iti[i].img
}
}