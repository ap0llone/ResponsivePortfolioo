//auto-typing
var typed = new Typed(".auto-type",{
	strings: ["Abbas Ibragimov.","Web Developer.","Designer."],
	typeSpeed: 50,
	backSpeed: 70,
	loop: true
});

//fixed header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
});

//hamburger
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.header-list');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};