document.addEventListener('DOMContentLoaded', () => {
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuList.style.display = 'flex';
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuList.style.display = 'none';
    menuOpen = false;
  }
});
});
