// This script is related to deleting or moving ToDos

const listDoIt = document.querySelector('#listDoIt'),
    listDone = document.querySelector('#listDone');

events()

function events() {
    listDoIt.addEventListener('click', (e) => {

        // variables 
        const option1 = document.querySelector('.todo').children[1].children[0].innerHTML,
            option2 = document.querySelector('.todo').children[1].children[1].innerHTML;

        let array = e.composedPath();

        if (array.length == 13 || array.length == 12) {

            if (array[0].innerHTML == option1 || array[0].innerHTML == option2) {

                (array[0].classList[1] == 'remove') ? removeToDo(e): moveToDo(e)

            }

        }

    })

    // Done events 

    listDone.addEventListener('click', (e) => {

        // variables 
        const option1 = document.querySelector('.todo').children[1].children[0].innerHTML;

        let array = e.composedPath()
        if (array.length == 13 || array.length == 12) {

            if (array[0].innerHTML == option1) {

                (array[0].classList[1] == 'remove') ? removeToDo2(e): true

            }
        }

    })
}


// Doit section 
function removeToDo(e) {

    // find index 
    let indexItem = e.composedPath()
    indexItem = indexItem[2].value

    // give array and remove item. and then save in local storage
    let arr = JSON.parse(localStorage.getItem('ToDos'))

    arr.splice(indexItem, 1)

    localStorage.setItem('ToDos', JSON.stringify(arr))

    // show popup message
    popupMsg('bg-danger', 'Selected item deleted')

    // show new changes 
    const list = new ShowToDos()
    list.showDoIt()

}


function moveToDo(e) {

    // find index 
    let indexItem = e.composedPath()
    indexItem = indexItem[2].value
        // give array to arr and replace item in Done list
    let doIt = JSON.parse(localStorage.getItem('ToDos'))
    let done = JSON.parse(localStorage.getItem('Done'));

    // check 
    (done == undefined) ? done = []: true;

    // add changes to variables 
    let itemSelected = doIt.splice(indexItem, 1)
    done.push(itemSelected[0])

    // save changes in local storage 
    localStorage.setItem('ToDos', JSON.stringify(doIt))

    localStorage.setItem('Done', JSON.stringify(done))

    // show popup message
    popupMsg('bg-info', 'Selected item moved')

    // show new changes     
    const list = new ShowToDos()
    list.showDoIt()
}




// Done section

function removeToDo2(e) {

    // find index 
    let indexItem = e.composedPath()
    indexItem = indexItem[2].value

    // give array and remove item. and then save in local storage
    let arr = JSON.parse(localStorage.getItem('Done'))

    arr.splice(indexItem, 1)

    localStorage.setItem('Done', JSON.stringify(arr))

    // show popup message
    popupMsg('bg-danger', 'Selected item deleted')

    // show new changes 
    const list = new ShowToDos()
    list.showDone()

}