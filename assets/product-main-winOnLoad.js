window.onload = function() {

	// initialize flexibility block dot buttons and all slideImg sizes
	if (window.innerWidth < 750){
		colNum = 1; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 1;
		//felx_max_counter = 4;
		for (let i=0; i < (docAllSliderImages.length -0) ; i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else if(window.innerWidth < 1200 && window.innerWidth >=750){
		colNum = 2; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 2;
		//felx_max_counter = 4;
		for (let i=0; i < (docAllSliderImages.length -0) ; i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else{
		colNum = 3; //when window size smaller than 750, set all sliders colNum 3
		touchColNum = 3;
		//felx_max_counter = 2;
		for (let i=0; i < (docAllSliderImages.length -0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			//flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}


	// initiallize [flexibility] dot buttons
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
	//console.log(flex_btn);


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

	// initiallize [userfriendly] dot buttons
	for (let i=0; i < (userfly_slides.length - colNum + 1); i++){
		let node = document.createElement("div");
		node.setAttribute("id", "userfly_DotBtn-" +i);
		if(i== 0){
			node.setAttribute("class", "buttonDotSolid");
		}else{
			node.setAttribute("class", "buttonDotEmpty");
		}
		node.setAttribute("onclick","dotBtnFun(this.id)");
		userfly_btn.appendChild(node);
	}
	//console.log(userfly_btn);

};

//*************universal funcions ***********//

let dotBtnFun = function(dotBtnId){
	let curDotClkObj = document.getElementById(dotBtnId);

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes = curDotClkObj.parentElement.parentElement.firstElementChild.children;

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	//console.log(counterId);

	uniCounter[counterId] = Number(idStringIndex); // make sure use Number() to convert string to number
	//console.log(uniCounter[counterId]);


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

}