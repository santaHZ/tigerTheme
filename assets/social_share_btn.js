/* 
https://www.facebook.com/sharer.php?u=[post-url]

https://twitter.com/share?url=[post-url]&text=[post-title]

https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

*/

const facebookBtn = document.querySelector('.facebookBtn');
const twitterBtn = document.querySelector('.twitterBtn');
const pinterestBtn = document.querySelector('.pinterestBtn');
const linkedinBtn = document.querySelector('.linkedinBtn');
const emailBtn = document.querySelector('.envelopeBtn');

function init(){
    const pinterestImg = document.querySelector('.mainBanner > img');
    let postUrl = encodeURI(document.location.href);
    let postTitle= encodeURI("Hi erveryone please check this out");
    let postImg = encodeURI(pinterestImg.src);

    facebookBtn.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`);
    twitterBtn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    pinterestBtn.setAttribute('href', `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`);
    linkedinBtn.setAttribute('href', `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
    emailBtn.setAttribute('href', `mailto:`);
}

init();