window.onscroll = function (){
    const defaultpageYOffset = document.querySelector('header').offsetTop;
    const tobt = document.querySelector('#to-bt');
    if(window.pageYOffset > defaultpageYOffset) {
        tobt.classList.remove('rotate-180');
        tobt.href = "#about";
    } else {
        tobt.classList.add('rotate-180');
        tobt.href = "#contact";
    }
};

const mode = document.querySelector('#mode');
const html = document.querySelector('html');

mode.addEventListener('click', function () {
    if(mode.checked){
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});