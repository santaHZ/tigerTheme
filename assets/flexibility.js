const flex_wrapper = document.querySelector('#flex_wrapper');
const docAllSliderImages = document.querySelectorAll('.item ul li img');

//******************/ touch move function - begin *******************//

const flex_slider = document.querySelector('#flex_wrapper').firstElementChild  //this is div with class "uni_imgSlider"
const flex_slides = Array.from(flex_slider.querySelectorAll('.item')); // this is div slides array
const flex_btn = document.querySelector('#flex_ctlBtn1').firstElementChild; // this is the div for dot buttons

// initialize uniCounter
if (uniCounter.hasOwnProperty("flexibility")){
		
}else{
	uniCounter["flexibility"] = 0;
	//console.log(uniCounter);
}

let flex_isDragging = false,
	flex_startPos = 0,
	flex_currentTranslate = 0,
	flex_prevTranslate = 0,
	flex_animationID = 0,
	flex_currentIndex = 0

let flex_currentPosition = 0;


//console.log(flex_slides);

flex_slides.forEach((slide, index) => {
	const flex_slideImage = slide.querySelector('img');
	flex_slideImage.addEventListener('dragstart', (e) => e.preventDefault());

	//Touch events
	flex_slideImage.addEventListener('touchstart', flex_touchStart(index));
	flex_slideImage.addEventListener('touchend', flex_touchEnd);
	flex_slideImage.addEventListener('touchmove', flex_touchMove);

	//Mouse events
	flex_slideImage.addEventListener('mousedown', flex_touchStart(index));
	flex_slideImage.addEventListener('mouseup', flex_touchEnd);
	flex_slideImage.addEventListener('mouseleave', flex_touchEnd);
	flex_slideImage.addEventListener('mousemove', flex_touchMove);

})

//Disable context menu
window.oncontextmenu = function(event){
	event.preventDefault();
	event.stopPropagation();
	return false;
}

function flex_touchStart(index){
	return function(event){
		flex_currentIndex = index;
		
		flex_startPos = flex_getPositionX(event);
		flex_isDragging = true;
		flex_animationID = requestAnimationFrame(flex_animation);
	}
}

function flex_touchEnd(){
	flex_isDragging = false;
	cancelAnimationFrame(flex_animationID);
	const flex_movedBy = flex_currentTranslate - flex_prevTranslate;
	//console.log(uniCounter["flexibility"]);
	if(flex_movedBy < -50 && uniCounter["flexibility"] < (flex_slides.length - touchColNum)){
		uniCounter["flexibility"] += 1;
	}
	if(flex_movedBy > 50 && uniCounter["flexibility"] > 0){
		uniCounter["flexibility"] -= 1;
	}
	flex_setPositionByIndex();
	let btnNodes = flex_btn.children;
	btnNodes.forEach((child, index) =>{
		if (index != uniCounter["flexibility"]){
			child.setAttribute("class","buttonDotEmpty");
		}else{
			child.setAttribute("class","buttonDotSolid");
		}
	})
}

function flex_touchMove(event){

	
	
	if (flex_isDragging){
		flex_currentPosition = flex_getPositionX(event);
		flex_currentTranslate = flex_prevTranslate + flex_currentPosition - flex_startPos;
		
	}
	/* console.log("flex_startPos:" + flex_startPos);
	console.log("flex_currentPosition:" + flex_currentPosition);
	console.log('position after moved:' + flex_currentTranslate); */
}

