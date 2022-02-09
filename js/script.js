let heightElement= document.querySelector(".js-height")
let weightElement= document.querySelector(".js-weight")
let formElement= document.querySelector(".form_BMI")
let bmiElement= document.querySelector(".js-BMI")

formElement.addEventListener("input", () =>{
let height = heightElement.value;
let weight = weightElement.value;
let bmi = weight/((height/100)**2)
bmiElement.innerText=bmi.toFixed(2)
});



