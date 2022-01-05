var imageA = document.querySelectorAll('.mainIndex3Col > a');
var imageImg = document.querySelectorAll('.mainIndex3Col > a >img');
// var imageDivImg = document.querySelector('.zoomInner');
// console.log(imageA);
// console.log(imageImg);

imageImg.forEach((imageImgchild,index)=> {
    imageImg[index].addEventListener('mouseover', function(){
        imageA[index].classList.remove('zoomImgOut');
        imageA[index].classList.add('zoomImgIn');
        // console.log('mouse over');
        setTimeout(() => {
            // console.log('mouse out');
            imageA[index].classList.remove('zoomImgIn');
            imageA[index].classList.add('zoomImgOut');
        }, 300);
    })
})