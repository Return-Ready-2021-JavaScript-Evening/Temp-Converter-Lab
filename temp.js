function Converter() {
const degreeContainer=document.getElementById("degrees").value;
const calc=(degreeContainer - 32) * 5/9; 
document.getElementById("answer").innerHTML = calc;



}