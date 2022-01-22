//******************/ touch move function - begin *******************//
const slideContainerOuter_One = document.getElementById('userStory_One'); //get div object most outside;
const userStory_One_slider = document.querySelector('#userStory_One_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
let userStory_One_slides = Array.from(userStory_One_slider.querySelectorAll('.uni_imgSlider > .item')); // this is div slides array
const userStory_One_btn = document.querySelector('#userStory_One_ctlBtn1').firstElementChild; // this is the div for dot buttons

const userStory_One_sliderWrapper = document.querySelector('#userStory_One_wrapper'); // div with id #userStory_One_wrapper

const userStory_One_slidesLi =Array.from(userStory_One_slider.querySelectorAll('.uni_imgSlider > .item > ul > li'));

console.log(userStory_One_slides);
console.log(userStory_One_slides.length);

console.log('userStory_One_slider' + userStory_One_slider);

console.log('userStory_One_sliderWrapper:' + userStory_One_sliderWrapper.clientWidth);

/*** the following slideWidth need to recalculate after window resizing ***/
let singleSlideWidth_One = Math.ceil(userStory_One_sliderWrapper.clientWidth / colNum);


console.log('singleSlideWidth_One:' + singleSlideWidth_One);

let dotAvailableNum_One = userStory_One_slides.length - colNum - 1;
console.log('dotAvailabel:' + dotAvailableNum_One);


//***** initiallize [userStory_One] dot buttons *****//
for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
	let userStory_One_node = document.createElement("div");
    console.log('i am here' + i);
	// userStory_One_node.setAttribute("id", "userStory_One_DotBtn-" +i);
    userStory_One_node.id = "userStory_One_DotBtn-" + i;
	if(i== 0){
		userStory_One_node.setAttribute("class", "buttonDotSolid");
	}else{
		userStory_One_node.setAttribute("class", "buttonDotEmpty");
	}
	userStory_One_node.setAttribute("onclick","dotBtnFun(this.id)");
	userStory_One_btn.appendChild(userStory_One_node);
}

console.log(userStory_One_btn);

// initialize uniCounter
if (uniCounter.hasOwnProperty("userStory_One")){
		
}else{
	uniCounter["userStory_One"] = 2;
	// console.log(uniCounter);
}

let userStory_One_isDragging = false,
	userStory_One_startPos = 0,
	userStory_One_currentTranslate = 0,
	userStory_One_prevTranslate = 0,
	userStory_One_animationID = 0,
	userStory_One_currentIndex = 0

let userStory_One_currentPosition = 0;
let interval_One = 5000;
let userStory_One_size = userStory_One_slider.clientWidth;
let slideId_One;

let settingBtnPosition_1 = function(){
    let btnNodes = Array.from(userStory_One_btn.children);
    btnNodes.forEach((child, index) =>{
        if (index != uniCounter["userStory_One"] - 2){
            child.setAttribute("class","buttonDotEmpty");
        }else{
            child.setAttribute("class","buttonDotSolid");
        }
    })
}

console.log('conlNum:' + colNum);
userStory_One_setPositionByIndex(); //initialize slide position
settingBtnPosition_1();
//console.log(userStory_One_slides);

const startSlide_One = ()=>{
    slideId_One = setInterval(()=>{
        uniCounter["userStory_One"] += 1;
        if(uniCounter["userStory_One"] >= 7){
            uniCounter["userStory_One"] = 2;
            // userStory_One_slider.style.transition = 'none';
            // userStory_One_slider.style.transform = `translateX(${-userStory_One_size * uniCounter["userStory_One"]}px)`;

        }else{
			console.log('current index:' + uniCounter["userStory_One"]);
            userStory_One_setPositionByIndex();
            settingBtnPosition();
        }
    }, interval);
}

userStory_One_slider.addEventListener('transitionend', ()=>{

	let counterMax = userStory_One_slides.length - 3 + 1;
	console.log(colNum);

    // console.log(uniCounter["userStory_One"]);
    if (Number(uniCounter["userStory_One"]) >= counterMax ){
        uniCounter["userStory_One"] = 2;
        settingBtnPosition_1();
        userStory_One_slider.style.transition = 'none';
        // userStory_One_slider.style.transform = `translateX(${-userStory_One_size * uniCounter["userStory_One"]}px)`;
		userStory_One_slider.style.transform = `translateX(${-singleSlideWidth_One * uniCounter["userStory_One"]}px)`;
        // userStory_One_slider.style.transition = 'transform 0.7s ease-in-out';
    }

	let lastIndex = userStory_One_slides.length - 3

	if (Number(uniCounter["userStory_One"]) < 2){
		console.log(uniCounter["userStory_One"]);
        uniCounter["userStory_One"] = lastIndex;
        settingBtnPosition_1();
        userStory_One_slider.style.transition = 'none';
        // userStory_One_slider.style.transform = `translateX(${-userStory_One_size * uniCounter["userStory_One"]}px)`;
		userStory_One_slider.style.transform = `translateX(${-singleSlideWidth_One * uniCounter["userStory_One"]}px)`;
        // userStory_One_slider.style.transition = 'transform 0.7s ease-in-out';
    }


});

