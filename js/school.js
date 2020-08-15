/*document.querySelector('body').addEventListener('mousemove' , box);
function box(){
    var boxing = document.querySelectorAll('.headerBox1');
    boxing.forEach(function(boxing){
        let x = (boxing.getBoundingClientRect().left) + (boxing.clientWidth / 2);
        let y = (boxing.getBoundingClientRect().top) + (boxing.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 0;
        boxing.style.transform = "rotate("+ rot +")"+ "deg";
    })
}*/

ScrollOut({
    targets: '.bonbiniText, .mishonCir, .mishonCir1, .mishonCir2, .mishonCirRecText, .mishonCirRecText1, .mishonCirRecText2, .aktiText, .aktiText2, .maestroTitle, .maestroText, .moreInfoBox1, .moreInfoBox2, .moreInfoBox3, .map',
    once: true
})



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

// $('.slide').hiSlide();

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay:{
    delay:2500,
    disableOnInteraction: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});