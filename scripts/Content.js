const listItems = document.querySelector('.tools--list'),
    box = document.querySelector('.box'),
    items = document.querySelector('.items'),
    contentEmpty = document.querySelector('#contentEmpty'),
    menu1 = document.querySelector('#menu1'),
    menu2 = document.querySelector('#menu2'),
    nameToDo = document.querySelector('#nameToDo');
// 
let statusBox = 0


events()

function events() {

    // head menu event 
    menu1.addEventListener('click', () => menuEvents('0'))
    menu2.addEventListener('click', () => menuEvents('1'))
    document.addEventListener('DOMContentLoaded', menuEvents('0'))

    listItems.children[0].addEventListener('click', menuFunc)
    listItems.children[1].addEventListener('click', menuFunc)

    //select box events section
    box.addEventListener('click', selectBox)
    items.addEventListener('click', (e) => {

        let array = e.composedPath()

        selectBox(array[0].innerText)

    })

    // create new To-Do func events click
    document.querySelector('#createToDo').addEventListener('click', createToDo)
    document.querySelector('#createToDo2').addEventListener('click', createToDo)
    document.querySelector('#saveToDo').addEventListener('click', validateInput)
    document.querySelector('.close--temp').addEventListener('click', createToDo)

}






function menuFunc() {

    for (let i = 1; i < listItems.childElementCount; i++) {

        if (listItems.children[i].classList[3] == 'd-none') {

            // resting animation
            listItems.children[0].classList.add('d-none');
            listItems.children[1].classList.remove('d-none')

            listItems.children[i].classList.remove('d-none')

        } else {
            // resting animation
            listItems.children[1].classList.add('d-none');
            listItems.children[0].classList.remove('d-none')

            listItems.children[i].classList.add('d-none')

        }
    }
}


// select box
function selectBox(item) {

    // options 
    const options = document.querySelector('.items')


    if (statusBox == 0) {
        box.classList.add('show--me')
        box.classList.replace('show--me', 'hide--me')
        statusBox = 1
    } else {

        box.classList.replace('hide--me', 'show--me')
        statusBox = 0
    }


    if (!statusBox == 0) {
        options.classList.remove('d-none')
    } else {
        options.classList.add('d-none')
    }


    // selected option 
    if (typeof(item) == 'string') {
        document.querySelector('#selected').innerText = item

        // show text area after select option
        document.querySelector('#textArea').classList.remove('d-none')

        // show Save btn after select option
        document.querySelector('#saveToDo').classList.remove('d-none')
    }
}




// Create ToDo  func

function createToDo() {

    const temp = document.querySelector('#create')
    const tempChild = document.querySelector('.temp')

    let lastItem = temp.classList.length - 1

    if (temp.classList[lastItem] == 'd-none') {

        temp.classList.remove('d-none')
        temp.classList.remove('animate__fadeOut')

    } else {

        temp.classList.add('animate__fadeOut')

        setTimeout(() => {

            temp.classList.add('d-none')

        }, 200);

    }
}




// Validate Inputs
function validateInput() {
    let nameToDo = document.querySelector('#nameToDo')

    if (nameToDo.value.length >= 1) {

        // add this func for add new To-Do to list 
        addToDo()

        // call this func for  hidden form
        createToDo()

        // call this func for showing success message to client
        popupMsg('bg-success', 'To-Do was added successfully')

        // call this func for resting data inside form 
        resetForm()

        // check if the content has a d-none class. if false add it 
        if (contentEmpty.classList[4] == undefined) {

            contentEmpty.style.animation = 'none';
            contentEmpty.classList.replace('animate__fadeInUp', 'animate__bounceOut');
            contentEmpty.style.animation = '';


            setTimeout(() => {
                contentEmpty.classList.add('d-none')

                document.querySelector('.content--content').classList.remove('d-none')


            }, 2000);
        }

        // call showDoIt for showing ToDos
        const list = new ShowToDos(JSON.parse(localStorage.getItem('ToDos')))
        list.showDoIt()

    } else {

        // show error message to client
        popupMsg('bg-danger', 'Name To-Do can not be empty')
    }
}







// reset form func 
function resetForm() {
    const selected = document.querySelector('#selected').innerText = 'Select'



    // Input reset content
    const inputParent = document.querySelector('#nameToDo').value = ''

    // add d-none to save button and textarea
    document.querySelector('#saveToDo').classList.add('d-none')
    document.querySelector('.textarea--box').classList.add('d-none')

}





function addToDo() {
    let nameToDo = document.querySelector("#nameToDo").value
    let importance = document.querySelector('#selected').innerText
    let levelImport;
    let moreInfo = document.querySelector('#moreInfo').value;

    // add levelImport by importance
    if (importance == 'Normal') {

        levelImport = 1

    } else
    if (importance == 'Low') {

        levelImport = 0

    } else if (importance == 'High') {

        levelImport = 2

    } else if (importance == 'Very high') {

        levelImport = 3
    }

    // Condition check value moreInfo 
    let validate = (moreInfo.length <= 5) ? moreInfo = 'Nothing' : true;


    const sendValues = new ToDoSave(nameToDo, importance, levelImport, moreInfo)
    sendValues.saveData()
}






// menu events 
// with every click on menu1 & menu2 we have 1 argument and with it we change animations
function menuEvents(num) {

    const subAnimation = document.querySelectorAll('.sub--animation');

    if (num == 0) {

        // show this menu content 
        document.querySelector('#listDoIt').classList.remove('d-none')

        // hide other menu content 
        document.querySelector('#listDone').classList.add('d-none')

        subAnimation[0].classList.remove('d-none')
        subAnimation[1].classList.add('d-none')

        subAnimation[num].classList.add('d-none')

        setTimeout(() => {

            subAnimation[num].classList.remove('d-none')

        }, 100);


        const list = new ShowToDos()
        list.showDoIt()

    } else {
        // show this menu content 
        document.querySelector('#listDone').classList.remove('d-none')

        // hide other menu content 
        document.querySelector('#listDoIt').classList.add('d-none')

        subAnimation[1].classList.remove('d-none')
        subAnimation[0].classList.add('d-none')

        subAnimation[num].classList.add('d-none')

        setTimeout(() => {

            subAnimation[num].classList.remove('d-none')

        }, 100);


        // show list 
        const list = new ShowToDos()
        list.showDone()
    }

}