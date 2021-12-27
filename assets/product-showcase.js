




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
	console.log(uniCounter);
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
		console.log('moving');
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
	console.log("prodPeek_AllSliderImages[0] width:" + prodPeek_AllSliderImages[0].clientWidth);
	console.log("prodPeek_size:" + prodPeek_size);
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

	console.log("prodPeek_AllSliderImages[0] width:" + prodPeek_AllSliderImages[0].clientWidth);

	maxCounter = Math.ceil((prodPeek_wrapper.scrollWidth - prodPeek_wrapper.clientWidth) / prodPeek_AllSliderImages[0].clientWidth);

},true);