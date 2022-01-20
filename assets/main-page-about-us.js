const cyclingContent = document.querySelector('.cyclingContent');
const knowledgeContent = document.querySelector('.knowledgeContent');

const cyclingContentBtn = document.querySelector('.mainPageMainLeft > div > ul:nth-child(2) > li > a');
const knowledgeContentBtn = document.querySelector('.mainPageMainLeft > div > ul:nth-child(3) > li > a');

// cyclingContent.setAttribute('style','display:none');
knowledgeContent.setAttribute('style','display:none');

function mainPageMainLeftContentToggle1(){
    cyclingContent.setAttribute('style','display:block');
    knowledgeContent.setAttribute('style','display:none');
    cyclingContentBtn.classList.add('mainPageMainLeft_bottomb_white');
    cyclingContentBtn.classList.remove('mainPageMainLeft_bgColor');
    knowledgeContentBtn.classList.remove('mainPageMainLeft_bottomb_white');
    knowledgeContentBtn.classList.add('mainPageMainLeft_bgColor');
}

function mainPageMainLeftContentToggle2(){
    cyclingContent.setAttribute('style','display:none;');
    knowledgeContent.setAttribute('style','display:block;');

    cyclingContentBtn.classList.remove('mainPageMainLeft_bottomb_white');
    cyclingContentBtn.classList.add('mainPageMainLeft_bgColor');
    knowledgeContentBtn.classList.add('mainPageMainLeft_bottomb_white');
    knowledgeContentBtn.classList.remove('mainPageMainLeft_bgColor');
}