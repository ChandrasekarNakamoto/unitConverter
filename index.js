const btnEl=document.getElementById("btn-el")
let inputEl = document.getElementById("input-el").value
let value = inputEl
let a
btnEl.addEventListener("click",function(){
    length(value)
    volume(value)
    mass(value)
})


function length(a) {
    let meterToFeet = (a*3.2808399).toFixed(2)
    let feetToMeter = (a/3.2808399).toFixed(2)
    let lengthEl =document.getElementById("length-el")
    lengthEl.innerHTML +=  `<h3> ${a} meters = ${meterToFeet} feet | ${a} feet = ${feetToMeter} meters </h3>`

}

function volume(a) {
    let LitresToGallons = (a*3.785).toFixed(2)
    let GallonsToLittres = (a/3.785).toFixed(2)
    let volumeEl =document.getElementById("volume-el")
    volumeEl.innerHTML +=  `<h3> ${a} litres = ${LitresToGallons} gallons | ${a} gallons = ${GallonsToLittres} litres </h3>`

}

function mass(a) {
    let kgToPound = (a*2.205).toFixed(2)
    let poundToKg = (a/2.205).toFixed(2)
    let massEl =document.getElementById("mass-el")
    massEl.innerHTML +=  `<h3> ${a} kilograms = ${kgToPound} pounds | ${a} pounds = ${poundToKg} kilograms </h3>`

}