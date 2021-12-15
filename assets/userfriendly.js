const userfly_wrapper = document.querySelector('#userfly_wrapper');
const imgSlide = document.querySelector('#imgSlid');
const slidImages = document.querySelectorAll('#imgSlid .item');

console.log(userfly_wrapper);

let slidImagesImg = document.querySelectorAll('#imgSlid .item ul li img');

//Buttons
const prevBtn1 = document.querySelector('#prevBtn1');
const nextBtn1 = document.querySelector('#nextBtn1');

const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

//Counter
let counter = 0;
//const size = slidImages[0].clientWidth;
let size = Math.round(perf_wrapper.clientWidth / 3);

imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';


//Button1 Listeners
nextBtn1.addEventListener('click', ()=>{
	if (counter == 1){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter ++;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1.style.color = "rgb(66, 64, 64)";
	prevBtn1.style.color = "#ddd";

});

prevBtn1.addEventListener('click', ()=>{
	if (counter == 0){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter --;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1.style.color = "#ddd";
	prevBtn1.style.color = "rgb(66, 64, 64)";

});

//Button2 Listeners
nextBtn2.addEventListener('click', ()=>{
	if (counter == 1){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter ++;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1.style.color = "rgb(66, 64, 64)";
	prevBtn1.style.color = "#ddd";
});

prevBtn2.addEventListener('click', ()=>{
	if (counter == 0){
		return;
	}
	imgSlide.style.transition = "transform 0.4s ease-in-out";
	counter --;
	//console.log(counter);
	//console.log(size);
	size = Math.round(perf_wrapper.clientWidth / 3);
	imgSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	nextBtn1.style.color = "#ddd";
	prevBtn1.style.color = "rgb(66, 64, 64)";
});


window.addEventListener('resize', function(event) {

	for (let i=0; i<4; i++ ){
		slidImagesImg[i].setAttribute('width', Math.ceil(userfly_wrapper.clientWidth / 3) - 10);
		//console.log(userfly_wrapper.clientWidth);
		slidImagesImg[i].setAttribute('height', Math.ceil(slidImagesImg[i].width * 0.66666));
	}
	
}, true);
