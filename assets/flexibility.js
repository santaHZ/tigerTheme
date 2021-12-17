const flex_wrapper = document.querySelector('#flex_wrapper');
const flex_imgSlider = document.querySelector('#flex_imgSlider');
const flex_slidImages = document.querySelectorAll('#flex_imgSlider .item'); // dives with class="item"

let flex_slidImagesImg = document.querySelectorAll('#flex_imgSlider .item ul li img');

//Buttons
//const flex_prevBtn1 = document.querySelector('#flex_prevBtn1');
const flex_prevBtn1 = document.querySelector('#flex_ctlBtn1 .buttonDotSolid');
//const flex_prevBtn1Img = flex_prevBtn1.firstElementChild;

//const flex_nextBtn1 = document.querySelector('#flex_nextBtn1');
const flex_nextBtn1 = document.querySelector('#flex_ctlBtn1 .buttonDotEmpty');
//const flex_nextBtn1Img = flex_nextBtn1.firstElementChild;

//const flex_prevBtn2 = document.querySelector('#flex_prevBtn2');
const flex_prevBtn2 = document.querySelector('#flex_ctlBtn1 .arrow.left');
//const flex_prevBtn2Img = flex_prevBtn2.firstElementChild;

//const flex_nextBtn2 = document.querySelector('#flex_nextBtn2');
const flex_nextBtn2 = document.querySelector('#flex_ctlBtn1 .arrow.right');
//const flex_nextBtn2Img = flex_nextBtn2.firstElementChild;

//window.onload = function() {
// 	for (let i=0; i<5; i++ ){
// 		flex_slidImagesImg[i].setAttribute('width', Math.floor(flex_wrapper.clientWidth / 3 - 10));
// 		flex_slidImagesImg[i].setAttribute('height', Math.floor(flex_slidImagesImg[i].width * 0.66666));
// 	}
//};

//Counter
let flex_counter = 0;

let felx_max_counter = 0;

//const flex_size = flex_slidImages[0].clientWidth;

let flex_size = 0;
let colNum = 3;


flex_size = Math.round(flex_wrapper.clientWidth / colNum);

flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';


//Button1 Listeners
let fun_flex_prevBtn1 = function(){
	if (flex_counter == 0){
		return;
	}
	flex_imgSlider.style.transition = "transform 0.4s ease-in-out";
	flex_counter --;
	//console.log(counter);
	//console.log(flex_size);
	//flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	// flex_prevBtn1Img.setAttribute('src', No1ImgSolid);
	// flex_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	
	flex_prevBtn1.style.background = "black";
	flex_nextBtn1.style.background = "white";

};

let fun_flex_nextBtn1 = function(){
	if (flex_counter == felx_max_counter){
		return;
	}
	flex_imgSlider.style.transition = "transform 0.4s ease-in-out";
	flex_counter ++;
	//console.log(counter);
	//flex_size = Math.round(flex_wrapper.clientWidth / 3);
	//console.log(flex_size);
	flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	// flex_nextBtn1Img.setAttribute('src', No1ImgSolid);
	// flex_prevBtn1Img.setAttribute('src', No1ImgEmpty);
	
	flex_prevBtn1.style.background = "white";
	flex_nextBtn1.style.background = "black";
};



//Button2 Listeners
let fun_flex_prevBtn2 = function(){
	if (flex_counter == 0){
		return;
	}
	flex_imgSlider.style.transition = "transform 0.4s ease-in-out";
	flex_counter --;
	//console.log(counter);
	//console.log(flex_size);
	//flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	// flex_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	// flex_prevBtn1Img.setAttribute('src', No1ImgSolid);
	flex_prevBtn1.style.background = "black";
	flex_nextBtn1.style.background = "white";
};

let fun_flex_nextBtn2 = function(){
	
	if (flex_counter == felx_max_counter){
		return;
	}
	flex_imgSlider.style.transition = "transform 0.4s ease-in-out";
	flex_counter ++;
	//console.log(counter);
	//console.log(flex_size);
	//console.log(flex_counter);
	//flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlider.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	// flex_prevBtn1Img.setAttribute('src', No1ImgEmpty);
	// flex_nextBtn1Img.setAttribute('src', No1ImgSolid);
	flex_prevBtn1.style.background = "white";
	flex_nextBtn1.style.background = "black";
};




window.addEventListener('resize', function(event) {

	if (window.innerWidth < 750){
		colNum = 1;
		felx_max_counter = 4;
		for (let i=0; i<5; i++ ){
			flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
			flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else{
		colNum = 3;
		felx_max_counter = 2;
		for (let i=0; i<5; i++ ){
			flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
			flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}
	//console.log(flex_slidImagesImg[0].width);
}, true);

