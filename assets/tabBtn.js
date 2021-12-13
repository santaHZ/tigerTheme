// This is tabBtn JavaScript code!
console.log("start");

let tabDivLeft = document.getElementById("overall");
let tabDivRight = document.getElementById("folded");
let tabBtn1 = document.getElementById("tabBtn1");
let tabBtn2 = document.getElementById("tabBtn2");

tabDivLeft.style.display = "block";
tabDivRight.style.display = "none";

let divShowLeft = function(){
	tabBtn1.style.backgroundColor = "rgb(214, 216, 215)";
	tabBtn2.style.backgroundColor = "#FFFFFF";

	tabDivLeft.style.display = "block";
	tabDivRight.style.display = "none";
}

let divShowRight = function(){
	tabBtn1.style.backgroundColor = "#FFFFFF";
	tabBtn2.style.backgroundColor = "rgb(214, 216, 215)";

	tabDivLeft.style.display = "none";
	tabDivRight.style.display = "block";
}