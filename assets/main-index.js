var imageA = document.querySelectorAll('.mainIndex3Col > a');
var imageImg = document.querySelectorAll('.mainIndex3Col > a >img');
// var imageDivImg = document.querySelector('.zoomInner');
// console.log(imageA);
// console.log(imageImg);

imageImg.forEach((imageImgchild,index)=> {
    imageImg[index].addEventListener('mouseover', function(){
        imageA[index].classList.remove('zoomImgOut');
        imageA[index].classList.add('zoomImgIn');
        // console.log('mouse over');
        setTimeout(() => {
            // console.log('mouse out');
            imageA[index].classList.remove('zoomImgIn');
            imageA[index].classList.add('zoomImgOut');
        }, 300);
    })
})

var imagePopularEBikes = document.querySelectorAll('.popularEBikes > ul > a > img');

imagePopularEBikes.forEach((imageImgchild,index)=> {
    imagePopularEBikes[index].addEventListener('mouseover', function(){
        imagePopularEBikes[index].classList.remove('zoomImgOut');
        imagePopularEBikes[index].classList.add('zoomImgIn');
        // console.log('mouse over');
        setTimeout(() => {
            // console.log('mouse out');
            imagePopularEBikes[index].classList.remove('zoomImgIn');
            imagePopularEBikes[index].classList.add('zoomImgOut');
        }, 300);
    })
})



