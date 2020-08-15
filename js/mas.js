ScrollOut({
    targets: '.block1, .block2, .block3'
})

const modal1 = document.querySelector('#my-modalKen');
const modalBtn1 = document.querySelector('#modalKen-btn');
const closeBtn1 = document.querySelector('.closeBtnKen');

// Events
modalBtn1.addEventListener('click', openModal);
closeBtn1.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal1.style.display = 'block';
}

// Close
function closeModal() {
  modal1.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = 'none';
  }
}