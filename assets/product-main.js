let divSpeHeight = 0;
let div_Id ="product_main_spe_Tech";
let objArray = [];
let t = 0;
let childBtn ="add";
let divFlag = 0;
let divDirectionFlag = "inc";

function incSpeHeightMain(){
    if (divFlag = 1 && divDirectionFlag == "dec"){
        return;
    }
	let elem = document.getElementById(div_Id);
    let elemHeight =elem.scrollHeight;
	divSpeHeight += 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight < elemHeight){
        t = setTimeout(incSpeHeightMain, 5);
	}
    
}

function decSpeHeightMain(){
    if (divFlag = 1 && divDirectionFlag == "inc"){
        return;
    }
	let elem = document.getElementById(div_Id);
	divSpeHeight -= 5;
	elem.style.height = divSpeHeight + "px";
	if (divSpeHeight > 5){
        t = setTimeout(decSpeHeightMain, 5);
	}
    
}

let speToggleMain = function(obj_Id) {
	//let btnA= document.getElementById("product_main_spe_Tech_Menu");
    let btnA= document.getElementById(obj_Id);
    
    div_Id = btnA.nextElementSibling.id;
	console.log(div_Id);

    if (objArray.length < 2){
        objArray.push(div_Id);
    }else{
        objArray.shift();
        objArray.push(div_Id);
    }
    
    childBtn = btnA.firstElementChild.getAttribute("class");
	console.log(childBtn);
	console.log(btnA.innerHTML);
	if (childBtn == "add"){
        if (objArray.length == 2){
            if (objArray[0] != objArray[1]){
                divSpeHeight = 0;
                divFlag = 0; // previous div clicked is different with current one.
            }else{
                divFlag = 1;
            }
        }
		console.log(divSpeHeight);
		btnA.firstElementChild.setAttribute("class","minus");
        childBtn = "minus";
        divDirectionFlag = "inc";
        setTimeout(incSpeHeightMain, 5);
        
	}else{
        if (objArray.length == 2){
            if (objArray[0] != objArray[1]){
                divFlag = 0;
                divSpeHeight = document.getElementById(div_Id).scrollHeight;
            }else{
                divFlag = 1;
            }
        }
		
		console.log(divSpeHeight);
		btnA.firstElementChild.setAttribute("class","add");
        childBtn = "add";
        divDirectionFlag = "dec";
        setTimeout(decSpeHeightMain, 5);
        
	}
}