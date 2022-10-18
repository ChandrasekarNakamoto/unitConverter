const btnEl=document.getElementById("btn-el")
let inputEl = document.getElementById("input-el").value
let value = Number(inputEl)
btnEl.addEventListener("click",function(){
    length()
    volume()
    mass()
})


function length() {
    let meterToFeet = (value*3.2808399).toFixed(2)
    let feetToMeter = (value/3.2808399).toFixed(2)
    let lengthEl =document.getElementById("length-el")
    lengthEl.innerHTML +=  `<h3> ${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters </h3>`

}

function volume() {
    let LitresToGallons = (value*3.785).toFixed(2)
    let GallonsToLittres = (value/3.785).toFixed(2)
    let volumeEl =document.getElementById("volume-el")
    volumeEl.innerHTML +=  `<h3> ${value} litres = ${LitresToGallons} gallons | ${value} gallons = ${GallonsToLittres} litres </h3>`

}

function mass() {
    let kgToPound = (value*2.205).toFixed(2)
    let poundToKg = (value/2.205).toFixed(2)
    let massEl =document.getElementById("mass-el")
    massEl.innerHTML +=  `<h3> ${value} kilograms = ${kgToPound} pounds | ${value} pounds = ${poundToKg} kilograms </h3>`

}