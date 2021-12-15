const flex_wrapper = document.querySelector('#flex_wrapper');
const flex_imgSlide = document.querySelector('#flex_imgSlid');
const flex_slidImages = document.querySelectorAll('#flex_imgSlid .item');

let flex_slidImagesImg = document.querySelectorAll('#flex_imgSlid .item ul li img');

//Buttons
const flex_prevBtn1 = document.querySelector('#flex_prevBtn1');
const flex_nextBtn1 = document.querySelector('#flex_nextBtn1');

const flex_prevBtn2 = document.querySelector('#flex_prevBtn2');
const flex_nextBtn2 = document.querySelector('#flex_nextBtn2');

//window.onload = function() {
// 	for (let i=0; i<5; i++ ){
// 		flex_slidImagesImg[i].setAttribute('width', Math.floor(flex_wrapper.clientWidth / 3 - 10));
// 		flex_slidImagesImg[i].setAttribute('height', Math.floor(flex_slidImagesImg[i].width * 0.66666));
// 	}
//};

//Counter
let flex_counter = 0;
//const flex_size = flex_slidImages[0].clientWidth;
let flex_size = Math.round(flex_wrapper.clientWidth / 3);

flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';


//Button1 Listeners
flex_nextBtn1.addEventListener('click', ()=>{
	if (flex_counter == 2){
		return;
	}
	flex_imgSlide.style.transition = "transform 0.4s ease-in-out";
	flex_counter ++;
	//console.log(counter);
	flex_size = Math.round(flex_wrapper.clientWidth / 3);
	//console.log(flex_size);
	flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	flex_nextBtn1.style.color = "rgb(66, 64, 64)";
	flex_prevBtn1.style.color = "#ddd";

});

flex_prevBtn1.addEventListener('click', ()=>{
	if (flex_counter == 0){
		return;
	}
	flex_imgSlide.style.transition = "transform 0.4s ease-in-out";
	flex_counter --;
	//console.log(counter);
	//console.log(flex_size);
	flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	flex_nextBtn1.style.color = "#ddd";
	flex_prevBtn1.style.color = "rgb(66, 64, 64)";

});

//Button2 Listeners
flex_nextBtn2.addEventListener('click', ()=>{
	
	if (flex_counter == 2){
		return;
	}
	flex_imgSlide.style.transition = "transform 0.4s ease-in-out";
	flex_counter ++;
	//console.log(counter);
	//console.log(flex_size);
	//console.log(flex_counter);
	flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	flex_nextBtn1.style.color = "rgb(66, 64, 64)";
	flex_prevBtn1.style.color = "#ddd";
});

flex_prevBtn2.addEventListener('click', ()=>{
	if (flex_counter == 0){
		return;
	}
	flex_imgSlide.style.transition = "transform 0.4s ease-in-out";
	flex_counter --;
	//console.log(counter);
	//console.log(flex_size);
	flex_size = Math.round(flex_wrapper.clientWidth / 3);
	flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	flex_nextBtn1.style.color = "#ddd";
	flex_prevBtn1.style.color = "rgb(66, 64, 64)";
});


window.addEventListener('resize', function(event) {

	for (let i=0; i<5; i++ ){
		flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / 3) - 10);
		flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
	}
	//console.log(flex_slidImagesImg[0].width);
}, true);

