/****** page first load initialize  - begin - ********/
for (let i=0; i < (userStory_slidesLi.length - 0); i++ ){
    // console.log('colNum:' + colNum);
    // console.log('wrapperWidth:' + userStory_sliderWrapper.clientWidth);
    let userStory_slideWidth = Math.ceil(userStory_sliderWrapper.clientWidth / colNum);
    // console.log(userStory_slideWidth);
    userStory_slidesLi[i].setAttribute('style', `width:${userStory_slideWidth}px;`);
    
}


for (let i=0; i < (userStory_One_slidesLi.length - 0); i++ ){
    // console.log('colNum:' + colNum);
    // console.log('wrapperWidth:' + userStory_One_sliderWrapper.clientWidth);
    let userStory_One_slideWidth = Math.ceil(userStory_One_sliderWrapper.clientWidth / colNum);
    // console.log(userStory_One_slideWidth);
    userStory_One_slidesLi[i].setAttribute('style', `width:${userStory_One_slideWidth}px;`);

}

for (let i=0; i < (userStory_Two_slidesLi.length - 0); i++ ){
    // console.log('colNum:' + colNum);
    // console.log('wrapperWidth:' + userStory_Two_sliderWrapper.clientWidth);
    let userStory_Two_slideWidth = Math.ceil(userStory_Two_sliderWrapper.clientWidth / colNum);
    // console.log(userStory_Two_slideWidth);
    userStory_Two_slidesLi[i].setAttribute('style', `width:${userStory_Two_slideWidth}px;`);
}

if (window.innerWidth < 750){
    colNum = 1;

    // reset [userStory] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_btn.firstElementChild){
        userStory_btn.removeChild(userStory_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_btn.appendChild(node);
    }

    if ( userStory_btn.children.length == 1){
        userStory_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_btn.setAttribute('style', 'visibility:visible;');
    }



    // reset [userStory_One] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_One_btn.firstElementChild){
        userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_One_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_One_btn.appendChild(node);
    }

    if ( userStory_One_btn.children.length == 1){
        userStory_One_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_One_btn.setAttribute('style', 'visibility:visible;');
    }

    // reset [userStory_Two] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_Two_btn.firstElementChild){
        userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_Two_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_Two_btn.appendChild(node);
    }

    if ( userStory_Two_btn.children.length == 1){
        userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_Two_btn.setAttribute('style', 'visibility:visible;');
    }        




}else if(window.innerWidth < 1200 && window.innerWidth >=750){
    colNum = 2;

    // reset [userStory] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_btn.firstElementChild){
        userStory_btn.removeChild(userStory_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_btn.appendChild(node);
    }

    if ( userStory_btn.children.length == 1){
        userStory_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_btn.setAttribute('style', 'visibility:visible;');
    }


    // reset [userStory_One] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_One_btn.firstElementChild){
        userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_One_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_One_btn.appendChild(node);
    }

    if ( userStory_One_btn.children.length == 1){
        userStory_One_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_One_btn.setAttribute('style', 'visibility:visible;');
    }



    // reset [userStory_Two] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_Two_btn.firstElementChild){
        userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_Two_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_Two_btn.appendChild(node);
    }

    if ( userStory_Two_btn.children.length == 1){
        userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_Two_btn.setAttribute('style', 'visibility:visible;');
    }



}else{
    colNum = 3;

    // reset [userStory] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_btn.firstElementChild){
        userStory_btn.removeChild(userStory_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_btn.appendChild(node);
    }

    if ( userStory_btn.children.length == 1){
        userStory_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_btn.setAttribute('style', 'visibility:visible;');
    }


    // reset [userStory_One] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_One_btn.firstElementChild){
        userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_One_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_One_btn.appendChild(node);
    }

    if ( userStory_One_btn.children.length == 1){
        userStory_One_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_One_btn.setAttribute('style', 'visibility:visible;');
    }



    // reset [userStory_Two] dot button no. after window resizing 

    /// remove all the dot buttons
    while(userStory_Two_btn.firstElementChild){
        userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
    }

    /// rebuit the dot buttons according to new colNum
    for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
        let node = document.createElement("div");
        node.setAttribute("id", "userStory_Two_DotBtn-" +i);
        if(i== 0){
            node.setAttribute("class", "buttonDotSolid");
        }else{
            node.setAttribute("class", "buttonDotEmpty");
        }
        node.setAttribute("onclick","dotBtnFun(this.id)");
        userStory_Two_btn.appendChild(node);
    }

    if ( userStory_Two_btn.children.length == 1){
        userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
    }else{
        userStory_Two_btn.setAttribute('style', 'visibility:visible;');
    }
}



