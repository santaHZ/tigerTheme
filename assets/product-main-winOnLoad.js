window.onload = function() {


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



//********** function for window resizing - begin **********//
window.addEventListener('resize', function(event) {

	flex_dotBtnFunReset();  //initialize slider position after window resize.
	userfly_dotBtnFunReset()
	perf_dotBtnFunReset()

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


		// reset [user friendly] dot button no. after window resizing 
		while(userfly_btn.firstElementChild){
			userfly_btn.removeChild(userfly_btn.firstElementChild);
		}

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


		// reset [user friendly] dot button no. after window resizing 
		while(userfly_btn.firstElementChild){
			userfly_btn.removeChild(userfly_btn.firstElementChild);
		}

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


		// reset [user friendly] dot button no. after window resizing 
		while(userfly_btn.firstElementChild){
			userfly_btn.removeChild(userfly_btn.firstElementChild);
		}

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

	}

}, true);

//********** function for window resizing - end ***********//