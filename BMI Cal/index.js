let submit = document.getElementById('btn');
let gender = document.querySelector('#gender');
let wvalue = document.getElementById('weightval');
let hvalue = document.getElementById('heightval');
let result = document.querySelector('#result');
let rep = document.getElementById('rep')
function calculateBMI(){
    let hvalue = parseInt(heightval.value);
    let wvalue = parseInt(weightval.value);
    let res = [wvalue / hvalue / hvalue] * 10000;
    result.innerHTML = `Your BMI: ${res.toFixed(0)}kg/m²`;
}
    