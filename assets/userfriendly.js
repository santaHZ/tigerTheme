const userfly_wrapper = document.querySelector('#userfly_wrapper');

//******************/ touch move function - begin *******************//

const userfly_slider = document.querySelector('#userfly_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const userfly_slides = Array.from(userfly_slider.querySelectorAll('.item')); // this is div slides array
const userfly_btn = document.querySelector('#userfly_ctlBtn1').firstElementChild; // this is the div for dot buttons

// initiallize [userfriendly] dot buttons
for (let i=0; i < (userfly_slides.length - colNum + 1); i++){
	let node = document.createElement("div");
	node.setAttribute("id", "userfly_DotBtn-" +i);
	if(i== 0){
		node.setAttribute("class", "buttonDotSolid");
	}else{
		node.setAttribute("class", "buttonDotEmpty");
	}
	node.setAttribute("onclick","dotBtnFun(this.id)");
	userfly_btn.appendChild(node);
}
//console.log(userfly_btn);


// initialize uniCounter
if (uniCounter.hasOwnProperty("userfriendly")){
		
}else{
	uniCounter["userfriendly"] = 0;
	// console.log(uniCounter);
}

let userfly_isDragging = false,
	userfly_startPos = 0,
	userfly_currentTranslate = 0,
	userfly_prevTranslate = 0,
	userfly_animationID = 0,
	userfly_currentIndex = 0


userfly_slides.forEach((slide, index) => {
	const userfly_slideImage = slide.querySelector('img');
	userfly_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	userfly_slideImage.addEventListener('touchstart', userfly_touchStart(index));
	userfly_slideImage.addEventListener('touchend', userfly_touchEnd);
	userfly_slideImage.addEventListener('touchmove', userfly_touchMove);

	//Mouse events
	userfly_slideImage.addEventListener('mousedown', userfly_touchStart(index));
	userfly_slideImage.addEventListener('mouseup', userfly_touchEnd);
	userfly_slideImage.addEventListener('mouseleave', userfly_touchEnd);
	userfly_slideImage.addEventListener('mousemove', userfly_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function userfly_touchStart(index){
	return function(event){
		userfly_currentIndex = index;
		userfly_startPos = userfly_getPositionX(event);
		userfly_isDragging = true;
		userfly_animationID = requestAnimationFrame(userfly_animation);
	}
}

function userfly_touchEnd(){
	userfly_isDragging = false;
	cancelAnimationFrame(userfly_animationID);
	const userfly_movedBy = userfly_currentTranslate - userfly_prevTranslate;
	console.log(uniCounter["userfriendly"]);
	if(userfly_movedBy < -50 && uniCounter["userfriendly"] < (userfly_slides.length - touchColNum)){
		uniCounter["userfriendly"] += 1;
	}
	if(userfly_movedBy > 50 && uniCounter["userfriendly"] > 0){
		uniCounter["userfriendly"] -= 1;
	}
	userfly_setPositionByIndex();

	let btnNodes =Array.from(userfly_btn.children);

	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["userfriendly"]){
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})


}

function userfly_touchMove(event){
	if (userfly_isDragging){
		const userfly_currentPosition = userfly_getPositionX(event);
		userfly_currentTranslate = userfly_prevTranslate + userfly_currentPosition - userfly_startPos;
	}
}

// get mouse or touch postionX
function userfly_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function userfly_animation(){
	userfly_setSlidePosition();
	if (userfly_isDragging) requestAnimationFrame(userfly_animation);
}

function userfly_setSlidePosition(){
	userfly_slider.style.transform = `translateX(${userfly_currentTranslate}px)`;
}

function userfly_setPositionByIndex(){
	let userfly_size = Math.round(userfly_slider.clientWidth / touchColNum)
	userfly_currentTranslate = uniCounter["userfriendly"] * (- userfly_size);
	userfly_prevTranslate = userfly_currentTranslate;
	userfly_setSlidePosition();
}




function userfly_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("userfly_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	console.log(idString);
	console.log(idStringIndex);

	let btnNodes =Array.from(userfly_btn.children);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number

	switch(counterId){
		case "userfriendly":
			userfly_setPositionByIndex();
	}
}

//************** touch move function - end ****************//


