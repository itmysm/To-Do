// child element
const
    tempStart = document.querySelector('.temp--start'),
    btnDark = document.querySelector('#btnDark'),
    btnLight = document.querySelector('#btnLight'),
    btnStart = document.querySelector('#btn-start');



events()

function events() {

    btnStart.addEventListener('click', () => {

        // remove and add animation class
        btnStart.classList.remove('animate__fadeInLeft')

        // parent parent element is .temp class
        btnStart.parentElement.parentElement.classList.add('animate__fadeOutDown')

        // remove d-none from create--ToDo 
        document.querySelector('#contentEmpty').classList.remove('d-none')

        //

        localStorage.setItem('type', 'User')

        setTimeout(() => {
            // let hide = welcome
            //let show = content


            // call Preloader class
            const prProcess = new Preloader(welcome, content, preloader, 2000)
            prProcess.loader()

        }, 500);
    })



}