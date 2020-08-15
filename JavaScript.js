const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.closeBtn');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

$(document).ready(function (){
    porcent1();
    porcent2();
    porcent3();
});


function porcent1(){
    let start = 0;
    let end = $(".masText").html();
    let speed = 300;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".masText").html(start);
    }, speed );
}

function porcent2(){
    let start = 0;
    let end = $(".masText1").html();
    let speed = 5;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".masText1").html(start);
    }, speed );
}

function porcent3(){
    let start = 0;
    let end = $(".masText2").html();
    let speed = 50;

    setInterval(function(){
        if(start<end){
            start++;
        }
        $(".masText2").html(start);
    }, speed );
}

ScrollOut({
    targets: '.footerInfoAd, .footerInfoYa, .footerInfoHor, .box1, .box2, .mishonPText, .mishonPtext2, .bestuurBText, .bestuurBText2, .optionText, .optionText2, .optionLink, .masText, .masText1, .masText2',
    once: true
})