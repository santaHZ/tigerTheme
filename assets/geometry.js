// This is tabBtn JavaScript code!
console.log("start");

//******************Define tab button img url*************************//
// const tabBtnOverall = 'https://cdn.shopify.com/s/files/1/0614/0490/5716/files/overall01.jpg?v=1638937485';
// const tabBtnFolded = 'https://cdn.shopify.com/s/files/1/0614/0490/5716/files/folded01.jpg?v=1638937485';

const tabDivOverall = document.querySelector("#geometry .tabInfo .overall");
const tabDivFolded = document.querySelector("#geometry .tabInfo .folded");
const tabBtn1 = document.querySelector("#geometry .tabBtnDiv .tabBtn1");
const tabBtn2 = document.querySelector("#geometry .tabBtnDiv .tabBtn2");

// const DivOverallWrapper = tabDivOverall.firstElementChild;
// const DivFoldedWrapper = tabDivFolded.firstElementChild;
//let tabDivFoldedWrapperData = document.querySelector("#geometry .tabInfo .folded .foldedWrapper .foldedlWrapperData");
// console.log(DivOverallWrapper);

// setting the image of the tab
/* const overallImg = DivOverallWrapper.firstElementChild.firstElementChild;
overallImg.setAttribute('src', tabBtnOverall);

const foldedImg = DivFoldedWrapper.firstElementChild.firstElementChild;
foldedImg.setAttribute('src', tabBtnFolded); */

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