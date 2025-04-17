const changeColorBtn= document.getElementById('changeColorBtn');
const box= document.querySelector('.box');

const changeColor =changeColorBtn.addEventListener('click', ()=> {
    box.style.backgroundColor= "blue";
});

changeColor();