slideContainerOuter.addEventListener('mouseenter', ()=>{
    clearInterval(slideId_One);
});

// slideContainerOuter.addEventListener('mouseleave', startSlide_One);

// startSlide_One();

userStory_One_slides.forEach((slide, index) => {
	const userStory_One_slideImage = slide.querySelector('ul');
	userStory_One_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	userStory_One_slideImage.addEventListener('touchstart', userStory_One_touchStart(index));
	userStory_One_slideImage.addEventListener('touchend', userStory_One_touchEnd);
	userStory_One_slideImage.addEventListener('touchmove', userStory_One_touchMove);

	//Mouse events
	userStory_One_slideImage.addEventListener('mousedown', userStory_One_touchStart(index));
	userStory_One_slideImage.addEventListener('mouseup', userStory_One_touchEnd);
	userStory_One_slideImage.addEventListener('mouseleave', userStory_One_touchEnd);
	userStory_One_slideImage.addEventListener('mousemove', userStory_One_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function userStory_One_touchStart(index){
	return function(event){
		userStory_One_currentIndex = index;
		
		userStory_One_startPos = userStory_One_getPositionX(event);
		userStory_One_isDragging = true;
		userStory_One_animationID = requestAnimationFrame(userStory_One_animation);
	}
}

function userStory_One_touchEnd(){
	userStory_One_isDragging = false;
	cancelAnimationFrame(userStory_One_animationID);
	const userStory_One_movedBy = userStory_One_currentTranslate - userStory_One_prevTranslate;
	//console.log(uniCounter["userStory_One"]);
	if(userStory_One_movedBy < -50 && uniCounter["userStory_One"] < (userStory_One_slides.length + 0)){
		uniCounter["userStory_One"] += 1;
	}
	if(userStory_One_movedBy > 50 && uniCounter["userStory_One"] > -2){
		uniCounter["userStory_One"] -= 1;
	}
	userStory_One_setPositionByIndex();

	let btnNodes = Array.from(userStory_One_btn.children);
    // console.log(btnNodes);
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["userStory_One"] - 2){
            // console.log(index);
            // console.log(child);
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function userStory_One_touchMove(event){
	if (userStory_One_isDragging){
		userStory_One_currentPosition = userStory_One_getPositionX(event);
		userStory_One_currentTranslate = userStory_One_prevTranslate + userStory_One_currentPosition - userStory_One_startPos;
		
	}
}

// get mouse or touch postionX
function userStory_One_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function userStory_One_animation(){
	userStory_One_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + userStory_One_currentTranslate); */
	if (userStory_One_isDragging) requestAnimationFrame(userStory_One_animation);
}

function userStory_One_setSlidePosition(){
	// console.log('setSlidePosition:' + userStory_One_currentTranslate);
    
	userStory_One_slider.style.transform = `translateX(${userStory_One_currentTranslate}px)`;
    userStory_One_slider.style.transition = 'transform 0.7s ease-in-out'; /* setting the transition */
}

function userStory_One_setPositionByIndex(){
	// console.log("touch end size:" + userStory_One_size);
	console.log('index:' + uniCounter["userStory_One"]);
	// userStory_One_currentTranslate = uniCounter["userStory_One"] * (- userStory_One_size);

	// the following singleSlideWidth_One recalculated after window resizing
	singleSlideWidth_One = Math.ceil(userStory_One_sliderWrapper.clientWidth / colNum);

	console.log('singleSlideWidth_One:' + singleSlideWidth_One);
	userStory_One_currentTranslate = uniCounter["userStory_One"] * (- singleSlideWidth_One);
	
	// console.log("touch end currentTranslate:" + userStory_One_currentTranslate);
	userStory_One_prevTranslate = userStory_One_currentTranslate;
	userStory_One_setSlidePosition();
}





/****** dot button function ********/
/****** dot button function ********/
function userStory_One_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("userStory_One_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	console.log(idString);
	console.log(idStringIndex);

	let btnNodes = Array.from(userStory_One_btn.children);
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
		case "userStory_One":
			userStory_One_setPositionByIndex();
	}
}
