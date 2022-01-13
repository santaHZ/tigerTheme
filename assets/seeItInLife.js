//******************/ touch move function - begin *******************//

const seeItInlife_slider = document.querySelector('#seeItInlife_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const seeItInlife_slides = Array.from(seeItInlife_slider.querySelectorAll('.item')); // this is div slides array
const seeItInlife_btn = document.querySelector('#seeItInlife_ctlBtn1').firstElementChild; // this is the div for dot buttons

let btnFlag = 0;

// initiallize [seeItInlife] dot buttons
for (let i=0; i < (seeItInlife_slides.length - colNum + 1); i++){
	let node = document.createElement("div");
	node.setAttribute("id", "seeItInlife_DotBtn-" +i);
	if(i== 0){
		node.setAttribute("class", "buttonDotSolid");
	}else{
		node.setAttribute("class", "buttonDotEmpty");
	}
	node.setAttribute("onclick","dotBtnFun(this.id)");
	seeItInlife_btn.appendChild(node);

}

const seeItInlife_right_btn = document.querySelector('#seeItInlife_ctlBtn1').lastElementChild;


if ( seeItInlife_btn.children.length == 1){
    seeItInlife_btn.setAttribute('style', 'visibility:hidden;');
    seeItInlife_right_btn.setAttribute('style', 'visibility:hidden;');
}else{
    seeItInlife_btn.setAttribute('style', 'visibility:visible;');
    seeItInlife_right_btn.setAttribute('style', 'visibility:visible;');
}

//console.log(seeItInlife_btn);




// initialize uniCounter
if (uniCounter.hasOwnProperty("seeItInlife")){
		
}else{
	uniCounter["seeItInlife"] = 0;
	//console.log(uniCounter);
}

let seeItInlife_isDragging = false,
	seeItInlife_startPos = 0,
	seeItInlife_currentTranslate = 0,
	seeItInlife_prevTranslate = 0,
	seeItInlife_animationID = 0,
	seeItInlife_currentIndex = 0

let seeItInlife_currentPosition = 0;


//console.log(seeItInlife_slides);

seeItInlife_slides.forEach((slide, index) => {
	const seeItInlife_slideImage = slide.querySelector('img');
	seeItInlife_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	seeItInlife_slideImage.addEventListener('touchstart', seeItInlife_touchStart(index));
	seeItInlife_slideImage.addEventListener('touchend', seeItInlife_touchEnd);
	seeItInlife_slideImage.addEventListener('touchmove', seeItInlife_touchMove);

	//Mouse events
	seeItInlife_slideImage.addEventListener('mousedown', seeItInlife_touchStart(index));
	seeItInlife_slideImage.addEventListener('mouseup', seeItInlife_touchEnd);
	seeItInlife_slideImage.addEventListener('mouseleave', seeItInlife_touchEnd);
	seeItInlife_slideImage.addEventListener('mousemove', seeItInlife_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function seeItInlife_touchStart(index){
	return function(event){
		seeItInlife_currentIndex = index;
		
		seeItInlife_startPos = seeItInlife_getPositionX(event);
		seeItInlife_isDragging = true;
		seeItInlife_animationID = requestAnimationFrame(seeItInlife_animation);
	}
}

function seeItInlife_touchEnd(){
	seeItInlife_isDragging = false;
	cancelAnimationFrame(seeItInlife_animationID);
	const seeItInlife_movedBy = seeItInlife_currentTranslate - seeItInlife_prevTranslate;
	//console.log(uniCounter["seeItInlife"]);
	if(seeItInlife_movedBy < -50 && uniCounter["seeItInlife"] < (seeItInlife_slides.length - touchColNum)){
		uniCounter["seeItInlife"] += 1;
	}
	if(seeItInlife_movedBy > 50 && uniCounter["seeItInlife"] > 0){
		uniCounter["seeItInlife"] -= 1;
	}
	seeItInlife_setPositionByIndex();
	let btnNodes = seeItInlife_btn.children;
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["seeItInlife"]){
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function seeItInlife_touchMove(event){

	
	
	if (seeItInlife_isDragging){
		seeItInlife_currentPosition = seeItInlife_getPositionX(event);
		seeItInlife_currentTranslate = seeItInlife_prevTranslate + seeItInlife_currentPosition - seeItInlife_startPos;
		
	}
	/* console.log("seeItInlife_startPos:" + seeItInlife_startPos);
	console.log("seeItInlife_currentPosition:" + seeItInlife_currentPosition);
	console.log('position after moved:' + seeItInlife_currentTranslate); */
}

// get mouse or touch postionX
function seeItInlife_getPositionX(event) {
	/* console.log("pageX:" + event.pageX);
	console.log("clientX:" + event.clientX); */
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function seeItInlife_animation(){
	seeItInlife_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + seeItInlife_currentTranslate); */
	if (seeItInlife_isDragging) requestAnimationFrame(seeItInlife_animation);
}

function seeItInlife_setSlidePosition(){
	// console.log('setSlidePosition:' + seeItInlife_currentTranslate);
	seeItInlife_slider.style.transform = `translateX(${seeItInlife_currentTranslate}px)`;
}

function seeItInlife_setPositionByIndex(){
	let seeItInlife_size = Math.round(seeItInlife_slider.clientWidth / touchColNum);
	// console.log("touch end size:" + seeItInlife_size);
	seeItInlife_currentTranslate = uniCounter["seeItInlife"] * (- seeItInlife_size);
	// console.log("touch end currentTranslate:" + seeItInlife_currentTranslate);
	seeItInlife_prevTranslate = seeItInlife_currentTranslate;
	seeItInlife_setSlidePosition();
}



 function seeItInlife_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("seeItInlife_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes = seeItInlife_btn.children;

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number

	switch(counterId){
		case "seeItInlife":
			seeItInlife_setPositionByIndex();
	}
}

//************** touch move function - end ****************//


