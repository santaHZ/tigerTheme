const userfly_wrapper = document.querySelector('#userfly_wrapper');
const imgSlide = document.querySelector('#imgSlid');
const slidImages = document.querySelectorAll('#imgSlid .item');

console.log(userfly_wrapper);

let slidImagesImg = document.querySelectorAll('#imgSlid .item ul li img');

//Buttons

//define my-circle-l div button
const prevBtn1 = document.querySelector('#ctlBtn1 .my-circle-l');
const prevBtn1Img = prevBtn1.firstElementChild;

//define my-circle-r div button
const nextBtn1 = document.querySelector('#ctlBtn1 .my-circle-r');
const nextBtn1Img = nextBtn1.firstElementChild;

//define the my-left div button
const prevBtn2 = document.querySelector('#ctlBtn2 .my-left');
const prevBtn2Img = prevBtn2.firstElementChild;

//define the myRight div button
const nextBtn2 = document.querySelector('#ctlBtn2 .myRight');
const nextBtn2Img = nextBtn2.firstElementChild;



//Counter
let counter = 0;
//const size = slidImages[0].clientWidth;
let size = Math.round(perf_wrapper.clientWidth / 3);

imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';



// Left side Buttons no.1 Listeners
let fun_prevBtn1 = function(){
	if (counter == 0){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter --;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	prevBtn1Img.setAttribute('src', No1ImgSolid);
	nextBtn1Img.setAttribute('src', No1ImgEmpty);
	//nextBtn1.style.color = "#ddd";
	//prevBtn1.style.color = "rgb(66, 64, 64)";

};

let fun_nextBtn1 = function(){
	if (counter == 1){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter ++;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1Img.setAttribute('src', No1ImgSolid);
	prevBtn1Img.setAttribute('src', No1ImgEmpty);
	//nextBtn1.style.color = "rgb(66, 64, 64)";
	//prevBtn1.style.color = "#ddd";

};



// Right side Buttons no.2 Listeners
let fun_prevBtn2 = function(){
	if (counter == 0){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter --;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	prevBtn1Img.setAttribute('src', No1ImgSolid);
	nextBtn1Img.setAttribute('src', No1ImgEmpty);
	//nextBtn1.style.color = "#ddd";
	//prevBtn1.style.color = "rgb(66, 64, 64)";
};

let fun_nextBtn2 = function(){
	if (counter == 1){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter ++;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1Img.setAttribute('src', No1ImgSolid);
	prevBtn1Img.setAttribute('src', No1ImgEmpty);

	//nextBtn1.style.color = "rgb(66, 64, 64)";
	//prevBtn1.style.color = "#ddd";
};
