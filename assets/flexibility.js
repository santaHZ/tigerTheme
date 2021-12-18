let colNum = 0;

let touchColNum = 0;
let touchCounter = 0;

let uniCounter ={};  // store flexibility, userfriendly, performance 's slider counter value;

const flex_wrapper = document.querySelector('#flex_wrapper');
//const flex_imgSlider = document.querySelector('#flex_imgSlider');
//const flex_slidImages = document.querySelectorAll('#flex_imgSlider .item'); // dives with class="item"

let flex_slidImagesImg = document.querySelectorAll('#flex_wrapper .item ul li img'); //this is an arry of img
const docAllSliderImages = document.querySelectorAll('.item ul li img');
//console.log(docAllSliderImages);




//******************/ touch move function - begin *******************//

const flex_slider = document.querySelector('#flex_wrapper').firstElementChild,
	flex_slides = Array.from(flex_slider.querySelectorAll('.item')); // this is div slides array


// initialize uniCounter
if (uniCounter.hasOwnProperty("flexibility")){
		
}else{
	uniCounter["flexibility"] = 0;
	console.log(uniCounter);
}

let isDragging = false,
	startPos = 0,
	currentTranslate = 0,
	prevTranslate = 0,
	animationID = 0,
	currentIndex = 0

//console.log(flex_slides);

