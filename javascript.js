let myBtn = document.querySelector('.myBtn');
let nav_links = document.querySelector('.nav_links');

myBtn.addEventListener('click', change_btn);

function change_btn(){
    nav_links.classList.toggle('newStyle');
    myBtn.classList.toggle('change');
}

