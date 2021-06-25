// parent element 
const content = document.querySelector('.content'),
    contentList = document.querySelector('.content--content'),
    welcome = document.querySelector('.welcome'),
    preloader = document.querySelector('.preloader');



// Event listeners
events()

function events() {

    // check localStorage func 
    window.addEventListener("DOMContentLoaded", checkPreparations)

}



// check new user or old user, with check info in LocalStorage
function checkPreparations(e) {

    (localStorage.getItem('ToDos') == undefined) ? welcomeSec(): contentSec()

}


function welcomeSec() {

    // add d-none to preloader
    preloader.classList.add('d-none')

    // remove d-none from welcome section
    welcome.classList.remove('d-none')

}


function contentSec() {

    // add d-none to preloader
    preloader.classList.add('d-none')

    // remove d-none from welcome section
    content.classList.remove('d-none')

    // remove d-none from contentList
    contentList.classList.remove('d-none')

    // call 
    const list = new ShowToDos()
    list.showDoIt()
}