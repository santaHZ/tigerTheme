/* window.onload = function() {
};
 */

//*********page initialize at first open - begin - *********//

const docAllSliderImages = document.querySelectorAll('.item ul li img');

if (window.innerWidth < 750){
	colNum = 1; //when window size smaller than 750, set all sliders colNum 1
	touchColNum = 1;
	//felx_max_counter = 4;
	for (let i=0; i < (docAllSliderImages.length -0) ; i++ ){
	  docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
	  // docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
	  docAllSliderImages[i].setAttribute('height', 'auto');
	  //flex_size = Math.round(flex_wrapper.clientWidth / colNum);
	}
  }else if(window.innerWidth < 1200 && window.innerWidth >=750){
	colNum = 2; //when window size smaller than 750, set all sliders colNum 1
	touchColNum = 2;
	//felx_max_counter = 4;
	for (let i=0; i < (docAllSliderImages.length -0) ; i++ ){
	  docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
	  // docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
	  docAllSliderImages[i].setAttribute('height', 'auto');
	  //flex_size = Math.round(flex_wrapper.clientWidth / colNum);
	}
  }else{
	colNum = 3; //when window size smaller than 750, set all sliders colNum 3
	touchColNum = 3;
	//felx_max_counter = 2;
	for (let i=0; i < (docAllSliderImages.length -0); i++ ){
	  docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
	  // docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
	  docAllSliderImages[i].setAttribute('height', 'auto');
	  //flex_size = Math.round(flex_wrapper.clientWidth / colNum);
	}
  }

//*********page initialize at first open - end - *********//


//*************universal funcions ***********//

let dotBtnFun = function(dotBtnId){
	let curDotClkObj = document.getElementById(dotBtnId);

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	//console.log(idString);
	//console.log(idStringIndex);

	let btnNodes =Array.from(curDotClkObj.parentElement.parentElement.firstElementChild.children);

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
		case "seeItInlife":
			seeItInlife_setPositionByIndex();
			
	}

}



//********** function for window resizing - begin **********//
window.addEventListener('resize', function(event) {

	flex_dotBtnFunReset();  //initialize slider position after window resize.
	userfly_dotBtnFunReset();
	perf_dotBtnFunReset();


	if (window.innerWidth < 750){
		colNum = 1; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 1;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			// docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			docAllSliderImages[i].setAttribute('height', 'auto');
			
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

		
		if ( flex_btn.children.length == 1){
			flex_btn.setAttribute('style', 'visibility:hidden;');
			flex_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			flex_btn.setAttribute('style', 'visibility:visible;');
			flex_right_btn.setAttribute('style', 'visibility:visible;');
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


		// reset [seeItInlife] dot button no. after window resizing

		// initiallize [seeItInlife] dot buttons

		while(seeItInlife_btn.firstElementChild){
			seeItInlife_btn.removeChild(seeItInlife_btn.firstElementChild);
		}

		for (let i=0; i < (seeItInlife_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "seeItInlife_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			seeItInlife_btn.appendChild(node);

		}


		if ( seeItInlife_btn.children.length == 1){
			seeItInlife_btn.setAttribute('style', 'visibility:hidden;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			seeItInlife_btn.setAttribute('style', 'visibility:visible;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:visible;');
		}



		
	}else if(window.innerWidth < 1200 && window.innerWidth >=750){
		colNum = 2; //when window size smaller than 750, set all sliders colNum 1
		touchColNum = 2;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			// docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			docAllSliderImages[i].setAttribute('height', 'auto');
			
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


		if ( flex_btn.children.length == 1){
			flex_btn.setAttribute('style', 'visibility:hidden;');
			flex_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			flex_btn.setAttribute('style', 'visibility:visible;');
			flex_right_btn.setAttribute('style', 'visibility:visible;');
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


		// reset [seeItInlife] dot button no. after window resizing

		// initiallize [seeItInlife] dot buttons

		while(seeItInlife_btn.firstElementChild){
			seeItInlife_btn.removeChild(seeItInlife_btn.firstElementChild);
		}


		for (let i=0; i < (seeItInlife_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "seeItInlife_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			seeItInlife_btn.appendChild(node);

		}

		if ( seeItInlife_btn.children.length == 1){
			seeItInlife_btn.setAttribute('style', 'visibility:hidden;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			seeItInlife_btn.setAttribute('style', 'visibility:visible;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:visible;');
		}




	}else{
		colNum = 3; //when window size smaller than 750, set all sliders colNum 3
		touchColNum = 3;
		
		for (let i=0; i < (docAllSliderImages.length - 0); i++ ){
			docAllSliderImages[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			// docAllSliderImages[i].setAttribute('height', Math.ceil(docAllSliderImages[i].width * 0.66666));
			docAllSliderImages[i].setAttribute('height', 'auto');
			
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

		if ( flex_btn.children.length == 1){
			flex_btn.setAttribute('style', 'visibility:hidden;');
			flex_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			flex_btn.setAttribute('style', 'visibility:visible;');
			flex_right_btn.setAttribute('style', 'visibility:visible;');
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





		// reset [seeItInlife] dot button no. after window resizing

		// initiallize [seeItInlife] dot buttons

		while(seeItInlife_btn.firstElementChild){
			seeItInlife_btn.removeChild(seeItInlife_btn.firstElementChild);
		}


		for (let i=0; i < (seeItInlife_slides.length - colNum + 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "seeItInlife_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			seeItInlife_btn.appendChild(node);

		}

		if ( seeItInlife_btn.children.length == 1){
			seeItInlife_btn.setAttribute('style', 'visibility:hidden;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			seeItInlife_btn.setAttribute('style', 'visibility:visible;');
			seeItInlife_right_btn.setAttribute('style', 'visibility:visible;');
		}


	}

}, true);

//********** function for window resizing - end ***********//