/****** page first load initialize  - end - ********/

let dotBtnFun = function(dotBtnId){
	let curDotClkObj = document.getElementById(dotBtnId);

	curDotClkObj.setAttribute("class","buttonDotSolid");
	let idString = curDotClkObj.getAttribute("id");
	let idStringIndex = idString.charAt(idString.length-1);
	// console.log(idString);
	// console.log(idStringIndex);

	let btnNodes = Array.from(curDotClkObj.parentElement.parentElement.firstElementChild.children);

	btnNodes.forEach((child, index) =>{
		if (index != idStringIndex){
			child.setAttribute("class","buttonDotEmpty");
		}
	})

	let counterId = curDotClkObj.parentElement.parentElement.parentElement.id;

	// console.log(counterId);

	uniCounter[counterId] = Number(idStringIndex) + 2; // make sure use Number() to convert string to number; +1 because there is a prepend cloneNode.
	//console.log(uniCounter[counterId]);

	switch(counterId){
        case "userStory":
            userStory_setPositionByIndex();
		case "userStory_One":
			userStory_One_setPositionByIndex();
		case "userStory_Two":
			userStory_Two_setPositionByIndex();
			
	}

}


//********** function for window resizing - begin **********//
window.addEventListener('resize', function(event){
    userStory_dotBtnFunReset();
    userStory_One_dotBtnFunReset();
    userStory_Two_dotBtnFunReset();

	for (let i=0; i < (userStory_slidesLi.length - 0); i++ ){
		// console.log('colNum:' + colNum);
		// console.log('wrapperWidth:' + userStory_sliderWrapper.clientWidth);
		let userStory_slideWidth = Math.ceil(userStory_sliderWrapper.clientWidth / colNum);
		// console.log(userStory_slideWidth);
		userStory_slidesLi[i].setAttribute('style', `width:${userStory_slideWidth}px;`);
		
	}


    for (let i=0; i < (userStory_One_slidesLi.length - 0); i++ ){
        // console.log('colNum:' + colNum);
        // console.log('wrapperWidth:' + userStory_One_sliderWrapper.clientWidth);
        let userStory_One_slideWidth = Math.ceil(userStory_One_sliderWrapper.clientWidth / colNum);
        // console.log(userStory_One_slideWidth);
        userStory_One_slidesLi[i].setAttribute('style', `width:${userStory_One_slideWidth}px;`);
    
    }

    for (let i=0; i < (userStory_Two_slidesLi.length - 0); i++ ){
        // console.log('colNum:' + colNum);
        // console.log('wrapperWidth:' + userStory_Two_sliderWrapper.clientWidth);
        let userStory_Two_slideWidth = Math.ceil(userStory_Two_sliderWrapper.clientWidth / colNum);
        // console.log(userStory_Two_slideWidth);
        userStory_Two_slidesLi[i].setAttribute('style', `width:${userStory_Two_slideWidth}px;`);
    }


	if (window.innerWidth < 750){
		colNum = 1;

		// reset [userStory] dot button no. after window resizing 

		/// remove all the dot buttons
		while(userStory_btn.firstElementChild){
			userStory_btn.removeChild(userStory_btn.firstElementChild);
		}

		/// rebuit the dot buttons according to new colNum
		for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "userStory_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			userStory_btn.appendChild(node);
		}

		if ( userStory_btn.children.length == 1){
			userStory_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			userStory_btn.setAttribute('style', 'visibility:visible;');
		}



        // reset [userStory_One] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_One_btn.firstElementChild){
            userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_One_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_One_btn.appendChild(node);
        }

        if ( userStory_One_btn.children.length == 1){
            userStory_One_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_One_btn.setAttribute('style', 'visibility:visible;');
        }

        // reset [userStory_Two] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_Two_btn.firstElementChild){
            userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_Two_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_Two_btn.appendChild(node);
        }

        if ( userStory_Two_btn.children.length == 1){
            userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_Two_btn.setAttribute('style', 'visibility:visible;');
        }        




	}else if(window.innerWidth < 1200 && window.innerWidth >=750){
		colNum = 2;

		// reset [userStory] dot button no. after window resizing 

		/// remove all the dot buttons
		while(userStory_btn.firstElementChild){
			userStory_btn.removeChild(userStory_btn.firstElementChild);
		}

		/// rebuit the dot buttons according to new colNum
		for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "userStory_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			userStory_btn.appendChild(node);
		}

		if ( userStory_btn.children.length == 1){
			userStory_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			userStory_btn.setAttribute('style', 'visibility:visible;');
		}


        // reset [userStory_One] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_One_btn.firstElementChild){
            userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_One_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_One_btn.appendChild(node);
        }

        if ( userStory_One_btn.children.length == 1){
            userStory_One_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_One_btn.setAttribute('style', 'visibility:visible;');
        }



        // reset [userStory_Two] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_Two_btn.firstElementChild){
            userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_Two_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_Two_btn.appendChild(node);
        }

        if ( userStory_Two_btn.children.length == 1){
            userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_Two_btn.setAttribute('style', 'visibility:visible;');
        }



	}else{
		colNum = 3;

		// reset [userStory] dot button no. after window resizing 

		/// remove all the dot buttons
		while(userStory_btn.firstElementChild){
			userStory_btn.removeChild(userStory_btn.firstElementChild);
		}

		/// rebuit the dot buttons according to new colNum
		for (let i=0; i < (userStory_slides.length - 3 - 1); i++){
			let node = document.createElement("div");
			node.setAttribute("id", "userStory_DotBtn-" +i);
			if(i== 0){
				node.setAttribute("class", "buttonDotSolid");
			}else{
				node.setAttribute("class", "buttonDotEmpty");
			}
			node.setAttribute("onclick","dotBtnFun(this.id)");
			userStory_btn.appendChild(node);
		}

		if ( userStory_btn.children.length == 1){
			userStory_btn.setAttribute('style', 'visibility:hidden;');
		}else{
			userStory_btn.setAttribute('style', 'visibility:visible;');
		}


		// reset [userStory_One] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_One_btn.firstElementChild){
            userStory_One_btn.removeChild(userStory_One_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_One_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_One_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_One_btn.appendChild(node);
        }

        if ( userStory_One_btn.children.length == 1){
            userStory_One_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_One_btn.setAttribute('style', 'visibility:visible;');
        }



        // reset [userStory_Two] dot button no. after window resizing 

        /// remove all the dot buttons
        while(userStory_Two_btn.firstElementChild){
            userStory_Two_btn.removeChild(userStory_Two_btn.firstElementChild);
        }

        /// rebuit the dot buttons according to new colNum
        for (let i=0; i < (userStory_Two_slides.length - 3 - 1); i++){
            let node = document.createElement("div");
            node.setAttribute("id", "userStory_Two_DotBtn-" +i);
            if(i== 0){
                node.setAttribute("class", "buttonDotSolid");
            }else{
                node.setAttribute("class", "buttonDotEmpty");
            }
            node.setAttribute("onclick","dotBtnFun(this.id)");
            userStory_Two_btn.appendChild(node);
        }

        if ( userStory_Two_btn.children.length == 1){
            userStory_Two_btn.setAttribute('style', 'visibility:hidden;');
        }else{
            userStory_Two_btn.setAttribute('style', 'visibility:visible;');
        }





	}
})