//******************/ touch move function - begin *******************//
const slideContainerOuter = document.getElementById('userReview'); //get div object most outside;
const userReview_slider = document.querySelector('#userReview_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
let userReview_slides = Array.from(userReview_slider.querySelectorAll('.uni_imgSlider > .item')); // this is div slides array
const userReview_btn = document.querySelector('#userReview_ctlBtn1').firstElementChild; // this is the div for dot buttons

console.log(userReview_slides);
console.log(userReview_slides.length);

const firstClone = userReview_slides[0].cloneNode(true);
const lastClone = userReview_slides[userReview_slides.length -1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

userReview_slider.append(firstClone);
userReview_slider.prepend(lastClone);  //this appending action is happened after DOM is loaded


//***** initiallize [userReview] dot buttons *****//
for (let i=0; i < (userReview_slides.length - 0); i++){
	let userReview_node = document.createElement("div");
    console.log('i am here');
	// userReview_node.setAttribute("id", "userReview_DotBtn-" +i);
    userReview_node.id = "userReview_DotBtn-" + i;
	if(i== 0){
		userReview_node.setAttribute("class", "buttonDotSolid");
	}else{
		userReview_node.setAttribute("class", "buttonDotEmpty");
	}
	userReview_node.setAttribute("onclick","dotBtnFun(this.id)");
	userReview_btn.appendChild(userReview_node);
}

console.log(userReview_btn);

// initialize uniCounter
if (uniCounter.hasOwnProperty("userReview")){
		
}else{
	uniCounter["userReview"] = 1;
	// console.log(uniCounter);
}

let userReview_isDragging = false,
	userReview_startPos = 0,
	userReview_currentTranslate = 0,
	userReview_prevTranslate = 0,
	userReview_animationID = 0,
	userReview_currentIndex = 0

let userReview_currentPosition = 0;
let interval = 2000;
let userReview_size = userReview_slider.clientWidth;
let slideId;

let settingBtnPosition = function(){
    let btnNodes = Array.from(userReview_btn.children);
    btnNodes.forEach((child, index) =>{
        if (index != uniCounter["userReview"] - 1){
            child.setAttribute("class","buttonDotEmpty");
        }else{
            child.setAttribute("class","buttonDotSolid");
        }
    })
}

userReview_setPositionByIndex(); //initialize slide position
settingBtnPosition();
//console.log(userReview_slides);

const startSlide = ()=>{
    slideId = setInterval(()=>{
        uniCounter["userReview"] += 1;
        if(uniCounter["userReview"] >= 6){
            uniCounter["userReview"] = 1;
            // userReview_slider.style.transition = 'none';
            // userReview_slider.style.transform = `translateX(${-userReview_size * uniCounter["userReview"]}px)`;

        }else{
            userReview_setPositionByIndex();
            settingBtnPosition();
        }
        
        
    }, interval);
}

userReview_slider.addEventListener('transitionend', ()=>{
    console.log(uniCounter["userReview"]);
    if (Number(uniCounter["userReview"]) >= 5){
        uniCounter["userReview"] = 1;
        settingBtnPosition();
        userReview_slider.style.transition = 'none';
        userReview_slider.style.transform = `translateX(${-userReview_size * uniCounter["userReview"]}px)`;
        // userReview_slider.style.transition = 'transform 0.7s ease-in-out';
        
    }
});

slideContainerOuter.addEventListener('mouseenter', ()=>{
    clearInterval(slideId);
});

slideContainerOuter.addEventListener('mouseleave', startSlide);

startSlide();

userReview_slides.forEach((slide, index) => {
	const userReview_slideImage = slide.querySelector('ul');
	userReview_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	userReview_slideImage.addEventListener('touchstart', userReview_touchStart(index));
	userReview_slideImage.addEventListener('touchend', userReview_touchEnd);
	userReview_slideImage.addEventListener('touchmove', userReview_touchMove);

	//Mouse events
	userReview_slideImage.addEventListener('mousedown', userReview_touchStart(index));
	userReview_slideImage.addEventListener('mouseup', userReview_touchEnd);
	userReview_slideImage.addEventListener('mouseleave', userReview_touchEnd);
	userReview_slideImage.addEventListener('mousemove', userReview_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function userReview_touchStart(index){
	return function(event){
		userReview_currentIndex = index;
		
		userReview_startPos = userReview_getPositionX(event);
		userReview_isDragging = true;
		userReview_animationID = requestAnimationFrame(userReview_animation);
	}
}

function userReview_touchEnd(){
	userReview_isDragging = false;
	cancelAnimationFrame(userReview_animationID);
	const userReview_movedBy = userReview_currentTranslate - userReview_prevTranslate;
	//console.log(uniCounter["userReview"]);
	if(userReview_movedBy < -50 && uniCounter["userReview"] < (userReview_slides.length + 0)){
		uniCounter["userReview"] += 1;
	}
	if(userReview_movedBy > 50 && uniCounter["userReview"] > 1){
		uniCounter["userReview"] -= 1;
	}
	userReview_setPositionByIndex();

	let btnNodes = Array.from(userReview_btn.children);
    // console.log(btnNodes);
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["userReview"] - 1){
            // console.log(index);
            // console.log(child);
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function userReview_touchMove(event){
	if (userReview_isDragging){
		userReview_currentPosition = userReview_getPositionX(event);
		userReview_currentTranslate = userReview_prevTranslate + userReview_currentPosition - userReview_startPos;
		
	}
	/* console.log("userReview_startPos:" + userReview_startPos);
	console.log("userReview_currentPosition:" + userReview_currentPosition);
	console.log('position after moved:' + userReview_currentTranslate); */
}

// get mouse or touch postionX
function userReview_getPositionX(event) {
	/* console.log("pageX:" + event.pageX);
	console.log("clientX:" + event.clientX); */
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function userReview_animation(){
	userReview_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + userReview_currentTranslate); */
	if (userReview_isDragging) requestAnimationFrame(userReview_animation);
}

function userReview_setSlidePosition(){
	// console.log('setSlidePosition:' + userReview_currentTranslate);
    
	userReview_slider.style.transform = `translateX(${userReview_currentTranslate}px)`;
    userReview_slider.style.transition = 'transform 0.7s ease-in-out';
}

function userReview_setPositionByIndex(){
	// console.log("touch end size:" + userReview_size);
	userReview_currentTranslate = uniCounter["userReview"] * (- userReview_size);
	// console.log("touch end currentTranslate:" + userReview_currentTranslate);
	userReview_prevTranslate = userReview_currentTranslate;
	userReview_setSlidePosition();
}


/* dot button function */

let dotBtnFun = function(dotBtnId){
	let curDotClkObj = document.getElementById(dotBtnId);

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes = Array.from(curDotClkObj.parentElement.parentElement.firstElementChild.children);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	//console.log(counterId);

	uniCounter[counterId] = Number(idStringIndex) + 1; // make sure use Number() to convert string to number; +1 because there is a prepend cloneNode.
	//console.log(uniCounter[counterId]);


	switch(counterId){
        case "userReview":
            userReview_setPositionByIndex();
			
	}

}



function userReview_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("userReview_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes = userReview_btn.children;

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number

	switch(counterId){
		case "userReview":
			userReview_setPositionByIndex();
	}
}


// **************  video slide  ******************//



