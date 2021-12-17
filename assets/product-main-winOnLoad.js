window.onload = function() {
	//console.log('imgHeight:' + mainBannerImg.height);
	mainBannerImg.height = Math.ceil(mainBannerImg.width * 0.5625);
	mainBanner.style.height = mainBannerImg.height +'px';

	if (mainBannerImg.width < 600){
		mainBannerF2.innerHTML = "A small yet wide wheel allows you to get where you want to go safely and easy-to-fold";
	}else if(mainBannerImg.width >= 600 & mainBannerImg.width < 710){
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike...";
	}else{
		mainBannerF2.innerHTML = "Who says fat tire e-bike have to be heavy and bulky? A small yet wide wheel allows you to get where you want to go safely while an easy-to-fold design makes it convenient to take the electric bike - Folding OX with you wherever you go. It truly makes cycling a viable option every day!";
	}
	

	for (let i=0; i<5; i++ ){
		perf_slidImagesImg[i].setAttribute('width', Math.ceil(perf_wrapper.clientWidth / 3 - 10));
		perf_slidImagesImg[i].setAttribute('height', Math.ceil(perf_slidImagesImg[i].width * 0.66666));
	}

	// initialize flexibility block
	if (window.innerWidth < 750){
		colNum = 1;
		felx_max_counter = 4;
		for (let i=0; i<5; i++ ){
			flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
			flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
	}else{
		colNum = 3;
		felx_max_counter = 2;
		for (let i=0; i<5; i++ ){
			flex_slidImagesImg[i].setAttribute('width', Math.ceil(flex_wrapper.clientWidth / colNum) - 10);
			flex_slidImagesImg[i].setAttribute('height', Math.ceil(flex_slidImagesImg[i].width * 0.66666));
			flex_size = Math.round(flex_wrapper.clientWidth / colNum);
		}
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