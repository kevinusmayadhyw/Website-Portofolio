// Go to And Navbar
window.onscroll = function (){
    const header = document.querySelector('header');
    const defaultpageYOffset = header.offsetTop;
    const tobt = document.querySelector('#to-bt');
    if(window.pageYOffset > defaultpageYOffset) {
        tobt.classList.remove('rotate-180');
        tobt.href = "#about";
        header.classList.add('navbar-fixed');
    } else {
        tobt.classList.add('rotate-180');
        tobt.href = "#contact";
        header.classList.remove('navbar-fixed');
    }
};

// DarkMode
const mode = document.querySelector('#mode');
const html = document.querySelector('html');

mode.addEventListener('click', function () {
    if(mode.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    mode.checked =true;
} else {
    mode.checked =false;
}

// Hamburger Navbar
const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden')
});