const btnEl=document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")

btnEl.addEventListener("click",function(){

    let v = inputEl.value

        let meterToFeet = (v*3.2808399).toFixed(3)
        let feetToMeter = (v/3.2808399).toFixed(3)
        let lengthEl =document.getElementById("length-el")
        lengthEl.innerHTML = `<h2> Length(Meter/Feet) </h2>`+
        `<p> ${v} meters = ${meterToFeet} feet | ${v} feet = ${feetToMeter} meters </p>`

        let LitresToGallons = (v*3.785).toFixed(3)
        let GallonsToLittres = (v/3.785).toFixed(3)
        let volumeEl =document.getElementById("volume-el")
        volumeEl.innerHTML =  `<h2> Volume(Litre/Gallons)</h2>`+
        `<p> ${v} litres = ${LitresToGallons} gallons | ${v} gallons = ${GallonsToLittres} litres </p>`

        let kgToPound = (v*2.205).toFixed(3)
        let poundToKg = (v/2.205).toFixed(3)
        let massEl =document.getElementById("mass-el")
        massEl.innerHTML =  `<h2>Mass(Kilograms/Pounds) </h2>`+
        `<p> ${v} kilograms = ${kgToPound} pounds | ${v} pounds = ${poundToKg} kilograms </p>`
})



