/* Burger menu show and hide */
const burger = document.getElementById('burger');
const navUL = document.getElementById('nav-ul');

burger.addEventListener('click', () => {
    navUL.classList.toggle('display');
})