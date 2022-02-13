// get allBikes menu
let accMenu = document.querySelector('.accMenu');

// get div menuBlock
let accMenuBlockDiv = document.querySelector('.accMenu > div');

// get dropdown level i menu
let dropdownAcc = document.querySelector('.dropdownAcc');

// get the level 1 dropdown menu item
let dropdownNodes_Acc = document.querySelectorAll('.dropdownAcc li');

// get the level 2 menu item
let dropdown2Nodes_Acc = document.querySelectorAll('.dropdownAccDetail > ul');

// set initFlag_Acc
let initFlag_Acc = 1;

/* console.log(dropdownAcc);
console.log(accMenu);
console.log(dropdownNodes_Acc);
console.log(dropdown2Nodes_Acc); */

accMenu.addEventListener("mouseover", function(event){
    if(initFlag_Acc == 1){
        dropdown2Nodes_Acc[0].classList.remove('setInvisible');
        dropdown2Nodes_Acc[0].classList.add('setVisible');
        dropdownNodes_Acc[0].classList.add('whiteLi');
        dropdownNodes_Acc[0].lastElementChild.classList.remove('icon-arrow');
        dropdownNodes_Acc[0].lastElementChild.classList.add('icon-arrow-white');
        if ( dropdownAcc.classList.contains('dropdownAccUlrtborder')){

        }else{
            dropdownAcc.classList.add('dropdownAccUlrtborder');
        }
        initFlag_Acc = 0;
    }
})
accMenu.addEventListener("mouseout", function(event){
    accMenuBlockDiv.classList.add('accMenuBlockHidden');
})

dropdownNodes_Acc.forEach((node, index)=>{
    node.addEventListener("mouseover",function(event){
        for (let i=0; i < dropdown2Nodes_Acc.length; i++ ){
            if (i == index){
                dropdown2Nodes_Acc[i].classList.remove('setInvisible');
                dropdown2Nodes_Acc[i].classList.add('setVisible');
                if(i == 0){
                    // dropdown2Nodes_Acc[i].classList.add('dropdownAccDetailUlltborder');
                    dropdownAcc.classList.remove('dropdownAccUlrtborder');
                }
                // console.log('nodeClassList:' + node.classList);
                dropdownNodes_Acc[i].classList.remove('blackLi');
                dropdownNodes_Acc[i].classList.add('whiteLi');
                dropdownNodes_Acc[i].firstElementChild.classList.add('whiteLi');
                dropdownNodes_Acc[i].lastElementChild.classList.remove('icon-arrow');
                dropdownNodes_Acc[i].lastElementChild.classList.add('icon-arrow-white');
                // console.log(dropdown2Nodes_Acc[i]);
            }else{
                dropdown2Nodes_Acc[i].classList.remove('setVisible');
                dropdown2Nodes_Acc[i].classList.add('setInvisible');
                dropdownNodes_Acc[i].classList.remove('whiteLi');
                dropdownNodes_Acc[i].classList.add('blackLi');
                dropdownNodes_Acc[i].lastElementChild.classList.remove('icon-arrow-white');
                dropdownNodes_Acc[i].lastElementChild.classList.add('icon-arrow');
                if (dropdown2Nodes_Acc[i].classList.contains('dropdownAccUlltborder')){
                    dropdown2Nodes_Acc[i].classList.remove('dropdownAccUlltborder');
                }
                if ( dropdownAcc.classList.contains('dropdownAccUlrtborder')){

                }else{
                    dropdownAcc.classList.add('dropdownAccUlrtborder');
                }
                // console.log(dropdown2Nodes_Acc[i]);
                // console.log('0');
            }
        }
    })
    node.addEventListener("mouseout",function(event){
        accMenuBlockDiv.classList.add('accMenuBlockHidden');
    });
});