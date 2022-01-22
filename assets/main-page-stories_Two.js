//******************/ touch move function - begin *******************//
const slideContainerOuter_Two = document.getElementById('userStory_Two'); //get div object most outside;
const userStory_Two_slider = document.querySelector('#userStory_Two_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
let userStory_Two_slides = Array.from(userStory_Two_slider.querySelectorAll('.uni_imgSlider > .item')); // this is div slides array
const userStory_Two_btn = document.querySelector('#userStory_Two_ctlBtn1').firstElementChild; // this is the div for dot buttons

const userStory_Two_sliderWrapper = document.querySelector('#userStory_Two_wrapper'); // div with id #userStory_Two_wrapper

const userStory_Two_slidesLi =Array.from(userStory_Two_slider.querySelectorAll('.uni_imgSlider > .item > ul > li'));

console.log(userStory_Two_slides);
console.log(userStory_Two_slides.length);

console.log('userStory_Two_slider' + userStory_Two_slider);

console.log('userStory_Two_sliderWrapper:' + userStory_Two_sliderWrapper.clientWidth);

/*** the following slideWidth need to recalculate after window resizing ***/
let singleSlideWidth_Two = Math.ceil(userStory_Two_sliderWrapper.clientWidth / colNum);


console.log('singleSlideWidth_Two:' + singleSlideWidth_Two);

let dotAvailableNum_Two = userStory_Two_slides.length - colNum - 1;
console.log('dotAvailabel:' + dotAvailableNum_Two);


//***** initiallize [userStory_Two] dot buttons *****//
for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
	let userStory_Two_node = document.createElement("div");
    console.log('i am here' + i);
	// userStory_Two_node.setAttribute("id", "userStory_Two_DotBtn-" +i);
    userStory_Two_node.id = "userStory_Two_DotBtn-" + i;
	if(i== 0){
		userStory_Two_node.setAttribute("class", "buttonDotSolid");
	}else{
		userStory_Two_node.setAttribute("class", "buttonDotEmpty");
	}
	userStory_Two_node.setAttribute("onclick","dotBtnFun(this.id)");
	userStory_Two_btn.appendChild(userStory_Two_node);
}

console.log(userStory_Two_btn);

// initialize uniCounter
if (uniCounter.hasOwnProperty("userStory_Two")){
		
}else{
	uniCounter["userStory_Two"] = 2;
	// console.log(uniCounter);
}

let userStory_Two_isDragging = false,
	userStory_Two_startPos = 0,
	userStory_Two_currentTranslate = 0,
	userStory_Two_prevTranslate = 0,
	userStory_Two_animationID = 0,
	userStory_Two_currentIndex = 0

let userStory_Two_currentPosition = 0;
let interval_Two = 5000;
let userStory_Two_size = userStory_Two_slider.clientWidth;
let slideId_Two;

let settingBtnPosition_2 = function(){
    let btnNodes = Array.from(userStory_Two_btn.children);
    btnNodes.forEach((child, index) =>{
        if (index != uniCounter["userStory_Two"] - 2){
            child.setAttribute("class","buttonDotEmpty");
        }else{
            child.setAttribute("class","buttonDotSolid");
        }
    })
}

console.log('conlNum:' + colNum);
userStory_Two_setPositionByIndex(); //initialize slide position
settingBtnPosition_2();
//console.log(userStory_Two_slides);

const startSlide_Two = ()=>{
    slideId_Two = setInterval(()=>{
        uniCounter["userStory_Two"] += 1;
        if(uniCounter["userStory_Two"] >= 7){
            uniCounter["userStory_Two"] = 2;
            // userStory_Two_slider.style.transition = 'none';
            // userStory_Two_slider.style.transform = `translateX(${-userStory_Two_size * uniCounter["userStory_Two"]}px)`;

        }else{
			console.log('current index:' + uniCounter["userStory_Two"]);
            userStory_Two_setPositionByIndex();
            settingBtnPosition_2();
        }
    }, interval);
}

userStory_Two_slider.addEventListener('transitionend', ()=>{

	let counterMax = userStory_Two_slides.length - 3 + 1;
	console.log(colNum);

    // console.log(uniCounter["userStory_Two"]);
    if (Number(uniCounter["userStory_Two"]) >= counterMax ){
        uniCounter["userStory_Two"] = 2;
        settingBtnPosition_2();
        userStory_Two_slider.style.transition = 'none';
        // userStory_Two_slider.style.transform = `translateX(${-userStory_Two_size * uniCounter["userStory_Two"]}px)`;
		userStory_Two_slider.style.transform = `translateX(${-singleSlideWidth_Two * uniCounter["userStory_Two"]}px)`;
        // userStory_Two_slider.style.transition = 'transform 0.7s ease-in-out';
    }

	let lastIndex = userStory_Two_slides.length - 3

	if (Number(uniCounter["userStory_Two"]) < 2){
		console.log(uniCounter["userStory_Two"]);
        uniCounter["userStory_Two"] = lastIndex;
        settingBtnPosition_2();
        userStory_Two_slider.style.transition = 'none';
        // userStory_Two_slider.style.transform = `translateX(${-userStory_Two_size * uniCounter["userStory_Two"]}px)`;
		userStory_Two_slider.style.transform = `translateX(${-singleSlideWidth_Two * uniCounter["userStory_Two"]}px)`;
        // userStory_Two_slider.style.transition = 'transform 0.7s ease-in-out';
    }


});

