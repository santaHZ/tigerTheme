//Showcase Listeners

const showcase_wrapper = document.querySelector('#flex_wrapper');
const showcase_imgSlide = document.querySelector('#flex_imgSlid');
const showcase_slidImages = document.querySelectorAll('#flex_imgSlid .item');

let showcase_slidImagesImg = document.querySelectorAll('#flex_imgSlid .item ul li img');

//Buttons
//const flex_prevBtn1 = document.querySelector('#flex_prevBtn1');
const showcase_prevBtn1 = document.querySelector('#flex_ctlBtn1 .flex_my-circle-l');
const showcase_prevBtn1Img = showcase_prevBtn1.firstElementChild;

//const flex_nextBtn1 = document.querySelector('#flex_nextBtn1');
const showcase_nextBtn1 = document.querySelector('#flex_ctlBtn1 .flex_my-circle-r');
const showcase_nextBtn1Img = showcase_nextBtn1.firstElementChild;

//Counter
let showcase_counter = 0;
//const flex_size = flex_slidImages[0].clientWidth;
let showcase_size = Math.round(showcase_wrapper.clientWidth / 3);

showcase_imgSlide.style.transform = 'translateX(' + (- showcase_size * showcase_counter ) + 'px)';



let fun_showcase_prevBtn1 = function(){
	if (showcase_counter == 0){
		return;
	}
	showcase_imgSlide.style.transition = "transform 0.4s ease-in-out";
	showcase_counter --;
	//console.log(counter);
	//console.log(flex_size);
	showcase_size = Math.round(showcase_wrapper.clientWidth / 3);
	showcase_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	showcase_prevBtn1Img.setAttribute('src', No1ImgSolid);
	showcase_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	//flex_nextBtn1.style.color = "#ddd";
	//flex_prevBtn1.style.color = "rgb(66, 64, 64)";

};

let fun_showcase_nextBtn1 = function(){
	if (showcase_counter == 2){
		return;
	}
	showcase_imgSlide.style.transition = "transform 0.4s ease-in-out";
	showcase_counter ++;
	//console.log(counter);
	showcase_size = Math.round(showcase_wrapper.clientWidth / 3);
	//console.log(flex_size);
	showcase_imgSlide.style.transform = 'translateX(' + (- showcase_size * showcase_counter ) + 'px)';

	showcase_nextBtn1Img.setAttribute('src', No1ImgSolid);
	showcase_prevBtn1Img.setAttribute('src', No1ImgEmpty);
	//flex_nextBtn1.style.color = "rgb(66, 64, 64)";
	//flex_prevBtn1.style.color = "#ddd";
};