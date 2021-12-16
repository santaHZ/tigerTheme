window.onload = function() {
	//console.log('imgHeight:' + mainBannerImg.height);
	mainBanner.style.height = mainBannerImg.height +'px';

	for (let i=0; i<5; i++ ){
		perf_slidImagesImg[i].setAttribute('width', Math.ceil(perf_wrapper.clientWidth / 3 - 10));
		perf_slidImagesImg[i].setAttribute('height', Math.ceil(perf_slidImagesImg[i].width * 0.66666));
	}

	// initialize flexibility block
	for (let i=0; i<5; i++ ){
		flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / 3 - 10));
		flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
	}

	// initialize userfriendly block
	for (let i=0; i<4; i++ ){
		slidImagesImg[i].setAttribute('width', Math.ceil(userfly_wrapper.clientWidth / 3) - 10);
		//console.log(userfly_wrapper.clientWidth);
		slidImagesImg[i].setAttribute('height', Math.ceil(slidImagesImg[i].width * 0.66666));
	}

	// initialize geometry block
	overallImg.setAttribute("width", Math.ceil(this.window.innerWidth / 2.5));
	overallImg.setAttribute("height", Math.ceil(this.window.innerWidth / 2.5));

	foldedImg.setAttribute("width", Math.ceil(this.window.innerWidth / 2.5));
	foldedImg.setAttribute("height", Math.ceil(this.window.innerWidth / 2.5));

	// initialize userfriendly block slid controll button, img change
	prevBtn1Img.setAttribute('src', No1ImgSolid);
	nextBtn1Img.setAttribute('src', No1ImgEmpty);
	prevBtn2Img.setAttribute('src', No2ImgPrev);
	nextBtn2Img.setAttribute('src', No2ImgNext);

	flex_prevBtn1Img.setAttribute('src', No1ImgSolid);
	flex_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	flex_prevBtn2Img.setAttribute('src', No2ImgPrev);
	flex_nextBtn2Img.setAttribute('src', No2ImgNext);

	perf_prevBtn1Img.setAttribute('src', No1ImgSolid);
	perf_nextBtn1Img.setAttribute('src', No1ImgEmpty);
	perf_prevBtn2Img.setAttribute('src', No2ImgPrev);
	perf_nextBtn2Img.setAttribute('src', No2ImgNext);

	/// define right sied buttons no.2
	//// prev arrow
	prevBtn2.onmouseover = function(){
		prevBtn2Img.setAttribute('src', No2ImgPrevEt);
	}
	prevBtn2.onmouseout =function(){
		prevBtn2Img.setAttribute('src', No2ImgPrev);
	}

	//// next arrow
	nextBtn2.onmouseover = function(){
		nextBtn2Img.setAttribute('src', No2ImgNextEt);
	}
	nextBtn2.onmouseout =function(){
		nextBtn2Img.setAttribute('src', No2ImgNext);
	}

	//// prev arrow
	flex_prevBtn2.onmouseover = function(){
		flex_prevBtn2Img.setAttribute('src', No2ImgPrevEt);
	}
	flex_prevBtn2.onmouseout =function(){
		flex_prevBtn2Img.setAttribute('src', No2ImgPrev);
	}

	//// next arrow
	flex_nextBtn2.onmouseover = function(){
		flex_nextBtn2Img.setAttribute('src', No2ImgNextEt);
	}
	flex_nextBtn2.onmouseout =function(){
		flex_nextBtn2Img.setAttribute('src', No2ImgNext);
	}


	//// prev arrow
	perf_prevBtn2.onmouseover = function(){
		perf_prevBtn2Img.setAttribute('src', No2ImgPrevEt);
	}
	perf_prevBtn2.onmouseout =function(){
		perf_prevBtn2Img.setAttribute('src', No2ImgPrev);
	}

	//// next arrow
	perf_nextBtn2.onmouseover = function(){
		perf_nextBtn2Img.setAttribute('src', No2ImgNextEt);
	}
	perf_nextBtn2.onmouseout =function(){
		perf_nextBtn2Img.setAttribute('src', No2ImgNext);
	}



  };