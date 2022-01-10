//******************/ touch move function - begin *******************//

const prod_slider = document.querySelector('#prod_wrapper').firstElementChild;  //this is div with class "uni_imgSlider"
const prod_slides = Array.from(prod_slider.querySelectorAll('.item')); // this is div slides array
/* console.log("prod_slides:" + prod_slides);
console.log("prod_slides[0] clientWidth:" + prod_slides[0].clientWidth);
console.log("prod_slider clientWidth:" + prod_slider.clientWidth);
console.log("prod_slider scrollWidth:" + prod_slider.scrollWidth);
console.log("prod_slider clientHeight:" + prod_slider.clientHeight); */

let slideCounterTesting = 0;



// initialize uniCounter
if (uniCounter.hasOwnProperty("productShowcase")){
		
}else{
	uniCounter["productShowcase"] = 0;
	//console.log(uniCounter);
}

let prod_isDragging = false,
	prod_startPos = 0,
	prod_currentTranslate = 0,
	prod_prevTranslate = 0,
	prod_animationID = 0,
	prod_currentIndex = 0

//console.log(prod_slides);

prod_slides.forEach((slide, index) => {
	const prod_slideImage = slide.querySelector('img');
	prod_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	prod_slideImage.addEventListener('touchstart', prod_touchStart(index));
	prod_slideImage.addEventListener('touchend', prod_touchEnd);
	prod_slideImage.addEventListener('touchmove', prod_touchMove);

	//Mouse events
	prod_slideImage.addEventListener('mousedown', prod_touchStart(index));
	prod_slideImage.addEventListener('mouseup', prod_touchEnd);
	prod_slideImage.addEventListener('mouseleave', prod_touchEnd);
	prod_slideImage.addEventListener('mousemove', prod_touchMove);

	let myElement ={};
	myElement.index = index;
	myElement.dataId = slide.getAttribute("data-media-id");
	prodShowcaseArray.push(myElement);

})

// console.log(prodShowcaseArray);

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function prod_touchStart(index){
	return function(event){
		prod_currentIndex = index;
		prod_startPos = prod_getPositionX(event);
		prod_isDragging = true;
		prod_animationID = requestAnimationFrame(prod_animation);
	}
}

function prod_touchEnd(){
	prod_isDragging = false;
	cancelAnimationFrame(prod_animationID);
	const prod_movedBy = prod_currentTranslate - prod_prevTranslate;
	//console.log(uniCounter["productShowcase"]);
	if(prod_movedBy < -50 && uniCounter["productShowcase"] < (prod_slides.length - productShowcaseColNum)){
		uniCounter["productShowcase"] += 1;
	}
	if(prod_movedBy > 50 && uniCounter["productShowcase"] > 0){
		uniCounter["productShowcase"] -= 1;
	}
	prod_setPositionByIndex();

}

function prod_touchMove(event){
	if (prod_isDragging){
		const prod_currentPosition = prod_getPositionX(event);
		prod_currentTranslate = prod_prevTranslate + prod_currentPosition - prod_startPos;
	}
}

// get mouse or touch postionX
function prod_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function prod_animation(){
	prod_setSlidePosition();
	if (prod_isDragging) requestAnimationFrame(prod_animation);
}

function prod_setSlidePosition(){
	prod_slider.style.transform = `translateX(${prod_currentTranslate}px)`;
}

function prod_setPositionByIndex(){
	//let prod_size = Math.round(prod_slider.clientWidth / productShowcaseColNum);
//   let prod_size = prod_slider.clientWidth / productShowcaseColNum;
//   console.log("prod_slider clientWidth:" + prod_slider.clientWidth);
//   console.log("prod_slider clientHeight:" + prod_slider.clientHeight);
	// let prod_size = prod_slider.clientWidth;
	slideCounterTesting++;
	console.log('wrapper width:\'' + slideCounterTesting + '\'' + prod_slider.clientWidth); 
	// adding above testing console.log, the problem that there will be a little of next slide show up in current slide show.


	let prod_size = prod_slides[0].clientWidth;
	console.log(prod_size);
	prod_currentTranslate = uniCounter["productShowcase"] * (- prod_size);
	prod_prevTranslate = prod_currentTranslate;
	prod_setSlidePosition();
}


//******************************  above codes are added by developing ******************//




//*********************design for small product showcase -begin ********************//
const prodPeek_wrapper = document.querySelector('#prodPeek_wrapper');
const prodPeek_AllSliderImages = document.querySelectorAll('#prodPeek_wrapper .uni_imgSlider .item img');
//console.log(prodPeek_AllSliderImages);

//******************/ touch move function - begin *******************//

