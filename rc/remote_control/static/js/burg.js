let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.header__menu');
let connect = document.querySelector('.header__nav-list-f');
let info = document.querySelector('.header__nav-list-info');
let contact = document.querySelector('.header__nav-list-contact');
let log = document.querySelector('.header__nav-list-log');
let sign = document.querySelector('.header__nav-list-sign');


menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
connect.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
info.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
contact.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
log.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
sign.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})