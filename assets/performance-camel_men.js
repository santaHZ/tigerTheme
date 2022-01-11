function wpas1_toggle(){
    var trailer1 = document.querySelector(".trailer1");
    trailer1.classList.toggle("active");
}

function wpas2_toggle(){
    var trailer2 = document.querySelector(".trailer2");
    trailer2.classList.toggle("active");
}


var wpas_content1Btn = document.querySelector('.wpas_content1Btn');
wpas_content1Btn.addEventListener('mouseover', function(){
	wpas_content1Btn.classList.remove('zoomImgOut');
	wpas_content1Btn.classList.add('zoomImgIn');
	// console.log('mouse over');
	setTimeout(() => {
		// console.log('mouse out');
		wpas_content1Btn.classList.remove('zoomImgIn');
		wpas_content1Btn.classList.add('zoomImgOut');
	}, 300);
})

var wpas_content2Btn = document.querySelector('.wpas_content2Btn');
wpas_content2Btn.addEventListener('mouseover', function(){
	wpas_content2Btn.classList.remove('zoomImgOut');
	wpas_content2Btn.classList.add('zoomImgIn');
	// console.log('mouse over');
	setTimeout(() => {
		// console.log('mouse out');
		wpas_content2Btn.classList.remove('zoomImgIn');
		wpas_content2Btn.classList.add('zoomImgOut');
	}, 300);
})


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


const perf_wrapper = document.querySelector('#perf_wrapper');

//******************/ touch move function - begin *******************//

const perf_slider = document.querySelector('#perf_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const perf_slides = Array.from(perf_slider.querySelectorAll('.item')); // this is div slides array
const perf_btn = document.querySelector('#perf_ctlBtn1').firstElementChild; // this is the div for dot buttons

// initiallize [performance] dot buttons
for (let i=0; i < (perf_slides.length - colNum + 1); i++){
	let node = document.createElement("div");
	node.setAttribute("id", "perf_DotBtn-" +i);
	if(i== 0){
		node.setAttribute("class", "buttonDotSolid");
	}else{
		node.setAttribute("class", "buttonDotEmpty");
	}
	node.setAttribute("onclick","dotBtnFun(this.id)");
	perf_btn.appendChild(node);
}
//console.log(perf_btn);


// initialize uniCounter
if (uniCounter.hasOwnProperty("performance")){
		
}else{
	uniCounter["performance"] = 0;
	//console.log(uniCounter);
}

let perf_isDragging = false,
	perf_startPos = 0,
	perf_currentTranslate = 0,
	perf_prevTranslate = 0,
	perf_animationID = 0,
	perf_currentIndex = 0



//console.log(perf_slides);

perf_slides.forEach((slide, index) => {
	const perf_slideImage = slide.querySelector('img');
	perf_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	perf_slideImage.addEventListener('touchstart', perf_touchStart(index));
	perf_slideImage.addEventListener('touchend', perf_touchEnd);
	perf_slideImage.addEventListener('touchmove', perf_touchMove);

	//Mouse events
	perf_slideImage.addEventListener('mousedown', perf_touchStart(index));
	perf_slideImage.addEventListener('mouseup', perf_touchEnd);
	perf_slideImage.addEventListener('mouseleave', perf_touchEnd);
	perf_slideImage.addEventListener('mousemove', perf_touchMove);

})

function perf_touchStart(index){
	return function(event){
		perf_currentIndex = index;
		perf_startPos = perf_getPositionX(event);
		perf_isDragging = true;
		perf_animationID = requestAnimationFrame(perf_animation);
	}
}

function perf_touchEnd(){
	perf_isDragging = false;
	cancelAnimationFrame(perf_animationID);
	const perf_movedBy = perf_currentTranslate - perf_prevTranslate;
	//console.log(uniCounter["performance"]);
	if(perf_movedBy < -50 && uniCounter["performance"] < (perf_slides.length - touchColNum)){
		uniCounter["performance"] += 1;
	}
	if(perf_movedBy > 50 && uniCounter["performance"] > 0){
		uniCounter["performance"] -= 1;
	}
	perf_setPositionByIndex();

	let btnNodes =Array.from(perf_btn.children);

	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["performance"]){
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})


}

function perf_touchMove(event){
	if (perf_isDragging){
		const perf_currentPosition = perf_getPositionX(event);
		perf_currentTranslate = perf_prevTranslate + perf_currentPosition - perf_startPos;
	}
}

// get mouse or touch postionX
function perf_getPositionX(event) {
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function perf_animation(){
	perf_setSlidePosition();
	if (perf_isDragging) requestAnimationFrame(perf_animation);
}

function perf_setSlidePosition(){
	perf_slider.style.transform = `translateX(${perf_currentTranslate}px)`;
}

function perf_setPositionByIndex(){
	let perf_size = Math.round(perf_slider.clientWidth / touchColNum)
	perf_currentTranslate = uniCounter["performance"] * (- perf_size);
	perf_prevTranslate = perf_currentTranslate;
	perf_setSlidePosition();
}


function perf_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("perf_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes =Array.from(perf_btn.children);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number

	switch(counterId){
		case "performance":
			perf_setPositionByIndex();
	}
}

//************** touch move function - end ****************//


//*****************digit animation function - start ***************//
let gearhub_no = 0;
let milesPerCharge_no = 0;
let maxTorque_no = 0;
let perdalAssLevel_no = 0;

function addNum1 (){
	if (gearhub_no < 500){
		gearhub_no ++;
		gearHub.innerHTML = gearhub_no + "W";
		setTimeout(addNum1, 5);  // set interval size
	}
}
function addNum2 (){
	if (milesPerCharge_no < 22){
		milesPerCharge_no ++;
		milesPerCharge.innerHTML = milesPerCharge_no + "+";
		setTimeout(addNum2, 100);  // set interval size
	}
}
function addNum3 (){
	if (maxTorque_no < 35){
		maxTorque_no ++;
		maxTorque.innerHTML = maxTorque_no + "Nm";
		setTimeout(addNum3, 50);  // set interval size
	}
}
function addNum4 (){
	if (perdalAssLevel_no < 1){
		perdalAssLevel_no ++;
		perdalAssLevel.innerHTML = perdalAssLevel_no;
		setTimeout(addNum4, 300);  // set interval size
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

	if (isScrolledIntoView(performanceMainDescData)) {
		setTimeout(addNum1, 5);
		setTimeout(addNum2, 100);
		setTimeout(addNum3, 50);
		setTimeout(addNum4, 300);
	} else {
	}
};

window.addEventListener("scroll", myScrollFunc);

//*****************digit animation function - end ***************//

window.addEventListener('resize', function(event) {

	perf_dotBtnFunReset();

	//mainBannerImg.height = Math.ceil(mainBannerImg.width * 0.5625);
	//mainBanner.style.height = mainBannerImg.height +'px';

	/* if (mainBannerImg.width < 600){
		mainBannerF2.innerHTML = "A small yet wide wheel allows you to get where you want to go safely and easy-to-fold";
	}else if(mainBannerImg.width >= 600 & mainBannerImg.width < 710){
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike...";
	}else{
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike - Folding OX with you wherever you go. It truly makes cycling a viable option every day!";
	} */

	//performanceMainImg.height = Math.ceil(performanceMainImg.width * 1);
	//performanceMainDescData.style.height = performanceMainImg.width


}, true);