const prodPeek_slider = document.querySelector('#prodPeek_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const prodPeek_slides = Array.from(prodPeek_slider.querySelectorAll('.item')); // this is div slides array
//console.log(prodPeek_slides);
let prodPeek_slides_id =prodPeek_slides[0].getAttribute("prodPeek-data-media-id");
//console.log(prodPeek_slides_id);


// calculate maxCounter
let maxCounter = Math.ceil((prodPeek_wrapper.scrollWidth - prodPeek_wrapper.clientWidth) / prodPeek_AllSliderImages[0].clientWidth);



// initialize uniCounter
if (uniCounter.hasOwnProperty("productPeekShowcase")){
		
}else{
	uniCounter["productPeekShowcase"] = 0;
	// console.log(uniCounter);
}

let prodPeek_isDragging = false,
	prodPeek_startPos = 0,
	prodPeek_currentTranslate = 0,
	prodPeek_prevTranslate = 0,
	prodPeek_animationID = 0,
	prodPeek_currentIndex = 0

//console.log(prodPeek_slides);

prodPeek_slides.forEach((slide, index) => {
	const prodPeek_slideImage = slide.querySelector('img');
	prodPeek_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	prodPeek_slideImage.addEventListener('touchstart', prodPeek_touchStart(index));
	prodPeek_slideImage.addEventListener('touchend', prodPeek_touchEnd);
	prodPeek_slideImage.addEventListener('touchmove', prodPeek_touchMove);

	//Mouse events
	prodPeek_slideImage.addEventListener('mousedown', prodPeek_touchStart(index));
	prodPeek_slideImage.addEventListener('mouseup', prodPeek_touchEnd);
	prodPeek_slideImage.addEventListener('mouseleave', prodPeek_touchEnd);
	prodPeek_slideImage.addEventListener('mousemove', prodPeek_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function prodPeek_touchStart(index){
	return function(event){
		prodPeek_currentIndex = index;
		prodPeek_startPos = prodPeek_getPositionX(event);
		prodPeek_isDragging = true;
		prodPeek_animationID = requestAnimationFrame(prodPeek_animation);
		//set productShowcase slider position through index
        uniCounter["productShowcase"] = Number(index) + 0; // here must use Number() to convert string to number
        prod_setPositionByIndex();

	}
}

function prodPeek_touchEnd(){
	prodPeek_isDragging = false;
	cancelAnimationFrame(prodPeek_animationID);
	const prodPeek_movedBy = prodPeek_currentTranslate - prodPeek_prevTranslate;
	
	// for the small image slider, the movedBy values should be smaller like 10.
    if(prodPeek_movedBy < -10 && uniCounter["productPeekShowcase"] < maxCounter){
		uniCounter["productPeekShowcase"] += 1;
	}
	if(prodPeek_movedBy > 10 && uniCounter["productPeekShowcase"] > 0){
		uniCounter["productPeekShowcase"] -= 1;
	}

	prodPeek_setPositionByIndex();

}

function prodPeek_touchMove(event){
	
	if (prodPeek_isDragging){
		const prodPeek_currentPosition = prodPeek_getPositionX(event);
		prodPeek_currentTranslate = prodPeek_prevTranslate + prodPeek_currentPosition - prodPeek_startPos;
		// console.log('moving');
	}
}

// get mouse or touch postionX
function prodPeek_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function prodPeek_animation(){
	prodPeek_setSlidePosition();
	if (prodPeek_isDragging) requestAnimationFrame(prodPeek_animation);
}

function prodPeek_setSlidePosition(){
	prodPeek_slider.style.transform = `translateX(${prodPeek_currentTranslate}px)`;
}

function prodPeek_setPositionByIndex(){
    let prodPeek_size = Math.round(prodPeek_AllSliderImages[0].clientWidth);
	// console.log("prodPeek_AllSliderImages[0] width:" + prodPeek_AllSliderImages[0].clientWidth);
	// console.log("prodPeek_size:" + prodPeek_size);
	prodPeek_currentTranslate = uniCounter["productPeekShowcase"] * (- prodPeek_size);
	prodPeek_prevTranslate = prodPeek_currentTranslate;
	prodPeek_setSlidePosition();
}


let showcaseMainImg = document.querySelector('#prod_wrapper .uni_imgSlider img');

window.addEventListener('resize', function(event){

	uniCounter["productShowcase"] = 0; 
	prod_setPositionByIndex();

	uniCounter["productPeekShowcase"] = 0;
	prodPeek_setPositionByIndex();

	// console.log("prodPeek_AllSliderImages[0] width:" + prodPeek_AllSliderImages[0].clientWidth);

	maxCounter = Math.ceil((prodPeek_wrapper.scrollWidth - prodPeek_wrapper.clientWidth) / prodPeek_AllSliderImages[0].clientWidth);

},true);