flex_slides.forEach((slide, index) => {
	const flex_slideImage = slide.querySelector('img');
	flex_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	flex_slideImage.addEventListener('touchstart', touchStart(index));
	flex_slideImage.addEventListener('touchend', touchEnd);
	flex_slideImage.addEventListener('touchmove', touchMove);

	//Mouse events
	flex_slideImage.addEventListener('mousedown', touchStart(index));
	flex_slideImage.addEventListener('mouseup', touchEnd);
	flex_slideImage.addEventListener('mouseleave', touchEnd);
	flex_slideImage.addEventListener('mousemove', touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function touchStart(index){
	return function(event){
		currentIndex = index;
		//console.log(currentIndex);
		//console.log('start');
		startPos = getPositionX(event);
		//console.log(startPos);
		console.log(event);
		isDragging = true;

		// http://css-tricks.com/using-requestanimationframe/
		animationID = requestAnimationFrame(animation);
		flex_slider.classList.add('grabbing');

		


	}
}

function touchEnd(){
	//console.log('end');
	isDragging = false;
	cancelAnimationFrame(animation);

	const movedBy = currentTranslate - prevTranslate;
	
	//console.log('movedBy:' + movedBy);
	//console.log(flex_slides.length);



	console.log(uniCounter["flexibility"]);

	if(movedBy < -50 && uniCounter["flexibility"] < (flex_slides.length - touchColNum)){
		//currentIndex += 1;
		
		console.log('left');
		uniCounter["flexibility"] += 1;
		
		console.log(uniCounter["flexibility"]);
	}

	if(movedBy > 50 && uniCounter["flexibility"] > 0){
		//currentIndex -= 1;
		
		uniCounter["flexibility"] -= 1;
		
		console.log('right');
		console.log(uniCounter["flexibility"]);
	}

	setPositionByIndex();

	flex_slider.classList.remove('grabbing');

}

function touchMove(event){
	if (isDragging){
		//console.log('move');
		const currentPosition = getPositionX(event);
		currentTranslate = prevTranslate + currentPosition - startPos;
		//console.log('move');
		//console.log(currentTranslate);
	}
	
}

// get mouse or touch postionX
function getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation(){
	setSlidePosition();

	if (isDragging) requestAnimationFrame(animation);
}

function setSlidePosition(){
	flex_slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex(){
	//currentTranslate = currentIndex * ( - flex_slider.clientWidth / colNum);
	//console.log(touchCounter);
	let size = Math.round(flex_slider.clientWidth / touchColNum)
	currentTranslate = uniCounter["flexibility"] * (- size);
	prevTranslate = currentTranslate;
	//console.log(currentTranslate);
	setSlidePosition();
}


//************** touch move function - end ****************//







//Counter
//let flex_counter = 0;

//let felx_max_counter = 0;

//const flex_size = flex_slidImages[0].clientWidth;

//let flex_size = 0;



//flex_size = Math.round(flex_wrapper.clientWidth / colNum);

//flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';


//Button1 Listeners
let fun_Uni_prevBtn1 = function(btnId){

	let maxCounter = 0;
	let size = 0;
	
	//console.log(btnId);

	//get current clicked obj
	let curClkObj = document.getElementById(btnId);

	//console.log(curClkObj);

	let uni_imgSlider = curClkObj.parentElement.parentElement.querySelector('.uni_imgSlider');

	//console.log(uni_imgSlider);

	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));
	//console.log(uni_imgSliderImages);

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.id;

	if (uniCounter.hasOwnProperty(counterId)){
		
	}else{
		uniCounter[counterId] = 0;
	}


	if (uniCounter[counterId] == 0){
		return;
	}else{
		uni_imgSlider.style.transition = "transform 0.6s ease-in-out";
		uniCounter[counterId] --;
		size = Math.round(uni_imgSlider.clientWidth / colNum)

		uni_imgSlider.style.transform = 'translateX(' + (- size * uniCounter[counterId] ) + 'px)';
	
		curClkObj.style.background = "black";
		curClkObj.parentElement.querySelector('.buttonDotEmpty').style.background = "white";

	}

};

let fun_Uni_nextBtn1 = function(btnId){

	let maxCounter = 0;
	let size = 0;
	
	//console.log(btnId);

	//get current clicked obj
	let curClkObj = document.getElementById(btnId);
	let uni_imgSlider = curClkObj.parentElement.parentElement.querySelector('.uni_imgSlider');
	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.id;

	if (uniCounter.hasOwnProperty(counterId)){
		
	}else{
		uniCounter[counterId] = 0;
		
	}
	console.log('maxCounter:' + maxCounter);
	console.log(uniCounter[counterId]);

	if (uniCounter[counterId] == maxCounter){
		return;
	}else{
		uni_imgSlider.style.transition = "transform 0.6s ease-in-out";
		uniCounter[counterId] ++;
		size = Math.round(uni_imgSlider.clientWidth / colNum)

		uni_imgSlider.style.transform = 'translateX(' + (- size * uniCounter[counterId] ) + 'px)';
	
		curClkObj.style.background = "black";
		curClkObj.parentElement.querySelector('.buttonDotSolid').style.background = "white";

	}
};



//Button2 Listeners
let fun_Uni_prevBtn2 = function(btnId){

	let maxCounter = 0;
	let size = 0;
	
	//console.log(btnId);

	//get current clicked obj
	let curClkObj = document.getElementById(btnId);
	let uni_imgSlider = curClkObj.parentElement.parentElement.querySelector('.uni_imgSlider');
	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.id;

	
	if (uniCounter.hasOwnProperty(counterId)){
		console.log(uniCounter);

	}else{
		uniCounter[counterId] = 0;
	}

	if (uniCounter[counterId] == 0){
		return;
	}else{
		uni_imgSlider.style.transition = "transform 0.6s ease-in-out";
		uniCounter[counterId] --;
		console.log('btn:' + uniCounter[counterId]);
		size = Math.round(uni_imgSlider.clientWidth / colNum)

		uni_imgSlider.style.transform = 'translateX(' + (- size * uniCounter[counterId] ) + 'px)';
	
		curClkObj.parentElement.querySelector('.buttonDotSolid').style.background = "black";
		curClkObj.parentElement.querySelector('.buttonDotEmpty').style.background = "white";
	}

};

let fun_Uni_nextBtn2 = function(btnId){
	let maxCounter = 0;
	let size = 0;
	
	//console.log(btnId);

	//get current clicked obj
	let curClkObj = document.getElementById(btnId);
	let uni_imgSlider = curClkObj.parentElement.parentElement.querySelector('.uni_imgSlider');
	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.id;

	if (uniCounter.hasOwnProperty(counterId)){
		
	}else{
		uniCounter[counterId] = 0;
		
	}

	if (uniCounter[counterId] == maxCounter){
		return;
	}else{
		uni_imgSlider.style.transition = "transform 0.26 ease-in-out";
		uniCounter[counterId] ++;
		//console.log(uniCounter[counterId]);
		size = Math.round(uni_imgSlider.clientWidth / colNum)

		uni_imgSlider.style.transform = 'translateX(' + (- size * uniCounter[counterId] ) + 'px)';
	
		curClkObj.parentElement.firstElementChild.style.background = "white";
		curClkObj.parentElement.querySelector('.buttonDotEmpty').style.background = "black";
	}

};




window.addEventListener('resize', function(event) {

	if (window.innerWidth < 750){
		colNum = 1; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 1;
		//felx_max_counter = 4;
		for (let i=0; i < (docAllSliderImages.length -1) ; i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else if(window.innerWidth < 1200 && window.innerWidth >=750){
		colNum = 2; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 2;
		//felx_max_counter = 4;
		for (let i=0; i < (docAllSliderImages.length -1) ; i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else{
		colNum = 3; //when window size smaller than 750, set all sliders colNum 3
		touchColNum = 3;
		//felx_max_counter = 2;
		for (let i=0; i < (docAllSliderImages.length -1); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}
	//console.log(flex_slidImagesImg[0].width);
}, true);

