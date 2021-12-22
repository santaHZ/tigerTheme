let productShowcaseColNum = 1;
const prod_wrapper = document.querySelector('#prod_wrapper');

//******************/ touch move function - begin *******************//

const prod_slider = document.querySelector('#prod_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const prod_slides = Array.from(prod_slider.querySelectorAll('.item')); // this is div slides array

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

})

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
	let prod_size = Math.round(prod_slider.clientWidth / productShowcaseColNum)
	prod_currentTranslate = uniCounter["productShowcase"] * (- prod_size);
	prod_prevTranslate = prod_currentTranslate;
	prod_setSlidePosition();
}





//*********************design for small product showcase -begin ********************//
let productPeekShowcaseColNum = 9;
const prodPeek_wrapper = document.querySelector('#prodPeek_wrapper');
const prodPeek_AllSliderImages = document.querySelectorAll('#prodPeek_wrapper .uni_imgSlider .item ul li img');
//console.log(prodPeek_AllSliderImages);

//******************/ touch move function - begin *******************//

const prodPeek_wrapperslider = document.querySelector('#prodPeek_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const prodPeek_wrapperslides = Array.from(prodPeek_wrapperslider.querySelectorAll('.item')); // this is div slides array

// calculate maxCounter
let maxCounter = Math.ceil((prodPeek_wrapper.scrollWidth - prodPeek_wrapper.clientWidth) / prodPeek_AllSliderImages[0].clientWidth);


// initialize uniCounter
if (uniCounter.hasOwnProperty("productPeekShowcase")){
		
}else{
	uniCounter["productPeekShowcase"] = 0;
	//console.log(uniCounter);
}

let prodPeek_wrapperisDragging = false,
	prodPeek_wrapperstartPos = 0,
	prodPeek_wrappercurrentTranslate = 0,
	prodPeek_wrapperprevTranslate = 0,
	prodPeek_wrapperanimationID = 0,
	prodPeek_wrappercurrentIndex = 0

//console.log(prodPeek_wrapperslides);

prodPeek_wrapperslides.forEach((slide, index) => {
	const prodPeek_wrapperslideImage = slide.querySelector('img');
	prodPeek_wrapperslideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	prodPeek_wrapperslideImage.addEventListener('touchstart', prodPeek_wrappertouchStart(index));
	prodPeek_wrapperslideImage.addEventListener('touchend', prodPeek_wrappertouchEnd);
	prodPeek_wrapperslideImage.addEventListener('touchmove', prodPeek_wrappertouchMove);

	//Mouse events
	prodPeek_wrapperslideImage.addEventListener('mousedown', prodPeek_wrappertouchStart(index));
	prodPeek_wrapperslideImage.addEventListener('mouseup', prodPeek_wrappertouchEnd);
	prodPeek_wrapperslideImage.addEventListener('mouseleave', prodPeek_wrappertouchEnd);
	prodPeek_wrapperslideImage.addEventListener('mousemove', prodPeek_wrappertouchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function prodPeek_wrappertouchStart(index){
	return function(event){
		prodPeek_wrappercurrentIndex = index;
		prodPeek_wrapperstartPos = prodPeek_wrappergetPositionX(event);
		prodPeek_wrapperisDragging = true;
		prodPeek_wrapperanimationID = requestAnimationFrame(prodPeek_wrapperanimation);

        //set productShowcase position
        uniCounter["productShowcase"] = Number(index) + 1; // here must use Number() to convert string to number
        prod_setPositionByIndex();
        //console.log("productShowcase counter:" + uniCounter["productShowcase"]);

        
	}
}

function prodPeek_wrappertouchEnd(){
	prodPeek_wrapperisDragging = false;
	cancelAnimationFrame(prodPeek_wrapperanimationID);
	const prodPeek_wrappermovedBy = prodPeek_wrappercurrentTranslate - prodPeek_wrapperprevTranslate;
	//console.log("productPeekShowcase counter:" + uniCounter["productPeekShowcase"]);
    

    //console.log("maxCounter:" + maxCounter);
	//if(prodPeek_wrappermovedBy < -10 && uniCounter["productPeekShowcase"] < (prodPeek_wrapperslides.length - productPeekShowcaseColNum)){
    if(prodPeek_wrappermovedBy < -10 && uniCounter["productPeekShowcase"] < maxCounter){
		uniCounter["productPeekShowcase"] += 1;
	}
	if(prodPeek_wrappermovedBy > 10 && uniCounter["productPeekShowcase"] > 0){
		uniCounter["productPeekShowcase"] -= 1;
	}
	prodPeek_wrappersetPositionByIndex();



}

function prodPeek_wrappertouchMove(event){
	if (prodPeek_wrapperisDragging){
		const prodPeek_wrappercurrentPosition = prodPeek_wrappergetPositionX(event);
		prodPeek_wrappercurrentTranslate = prodPeek_wrapperprevTranslate + prodPeek_wrappercurrentPosition - prodPeek_wrapperstartPos;
	}
}

// get mouse or touch postionX
function prodPeek_wrappergetPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function prodPeek_wrapperanimation(){
	prodPeek_wrappersetSlidePosition();
	if (prodPeek_wrapperisDragging) requestAnimationFrame(prodPeek_wrapperanimation);
}

function prodPeek_wrappersetSlidePosition(){
	prodPeek_wrapperslider.style.transform = `translateX(${prodPeek_wrappercurrentTranslate}px)`;
}

function prodPeek_wrappersetPositionByIndex(){
	//let prodPeek_wrappersize = Math.round(prodPeek_wrapperslider.clientWidth / productPeekShowcaseColNum);
    let prodPeek_wrappersize = Math.round(prodPeek_AllSliderImages[0].clientWidth);
    //console.log(prodPeek_AllSliderImages[0].clientWidth);
    
	prodPeek_wrappercurrentTranslate = uniCounter["productPeekShowcase"] * (- prodPeek_wrappersize);
	prodPeek_wrapperprevTranslate = prodPeek_wrappercurrentTranslate;
	prodPeek_wrappersetSlidePosition();
}
















let showcaseMainImg = document.querySelector('#prod_wrapper .uni_imgSlider img');

window.addEventListener('resize', function(event){
    //showcaseMainImg.setAttribute('width', Math.ceil(window.innerWidth * 0.5));
    //showcaseMainImg.setAttribute('height', Math.ceil(showcaseMainImg.width * 1));

    if (window.innerWidth < 1360){
        productPeekShowcaseColNum = 6;
        for (let i=0; i < (prodPeek_AllSliderImages.length - 0); i++ ){
            prodPeek_AllSliderImages[i].setAttribute('width', Math.ceil(prodPeek_wrapper.clientWidth / productPeekShowcaseColNum));
            prodPeek_AllSliderImages[i].setAttribute('height', Math.ceil(prodPeek_AllSliderImages[i].width / 1.5));
            
        }

    }else if(window.innerWidth < 990){
        productPeekShowcaseColNum = 3;
        for (let i=0; i < (prodPeek_AllSliderImages.length - 0); i++ ){
            prodPeek_AllSliderImages[i].setAttribute('width', Math.ceil(prodPeek_wrapper.clientWidth / productPeekShowcaseColNum));
            prodPeek_AllSliderImages[i].setAttribute('height', Math.ceil(prodPeek_AllSliderImages[i].width / 1.5));
            
        }
    }


},true);