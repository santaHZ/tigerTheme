const perf_wrapper = document.querySelector('#perf_wrapper');
const perf_imgSlide = document.querySelector('#perf_imgSlid');
const perf_slidImages = document.querySelectorAll('#perf_imgSlid .item');

let perf_slidImagesImg = document.querySelectorAll('#perf_imgSlid .item ul li img');

// get objects of mainBanner
let mainBannerImg = document.getElementById("mainBannerImg");
let mainBannerName = document.getElementById("mainBannerName");
let mainBannerF1 = document.getElementById("mainBannerF1");
let mainBannerF2 = document.getElementById("mainBannerF2");
let mainBanner = document.querySelector('.main_banner');

// get object of performance
let performanceMainImg = document.getElementById("performanceMainImg");
let performanceMainDescData = document.getElementById("performanceMainDescData");
let performanceMainDescData_ul = performanceMainDescData.firstElementChild;

// get object of performance data
let gearHub = document.getElementById("gearHub");
let milesPerCharge = document.getElementById("milesPerCharge");
let maxTorque = document.getElementById("maxTorque");
let perdalAssLevel = document.getElementById("perdalAssLevel");


//Buttons
//const perf_prevBtn1 = document.querySelector('#perf_prevBtn1');
const perf_prevBtn1 = document.querySelector('#perf_ctlBtn1 .perf_my-circle-l');
const perf_prevBtn1Img = perf_prevBtn1.firstElementChild;

//const perf_nextBtn1 = document.querySelector('#perf_nextBtn1');
const perf_nextBtn1 = document.querySelector('#perf_ctlBtn1 .perf_my-circle-r');
const perf_nextBtn1Img = perf_nextBtn1.firstElementChild;

//const perf_prevBtn2 = document.querySelector('#perf_prevBtn2');
const perf_prevBtn2 = document.querySelector('#perf_ctlBtn2 .perf_my-left');
const perf_prevBtn2Img = perf_prevBtn2.firstElementChild;

//const perf_nextBtn2 = document.querySelector('#perf_nextBtn2');
const perf_nextBtn2 = document.querySelector('#perf_ctlBtn2 .perf_myRight');
const perf_nextBtn2Img = perf_nextBtn2.firstElementChild;


//Counter
let perf_counter = 0;
//const perf_size = perf_slidImages[0].clientWidth;
//let perf_size = perf_slidImages[0].getAttribute('width'); 
//const perf_size = perf_slidImagesImg[0].width;
let perf_size = Math.round(perf_wrapper.clientWidth / 3);
//console.log(perf_size);

perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

//Button1 Listeners dot button

let fun_perf_prevBtn1 = function(){
	if (perf_counter == 0){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter --;
	//console.log(counter);
	perf_size = Math.round(perf_wrapper.clientWidth / 3);

	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_prevBtn1Img.setAttribute('src', No1ImgSolid);
	perf_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	//perf_nextBtn1.style.color = "#ddd";
	//perf_prevBtn1.style.color = "rgb(66, 64, 64)";
	//console.log(perf_size);

};

let fun_perf_nextBtn1 = function(){
	if (perf_counter == 2){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter ++;
	//console.log(counter);
	//console.log(perf_size);
	perf_size = Math.round(perf_wrapper.clientWidth / 3);
	//console.log(perf_size);

	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1Img.setAttribute('src', No1ImgSolid);
	perf_prevBtn1Img.setAttribute('src', No1ImgEmpty);
	//perf_nextBtn1.style.color = "rgb(66, 64, 64)";
	//perf_prevBtn1.style.color = "#ddd";

};

//Button2 Listeners arrow button
let fun_perf_prevBtn2 = function(){
	if (perf_counter == 0){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter --;

	perf_size = Math.round(perf_wrapper.clientWidth / 3);
	//console.log(perf_size);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_prevBtn1Img.setAttribute('src', No1ImgSolid);
	perf_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	//perf_nextBtn1.style.color = "#ddd";
	//perf_prevBtn1.style.color = "rgb(66, 64, 64)";
};

//Button2 Listeners arrow button
let fun_perf_nextBtn2 = function(){
	
	if (perf_counter == 2){
		return;
	}
	perf_imgSlide.style.transition = "transform 0.4s ease-in-out";
	perf_counter ++;

	perf_size = Math.round(perf_wrapper.clientWidth / 3);
	//console.log(perf_size);
	//console.log(perf_counter);
	perf_imgSlide.style.transform = 'translateX(' + (- perf_size * perf_counter ) + 'px)';

	perf_nextBtn1Img.setAttribute('src', No1ImgSolid);
	perf_prevBtn1Img.setAttribute('src', No1ImgEmpty);
	//perf_nextBtn1.style.color = "rgb(66, 64, 64)";
	//perf_prevBtn1.style.color = "#ddd";
};



let gearhub_no = 0;
let milesPerCharge_no = 0;
let maxTorque_no = 0;
let perdalAssLevel_no = 0;

function addNum1 (){
	if (gearhub_no < 500){
		gearhub_no ++;
		gearHub.innerHTML = gearhub_no + "W";
		setTimeout(addNum1, 5);
	}
}

function addNum2 (){
	if (milesPerCharge_no < 22){
		milesPerCharge_no ++;
		milesPerCharge.innerHTML = milesPerCharge_no + "+";
		setTimeout(addNum2, 15);
	}
}

function addNum3 (){
	if (maxTorque_no < 52){
		maxTorque_no ++;
		maxTorque.innerHTML = maxTorque_no + "Nm";
		setTimeout(addNum3, 25);
	}
}

function addNum4 (){
	if (perdalAssLevel_no < 5){
		perdalAssLevel_no ++;
		perdalAssLevel.innerHTML = perdalAssLevel_no;
		setTimeout(addNum4, 25);
	}
}

function isScrolledIntoView(el) {
	var rect = el.getBoundingClientRect();
	var elemTop = rect.top;
	var elemBottom = rect.bottom;

	// Only completely visible elements return true:
	var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	//isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}

var myScrollFunc = function() {

	//console.log('scrollY : ' + window.scrollY);
	//var y = window.scrollY;

	if (isScrolledIntoView(performanceMainDescData)) {
		setTimeout(addNum1, 5);
		setTimeout(addNum2, 15);
		setTimeout(addNum3, 25);
		setTimeout(addNum4, 25);
	} else {
	}
};

window.addEventListener("scroll", myScrollFunc);

window.addEventListener('resize', function(event) {
	mainBannerImg.height = Math.ceil(mainBannerImg.width * 0.5625);
	mainBanner.style.height = mainBannerImg.height +'px';

	if (mainBannerImg.width < 600){
		mainBannerF2.innerHTML = "A small yet wide wheel allows you to get where you want to go safely and easy-to-fold";
	}else if(mainBannerImg.width >= 600 & mainBannerImg.width < 710){
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike...";
	}else{
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike - Folding OX with you wherever you go. It truly makes cycling a viable option every day!";
	}

	performanceMainImg.height = Math.ceil(performanceMainImg.width * 1);
	performanceMainDescData.style.height = performanceMainImg.width

	for (let i=0; i<5; i++ ){
		perf_slidImagesImg[i].setAttribute('width', Math.ceil(perf_wrapper.clientWidth / 3) - 10);
		perf_slidImagesImg[i].setAttribute('height', Math.ceil(perf_slidImagesImg[i].width * 0.66666));
	}
	//console.log(perf_slidImagesImg[0].width);
}, true);

