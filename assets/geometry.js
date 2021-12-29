// This is tabBtn JavaScript code!
console.log("start");

const tabDivOverall = document.querySelector("#geometry .tabInfo .overall");
const tabDivFolded = document.querySelector("#geometry .tabInfo .folded");
const tabBtn1 = document.querySelector("#geometry .tabBtnDiv .tabBtn1");
const tabBtn2 = document.querySelector("#geometry .tabBtnDiv .tabBtn2");

const DivOverallWrapper = tabDivOverall.firstElementChild;
const DivFoldedWrapper = tabDivFolded.firstElementChild;
//let tabDivFoldedWrapperData = document.querySelector("#geometry .tabInfo .folded .foldedWrapper .foldedlWrapperData");
// console.log(DivOverallWrapper);

const overallImg = DivOverallWrapper.firstElementChild.firstElementChild;
overallImg.setAttribute('src', tabBtnOverall);

const foldedImg = DivFoldedWrapper.firstElementChild.firstElementChild;
foldedImg.setAttribute('src', tabBtnFolded);

// console.log(overallImg);



tabDivOverall.style.display = "block";
tabDivFolded.style.display = "none";

let divShowLeft = function(){
	tabBtn1.style.backgroundColor = "rgb(214, 216, 215)";
	tabBtn2.style.backgroundColor = "#FFFFFF";

	tabDivOverall.style.display = "block";
	tabDivFolded.style.display = "none";
}

let divShowRight = function(){
	tabBtn1.style.backgroundColor = "#FFFFFF";
	tabBtn2.style.backgroundColor = "rgb(214, 216, 215)";

	tabDivOverall.style.display = "none";
	tabDivFolded.style.display = "block";
}

window.addEventListener('resize', function(event) {


}, true);