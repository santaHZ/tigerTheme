//******************/ touch move function - begin *******************//
const slideContainerOuter = document.getElementById('userStory'); //get div object most outside;
const userStory_slider = document.querySelector('#userStory_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
let userStory_slides = Array.from(userStory_slider.querySelectorAll('.uni_imgSlider > .item')); // this is div slides array
const userStory_btn = document.querySelector('#userStory_ctlBtn1').firstElementChild; // this is the div for dot buttons

const userStory_sliderWrapper = document.querySelector('#userStory_wrapper'); // div with id #userStory_wrapper

const userStory_slidesLi =Array.from(userStory_slider.querySelectorAll('.uni_imgSlider > .item > ul > li'));

// console.log(userStory_slides);
// console.log(userStory_slides.length);

// console.log('userStory_slider' + userStory_slider);

// console.log('userStory_sliderWrapper:' + userStory_sliderWrapper.clientWidth);

/*** the following slideWidth need to recalculate after window resizing ***/
let singleSlideWidth = Math.ceil(userStory_sliderWrapper.clientWidth / colNum);


// console.log('singleSlideWidth:' + singleSlideWidth);

let dotAvailableNum = userStory_slides.length - colNum - 1;
// console.log('dotAvailabel:' + dotAvailableNum);


//***** initiallize [userStory] dot buttons *****//
for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
	let userStory_node = document.createElement("div");
    // console.log('i am here' + i);
	// userStory_node.setAttribute("id", "userStory_DotBtn-" +i);
    userStory_node.id = "userStory_DotBtn-" + i;
	if(i== 0){
		userStory_node.setAttribute("class", "buttonDotSolid");
	}else{
		userStory_node.setAttribute("class", "buttonDotEmpty");
	}
	userStory_node.setAttribute("onclick","dotBtnFun(this.id)");
	userStory_btn.appendChild(userStory_node);
}

// console.log(userStory_btn);

// initialize uniCounter
if (uniCounter.hasOwnProperty("userStory")){
		
}else{
	uniCounter["userStory"] = 2;
	// console.log(uniCounter);
}

let userStory_isDragging = false,
	userStory_startPos = 0,
	userStory_currentTranslate = 0,
	userStory_prevTranslate = 0,
	userStory_animationID = 0,
	userStory_currentIndex = 0

let userStory_currentPosition = 0;
let interval = 5000;
let userStory_size = userStory_slider.clientWidth;
let slideId;

let settingBtnPosition = function(){
    let btnNodes = Array.from(userStory_btn.children);
    btnNodes.forEach((child, index) =>{
        if (index != uniCounter["userStory"] - 2){
            child.setAttribute("class","buttonDotEmpty");
        }else{
            child.setAttribute("class","buttonDotSolid");
        }
    })
}

// console.log('conlNum:' + colNum);
userStory_setPositionByIndex(); //initialize slide position
settingBtnPosition();
//console.log(userStory_slides);

const startSlide = ()=>{
    slideId = setInterval(()=>{
        uniCounter["userStory"] += 1;
        if(uniCounter["userStory"] >= 7){
            uniCounter["userStory"] = 2;
            // userStory_slider.style.transition = 'none';
            // userStory_slider.style.transform = `translateX(${-userStory_size * uniCounter["userStory"]}px)`;

        }else{
			console.log('current index:' + uniCounter["userStory"]);
            userStory_setPositionByIndex();
            settingBtnPosition();
        }
    }, interval);
}

userStory_slider.addEventListener('transitionend', ()=>{

	let counterMax = userStory_slides.length - 3 + 1;
	// console.log(colNum);

    // console.log(uniCounter["userStory"]);
    if (Number(uniCounter["userStory"]) >= counterMax ){
        uniCounter["userStory"] = 2;
        settingBtnPosition();
        userStory_slider.style.transition = 'none';
        // userStory_slider.style.transform = `translateX(${-userStory_size * uniCounter["userStory"]}px)`;
		userStory_slider.style.transform = `translateX(${-singleSlideWidth * uniCounter["userStory"]}px)`;
        // userStory_slider.style.transition = 'transform 0.7s ease-in-out';
    }

	let lastIndex = userStory_slides.length - 3

	if (Number(uniCounter["userStory"]) < 2){
		// console.log(uniCounter["userStory"]);
        uniCounter["userStory"] = lastIndex;
        settingBtnPosition();
        userStory_slider.style.transition = 'none';
        // userStory_slider.style.transform = `translateX(${-userStory_size * uniCounter["userStory"]}px)`;
		userStory_slider.style.transform = `translateX(${-singleSlideWidth * uniCounter["userStory"]}px)`;
        // userStory_slider.style.transition = 'transform 0.7s ease-in-out';
    }


});