slideContainerOuter.addEventListener('mouseenter', ()=>{
    clearInterval(slideId_Two);
});

// slideContainerOuter.addEventListener('mouseleave', startSlide_Two);

// startSlide_Two();

userStory_Two_slides.forEach((slide, index) => {
	const userStory_Two_slideImage = slide.querySelector('ul');
	userStory_Two_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	userStory_Two_slideImage.addEventListener('touchstart', userStory_Two_touchStart(index));
	userStory_Two_slideImage.addEventListener('touchend', userStory_Two_touchEnd);
	userStory_Two_slideImage.addEventListener('touchmove', userStory_Two_touchMove);

	//Mouse events
	userStory_Two_slideImage.addEventListener('mousedown', userStory_Two_touchStart(index));
	userStory_Two_slideImage.addEventListener('mouseup', userStory_Two_touchEnd);
	userStory_Two_slideImage.addEventListener('mouseleave', userStory_Two_touchEnd);
	userStory_Two_slideImage.addEventListener('mousemove', userStory_Two_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function userStory_Two_touchStart(index){
	return function(event){
		userStory_Two_currentIndex = index;
		
		userStory_Two_startPos = userStory_Two_getPositionX(event);
		userStory_Two_isDragging = true;
		userStory_Two_animationID = requestAnimationFrame(userStory_Two_animation);
	}
}

function userStory_Two_touchEnd(){
	userStory_Two_isDragging = false;
	cancelAnimationFrame(userStory_Two_animationID);
	const userStory_Two_movedBy = userStory_Two_currentTranslate - userStory_Two_prevTranslate;
	//console.log(uniCounter["userStory_Two"]);
	if(userStory_Two_movedBy < -50 && uniCounter["userStory_Two"] < (userStory_Two_slides.length + 0)){
		uniCounter["userStory_Two"] += 1;
	}
	if(userStory_Two_movedBy > 50 && uniCounter["userStory_Two"] > -2){
		uniCounter["userStory_Two"] -= 1;
	}
	userStory_Two_setPositionByIndex();

	let btnNodes = Array.from(userStory_Two_btn.children);
    // console.log(btnNodes);
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["userStory_Two"] - 2){
            // console.log(index);
            // console.log(child);
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function userStory_Two_touchMove(event){
	if (userStory_Two_isDragging){
		userStory_Two_currentPosition = userStory_Two_getPositionX(event);
		userStory_Two_currentTranslate = userStory_Two_prevTranslate + userStory_Two_currentPosition - userStory_Two_startPos;
		
	}
}

// get mouse or touch postionX
function userStory_Two_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function userStory_Two_animation(){
	userStory_Two_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + userStory_Two_currentTranslate); */
	if (userStory_Two_isDragging) requestAnimationFrame(userStory_Two_animation);
}

function userStory_Two_setSlidePosition(){
	// console.log('setSlidePosition:' + userStory_Two_currentTranslate);
    
	userStory_Two_slider.style.transform = `translateX(${userStory_Two_currentTranslate}px)`;
    userStory_Two_slider.style.transition = 'transform 0.7s ease-in-out'; /* setting the transition */
}

function userStory_Two_setPositionByIndex(){
	// console.log("touch end size:" + userStory_Two_size);
	console.log('index:' + uniCounter["userStory_Two"]);
	// userStory_Two_currentTranslate = uniCounter["userStory_Two"] * (- userStory_Two_size);

	// the following singleSlideWidth_Two recalculated after window resizing
	singleSlideWidth_Two = Math.ceil(userStory_Two_sliderWrapper.clientWidth / colNum);

	console.log('singleSlideWidth_Two:' + singleSlideWidth_Two);
	userStory_Two_currentTranslate = uniCounter["userStory_Two"] * (- singleSlideWidth_Two);
	
	// console.log("touch end currentTranslate:" + userStory_Two_currentTranslate);
	userStory_Two_prevTranslate = userStory_Two_currentTranslate;
	userStory_Two_setSlidePosition();
}


/****** dot button function ********/
/****** dot button function ********/
function userStory_Two_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("userStory_Two_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	console.log(idString);
	console.log(idStringIndex);

	let btnNodes = Array.from(userStory_Two_btn.children);
	console.log(btnNodes);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;
	console.log('present counterId:' + counterId);

	uniCounter[counterId] = Number(idStringIndex) + 2; // make sure use Number() to convert string to number

	switch(counterId){
		case "userStory_Two":
			userStory_Two_setPositionByIndex();
	}
}

