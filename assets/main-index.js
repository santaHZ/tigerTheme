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

var imagePopularEBikes = document.querySelectorAll('.popularEBikes > ul > li > a > img');

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

// console.log(userReview_slides);
// console.log(userReview_slides.length);

const firstClone = userReview_slides[0].cloneNode(true);
const lastClone = userReview_slides[userReview_slides.length -1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

userReview_slider.append(firstClone);
userReview_slider.prepend(lastClone);  //this appending action is happened after DOM is loaded


//***** initiallize [userReview] dot buttons *****//
for (let i=0; i < (userReview_slides.length - 0); i++){
	let userReview_node = document.createElement("div");
    // console.log('i am here');
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

// console.log(userReview_btn);

// initialize uniCounter
if (uniCounter.hasOwnProperty("userReview")){
	uniCounter["userReview"] = 1;
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
        if(uniCounter["userReview"] >= (userReview_slides.length + 2)){
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
    // console.log(uniCounter["userReview"]);
    if (Number(uniCounter["userReview"]) >= (userReview_slides.length + 1)){
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
}

// get mouse or touch postionX
function userReview_getPositionX(event) {
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


// **************  video slider _1  ******************//

const videoSlideContainer_1 = document.getElementById('videoRow1_wrapper');
const videoSlider_1 = videoSlideContainer_1.querySelector('.uni_videoSlider');

const videoSlider_1_interval = 2000;

let videoSlides_1 = document.querySelectorAll('.videoSlider_item');
let videoSlide_1_index = 1;
let videoSliderId_1;



const videoSlides_1_1 = videoSlides_1[0].cloneNode(true);
const videoSlides_1_2 = videoSlides_1[1].cloneNode(true);
const videoSlides_1_lastClone1 = videoSlides_1[videoSlides_1.length -1].cloneNode(true);
const videoSlides_1_lastClone2 = videoSlides_1[videoSlides_1.length -2].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

videoSlider_1.append(videoSlides_1_1);
videoSlider_1.append(videoSlides_1_2);
videoSlider_1.prepend(videoSlides_1_lastClone1);  //this appending action is happened after DOM is loaded
videoSlider_1.prepend(videoSlides_1_lastClone2);


const videoSlideWidth_1 = videoSlides_1[videoSlide_1_index].clientWidth;

// console.log(slideWidth);

videoSlider_1.style.transform = `translateX(${-videoSlideWidth_1 * videoSlide_1_index}px)`;


const startVideoSlide_1 = ()=>{
    videoSliderId_1 = setInterval(()=>{
        videoSlide_1_index++;
		if(videoSlide_1_index >= 5){
			videoSlide_1_index = 1;
		}else{
			videoSlider_1.style.transform = `translateX(${-videoSlideWidth_1 * videoSlide_1_index}px)`;
        	videoSlider_1.style.transition = '.7s';
		}
        
    }, videoSlider_1_interval);
}

videoSlider_1.addEventListener('transitionend', ()=>{
    // console.log('transition end');
    videoSlides_1 = document.querySelectorAll('.videoSlider_item');
    if (videoSlide_1_index >=4){
        videoSlider_1.style.transition = 'none';
        videoSlide_1_index = 1;
        videoSlider_1.style.transform = `translateX(${-videoSlideWidth_1 * videoSlide_1_index}px)`;
    }
    /* if (slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    } */
});

videoSlideContainer_1.addEventListener('mouseenter', ()=>{
    clearInterval(videoSliderId_1);
});

videoSlideContainer_1.addEventListener('mouseleave', startVideoSlide_1);

startVideoSlide_1();



// **************  video slider _2  ******************//

const videoSlideContainer_2 = document.getElementById('videoRow2_wrapper');
const videoSlider_2 = document.querySelector('#videoRow2_wrapper .uni_videoSlider');

const videoSlider_2_interval = 3000;

let videoSlides_2 = document.querySelectorAll('#videoRow2_wrapper .uni_videoSlider .videoSlider_item');
let videoSlide_2_index = 1;
let videoSliderId_2;


const videoSlides_2_1 = videoSlides_2[0].cloneNode(true);
const videoSlides_2_2 = videoSlides_2[1].cloneNode(true);
const videoSlides_2_lastClone1 = videoSlides_2[videoSlides_2.length -1].cloneNode(true);
const videoSlides_2_lastClone2 = videoSlides_2[videoSlides_2.length -2].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

videoSlider_2.append(videoSlides_2_1);
videoSlider_2.append(videoSlides_2_2);
videoSlider_2.prepend(videoSlides_2_lastClone1);  //this appending action is happened after DOM is loaded
videoSlider_2.prepend(videoSlides_2_lastClone2);




const videoSlideWidth_2 = videoSlides_2[0].clientWidth;

console.log(videoSlideWidth_2);

videoSlider_2.style.transform = `translateX(${-videoSlideWidth_2 * videoSlide_2_index}px)`;


const startVideoSlide_2 = ()=>{
    videoSliderId_2 = setInterval(()=>{
        videoSlide_2_index++;
		if(videoSlide_2_index >= 5){
			videoSlide_2_index = 1;
		}else{
			videoSlider_2.style.transform = `translateX(${-videoSlideWidth_2 * videoSlide_2_index}px)`;
        	videoSlider_2.style.transition = '.7s';
		}
        
    }, videoSlider_2_interval);
}

videoSlider_2.addEventListener('transitionend', ()=>{
    // console.log('transition end');
    videoSlides_2 = document.querySelectorAll('.videoSlider_item');
    if (videoSlide_2_index >=4){
        videoSlider_2.style.transition = 'none';
        videoSlide_2_index = 1;
        videoSlider_2.style.transform = `translateX(${-videoSlideWidth_2 * videoSlide_2_index}px)`;
    }
    /* if (slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    } */
});

videoSlideContainer_2.addEventListener('mouseenter', ()=>{
    clearInterval(videoSliderId_2);
});

videoSlideContainer_2.addEventListener('mouseleave', startVideoSlide_2);

startVideoSlide_2();

