const flex_imgSlide = document.querySelector('#flex_imgSlid');
const flex_slidImages = document.querySelectorAll('#flex_imgSlid .item');

//Buttons
const flex_prevBtn1 = document.querySelector('#flex_prevBtn1');
const flex_nextBtn1 = document.querySelector('#flex_nextBtn1');

const flex_prevBtn2 = document.querySelector('#flex_prevBtn2');
const flex_nextBtn2 = document.querySelector('#flex_nextBtn2');

//Counter
let flex_counter = 0;
const flex_size = flex_slidImages[0].clientWidth;

flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';


//Button1 Listeners
flex_nextBtn1.addEventListener('click', ()=>{
	if (flex_counter == 2){
		return;
	}
	flex_imgSlide.style.transition = "transform 0.4s ease-in-out";
	flex_counter ++;
	//console.log(counter);
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
	flex_imgSlide.style.transform = 'translateX(' + (- flex_size * flex_counter ) + 'px)';

	flex_nextBtn1.style.color = "#ddd";
	flex_prevBtn1.style.color = "rgb(66, 64, 64)";
});