// get mouse or touch postionX
function flex_getPositionX(event) {
	/* console.log("pageX:" + event.pageX);
	console.log("clientX:" + event.clientX); */
	return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function flex_animation(){
	flex_setSlidePosition(); //after clicked arrow button, then mousedown on image will make image move. a problem.
	/* console.log('1 triggered.');  
	console.log("2 currentTranslate:" + flex_currentTranslate); */
	if (flex_isDragging) requestAnimationFrame(flex_animation);
}

function flex_setSlidePosition(){
	// console.log('setSlidePosition:' + flex_currentTranslate);
	flex_slider.style.transform = `translateX(${flex_currentTranslate}px)`;
}

function flex_setPositionByIndex(){
	let flex_size = Math.round(flex_slider.clientWidth / touchColNum);
	// console.log("touch end size:" + flex_size);
	flex_currentTranslate = uniCounter["flexibility"] * (- flex_size);
	// console.log("touch end currentTranslate:" + flex_currentTranslate);
	flex_prevTranslate = flex_currentTranslate;
	flex_setSlidePosition();
}



 function flex_dotBtnFunReset(){
	let curDotClkObj = document.getElementById("flex_DotBtn-0");

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes = flex_btn.children;

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number

	switch(counterId){
		case "flexibility":
			flex_setPositionByIndex();
	}
}

//************** touch move function - end ****************//



//********** button click function - begin **********//

//Button2 Listeners
let fun_Uni_prevBtn2 = function(btnId){

	let maxCounter = 0;
	let size = 0;
	//get current clicked obj
	let curClkObj = document.getElementById(btnId);
	let uni_imgSlider = curClkObj.parentElement.parentElement.parentElement.querySelector('.uni_imgSlider');
	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.parentElement.id;

	
	if (uniCounter.hasOwnProperty(counterId)){
		//console.log(uniCounter);

	}else{
		uniCounter[counterId] = 0;
	}

	if (uniCounter[counterId] == 0){
		return;
	}else{
		//uni_imgSlider.style.transition = "transform 0.4s ease-in-out";
		uniCounter[counterId] --;
		/* console.log('btn:' + uniCounter[counterId]);
		console.log(counterId); */

		switch(counterId){
			case "flexibility":
				//console.log('flex');
				flex_setPositionByIndex();
			case "performance":
				//console.log('ok');
				perf_setPositionByIndex();
			case "userfriendly":
				userfly_setPositionByIndex();
				
		}

	
		// update dot button bgcolor
		let dotBtnsForArrow = curClkObj.parentElement.parentElement.querySelector('.leftBtns').children;
		dotBtnsForArrow.forEach((child, index) =>{
			if (index != uniCounter[counterId]){
				child.setAttribute("class","buttonDotEmpty");
			}else{
				child.setAttribute("class","buttonDotSolid");
			}
		})
		//console.log(uniCounter[counterId]);
	}
};

let fun_Uni_nextBtn2 = function(btnId){
	let maxCounter = 0;
	let size = 0;
	
	//console.log(btnId);

	//get current clicked obj
	let curClkObj = document.getElementById(btnId);
	let uni_imgSlider = curClkObj.parentElement.parentElement.parentElement.querySelector('.uni_imgSlider');
	let uni_imgSliderImages = Array.from(uni_imgSlider.querySelectorAll('.item ul li img'));

	maxCounter = uni_imgSliderImages.length - colNum;

	let counterId = curClkObj.parentElement.parentElement.parentElement.id;

	if (uniCounter.hasOwnProperty(counterId)){
		
	}else{
		uniCounter[counterId] = 0;
		
	}

	if (uniCounter[counterId] == maxCounter){
		return;
	}else{
		//uni_imgSlider.style.transition = "transform 0.4 ease-in-out";
		uniCounter[counterId] ++;
		/* console.log(uniCounter[counterId]);
		console.log(counterId); */

		switch(counterId){
			case "flexibility":
				//console.log('flex');
				flex_setPositionByIndex();
			case "performance":
				//console.log('ok');
				perf_setPositionByIndex();
			case "userfriendly":
				userfly_setPositionByIndex();
				
		}


		// update dot button bgcolor
		let dotBtnsForArrow = curClkObj.parentElement.parentElement.querySelector('.leftBtns').children;
		dotBtnsForArrow.forEach((child, index) =>{
			if (index != uniCounter[counterId]){
				child.setAttribute("class","buttonDotEmpty");
			}else{
				child.setAttribute("class","buttonDotSolid");
			}
		})

		//console.log(uniCounter[counterId]);

	}

};

//********** button click function - end **********//


//********** function for window resizing - begin **********//
window.addEventListener('resize', function(event) {

	flex_dotBtnFunReset();  //initialize slider position after window resize.

	if (window.innerWidth < 750){
		colNum = 1; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 1;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			
		}

		
		// reset [flexibility] dot button no. after window resizing 
		while(flex_btn.firstElementChild){
			flex_btn.removeChild(flex_btn.firstElementChild);
		}

		for (let i=0; i < (flex_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "flex_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			flex_btn.appendChild(node);
		}


		// reset [performance] dot button no. after window resizing 
		while(perf_btn.firstElementChild){
			perf_btn.removeChild(perf_btn.firstElementChild);
		}

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



		
	}else if(window.innerWidth < 1200 && window.innerWidth >=750){
		colNum = 2; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 2;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			
		}

		// reset [flexibility] dot button no. after window resizing 
		while(flex_btn.firstElementChild){
			flex_btn.removeChild(flex_btn.firstElementChild);
		}

		for (let i=0; i < (flex_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "flex_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			flex_btn.appendChild(node);
		}


		// reset [performance] dot button no. after window resizing 

		/// remove all the dot buttons
		while(perf_btn.firstElementChild){
			perf_btn.removeChild(perf_btn.firstElementChild);
		}

		/// rebuit the dot buttons according to new colNum
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


	}else{
		colNum = 3; //when window size smaller than 750, set all sliders colNum 3
		touchColNum = 3;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			
		}


		// reset [flexibility] dot button no. after window resizing 

		/// remove all the dot buttons
		while(flex_btn.firstElementChild){
			flex_btn.removeChild(flex_btn.firstElementChild);
		}

		/// rebuit the dot buttons according to new colNum
		for (let i=0; i < (flex_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "flex_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			flex_btn.appendChild(node);
		}


		// reset [performance] dot button no. after window resizing 
		while(perf_btn.firstElementChild){
			perf_btn.removeChild(perf_btn.firstElementChild);
		}

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
	}

}, true);

//********** function for window resizing - end ***********//