slideContainerOuter.addEventListener('mouseenter', ()=>{
    clearInterval(slideId);
});

 slideContainerOuter.addEventListener('mouseleave', startSlide);

 startSlide();

userStory_slides.forEach((slide, index) => {
	const userStory_slideImage = slide.querySelector('ul');
	userStory_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	userStory_slideImage.addEventListener('touchstart', userStory_touchStart(index));
	userStory_slideImage.addEventListener('touchend', userStory_touchEnd);
	userStory_slideImage.addEventListener('touchmove', userStory_touchMove);

	//Mouse events
	userStory_slideImage.addEventListener('mousedown', userStory_touchStart(index));
	userStory_slideImage.addEventListener('mouseup', userStory_touchEnd);
	userStory_slideImage.addEventListener('mouseleave', userStory_touchEnd);
	userStory_slideImage.addEventListener('mousemove', userStory_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function userStory_touchStart(index){
	return function(event){
		userStory_currentIndex = index;
		
		userStory_startPos = userStory_getPositionX(event);
		userStory_isDragging = true;
		userStory_animationID = requestAnimationFrame(userStory_animation);
	}
}

function userStory_touchEnd(){
	userStory_isDragging = false;
	cancelAnimationFrame(userStory_animationID);
	const userStory_movedBy = userStory_currentTranslate - userStory_prevTranslate;
	//console.log(uniCounter["userStory"]);
	if(userStory_movedBy < -50 && uniCounter["userStory"] < (userStory_slides.length + 0)){
		uniCounter["userStory"] += 1;
	}
	if(userStory_movedBy > 50 && uniCounter["userStory"] > -2){
		uniCounter["userStory"] -= 1;
	}
	userStory_setPositionByIndex();

	let btnNodes = Array.from(userStory_btn.children);
    // console.log(btnNodes);
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["userStory"] - 2){
            // console.log(index);
            // console.log(child);
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function userStory_touchMove(event){
	if (userStory_isDragging){
		userStory_currentPosition = userStory_getPositionX(event);
		userStory_currentTranslate = userStory_prevTranslate + userStory_currentPosition - userStory_startPos;
		
	}
}

// get mouse or touch postionX
function userStory_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function userStory_animation(){
	userStory_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + userStory_currentTranslate); */
	if (userStory_isDragging) requestAnimationFrame(userStory_animation);
}

function userStory_setSlidePosition(){
	// console.log('setSlidePosition:' + userStory_currentTranslate);
    
	userStory_slider.style.transform = `translateX(${userStory_currentTranslate}px)`;
    userStory_slider.style.transition = 'transform 0.7s ease-in-out'; /* setting the transition */
}

function userStory_setPositionByIndex(){
	// console.log("touch end size:" + userStory_size);
	// console.log('index:' + uniCounter["userStory"]);
	// userStory_currentTranslate = uniCounter["userStory"] * (- userStory_size);

	// the following singleSlideWidth recalculated after window resizing
	singleSlideWidth = Math.ceil(userStory_sliderWrapper.clientWidth / colNum);

	// console.log('singleSlideWidth:' + singleSlideWidth);
	userStory_currentTranslate = uniCounter["userStory"] * (- singleSlideWidth);
	
	// console.log("touch end currentTranslate:" + userStory_currentTranslate);
	userStory_prevTranslate = userStory_currentTranslate;
	userStory_setSlidePosition();
}


function userStory_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("userStory_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	// console.log(idString);
	// console.log(idStringIndex);

	let btnNodes = Array.from(userStory_btn.children);
	// console.log(btnNodes);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;
	// console.log('present counterId:' + counterId);

	uniCounter[counterId] = Number(idStringIndex) + 2; // make sure use Number() to convert string to number

	switch(counterId){
		case "userStory":
			userStory_setPositionByIndex();
	}
}










