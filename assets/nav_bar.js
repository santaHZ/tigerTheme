// get allBikes menu
let allBikesMenu = document.querySelector('.allBikesMenu');

// get div menuBlock
let menuBlockDiv = document.querySelector('.allBikesMenu > div');

// get dropdown level i menu
let dropdownPro = document.querySelector('.dropdownPro');

// get the level 1 dropdown menu item
let dropdownNodes = document.querySelectorAll('.dropdownPro li');

// get the level 2 menu item
let dropdown2Nodes = document.querySelectorAll('.dropdownProDetail > ul');

// get first li under dropdownPro
let viewAllLi = document.querySelector('.dropdownPro').firstElementChild;

//get stickyMenu div object
let stickyMenuDiv = document.querySelector('.stickyMenu');

let topMenuUl = document.querySelector('.topMenu > .topMenuUl');

// set initFlag
let initFlag = 1;

/* console.log(dropdownPro);
console.log(allBikesMenu);
console.log(dropdownNodes);
console.log(dropdown2Nodes); */

allBikesMenu.addEventListener("mouseover", function(event){
    if(initFlag == 1){
        dropdown2Nodes[0].classList.remove('setInvisible');
        dropdown2Nodes[0].classList.add('setVisible');
        dropdownNodes[0].classList.add('whiteLi');
        dropdownNodes[0].lastElementChild.classList.remove('icon-arrow');
        dropdownNodes[0].lastElementChild.classList.add('icon-arrow-white');
        if ( dropdownPro.classList.contains('dropdownProDetailUlrtborder')){

        }else{
            dropdownPro.classList.add('dropdownProDetailUlrtborder');
        }
        initFlag = 0;
        /* viewAllLi.setAttribute('background-color', 'black');
        viewAllLi.setAttribute('color', 'white'); */
    }
})
allBikesMenu.addEventListener("mouseout", function(event){
    menuBlockDiv.classList.add('menuBlockHidden');
})

dropdownNodes.forEach((node, index)=>{
    node.addEventListener("mouseover",function(event){
        for (let i=0; i < dropdown2Nodes.length; i++ ){
            if (i == index){
                dropdown2Nodes[i].classList.remove('setInvisible');
                dropdown2Nodes[i].classList.add('setVisible');
                if(i == 0){
                    // dropdown2Nodes[i].classList.add('dropdownProDetailUlltborder');
                    dropdownPro.classList.remove('dropdownProDetailUlrtborder');
                }
                // console.log('nodeClassList:' + node.classList);
                dropdownNodes[i].classList.remove('blackLi');
                dropdownNodes[i].classList.add('whiteLi');
                dropdownNodes[i].firstElementChild.classList.add('whiteLi');
                dropdownNodes[i].lastElementChild.classList.remove('icon-arrow');
                dropdownNodes[i].lastElementChild.classList.add('icon-arrow-white');
                // console.log(dropdown2Nodes[i]);
            }else{
                dropdown2Nodes[i].classList.remove('setVisible');
                dropdown2Nodes[i].classList.add('setInvisible');
                dropdownNodes[i].classList.remove('whiteLi');
                dropdownNodes[i].classList.add('blackLi');
                dropdownNodes[i].lastElementChild.classList.remove('icon-arrow-white');
                dropdownNodes[i].lastElementChild.classList.add('icon-arrow');

                if (dropdown2Nodes[i].classList.contains('dropdownProDetailUlltborder')){
                    dropdown2Nodes[i].classList.remove('dropdownProDetailUlltborder');
                }
                if ( dropdownPro.classList.contains('dropdownProDetailUlrtborder')){

                }else{
                    dropdownPro.classList.add('dropdownProDetailUlrtborder');
                }

                // console.log(dropdown2Nodes[i]);
                // console.log('0');
            }
        }
    })
    node.addEventListener("mouseout",function(event){
        menuBlockDiv.classList.add('menuBlockHidden');
    });
});


window.onscroll = function(){
    if(window.pageYOffset >= topMenuUl.offsetTop){
        stickyMenuDiv.classList.add("stickyStyle");
        /* console.log('window_pageYOffset:' + window.pageYOffset);
        console.log('menu_offsetTop:' + topMenuUl.offsetTop); */
    }else{
        stickyMenuDiv.classList.remove("stickyStyle");
        /* console.log('window_pageYOffset2:' + window.pageYOffset);
        console.log('menu_offsetTop2:' + topMenuUl.offsetTop); */
    }

    if(window.pageYOffset == 0){
        stickyMenuDiv.classList.remove("stickyStyle");
        /* console.log('window_pageYOffset2:' + window.pageYOffset);
        console.log('menu_offsetTop2:' + topMenuUl.offsetTop); */
    }
}