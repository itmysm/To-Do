// this script is related to open ToDo 

const doIt = document.querySelector('#listDoIt')
const done = document.querySelector('#listDone')
const closeWindow = document.querySelector('#closeWindow')

events()

function events() {

    doIt.addEventListener('click', (e) => {

        validateItem(e, 0)
    })

    done.addEventListener('click', (e) => {
        validateItem(e, 1)
    })

    // close 
    closeWindow.addEventListener('click', closeWin)
}

// find ToDo 

function validateItem(e, num) {



    let details = e.composedPath()

    if (num == 0) {


        // variables
        const options = document.querySelector('.todo').children[1].innerHTML,
            option1 = document.querySelector('.todo').children[1].children[0].innerHTML,
            option2 = document.querySelector('.todo').children[1].children[1].innerHTML;

        if (details[0].innerHTML == options || details[0].innerHTML == option1 || details[0].innerHTML == option2) {

            // nothing

        } else {



            if (details.length == 11) {

                openToDos(details[0], num)


            } else if (details.length == 12) {

                openToDos(details[1], num)


            } else if (details.length == 14) {
                openToDos(details[3], num)
            }

        }


    } else if (num == 1) {

        const options = document.querySelector('.todo').children[1].innerHTML,
            option1 = document.querySelector('.todo').children[1].children[0].innerHTML;

        if (details[0].innerHTML == options || details[0].innerHTML == option1) {

            // nothing

        } else {

            if (details.length == 11) {

                openToDos(details[0], num)

            } else if (details.length == 12) {

                openToDos(details[1], num)

            } else if (details.length == 14) {

                openToDos(details[3], num)


            }

        }

    }

}



// find ToDo with 

function openToDos(item, num) {

    let itemIndex = item.value

    if (num == 0) {

        let doItList = JSON.parse(localStorage.getItem('ToDos'))

        doItList = doItList[itemIndex]

        openToDo(doItList)

    } else if (num == 1) {

        let doneList = JSON.parse(localStorage.getItem('Done'))

        doneList = doneList[itemIndex]

        openToDo(doneList)
    }

}

// open form
function openToDo(itemSelected) {

    const contentToDo = document.querySelector('#showContent').classList
    let lastItem = lastIndex(contentToDo)

    let selectedItem = itemSelected;

    if (contentToDo[lastItem] == 'd-none') {

        const contentSelectedToDo = document.querySelector('.content--ToDo')
        contentSelectedToDo.innerHTML = `
    
        <p class="name--ToDo">Name:<small>\u00A0${selectedItem.name}</small></p>
        <p>Importance:<small>\u00A0${selectedItem.level}</small></p>
        <p>More Info:<small>\u00A0${selectedItem.info}</small></p>
            
        `

        contentToDo.remove('d-none')
    } else {
        contentToDo.add('d-none')

    }


}



// close window

function closeWin() {

    const contentToDo = document.querySelector('#showContent').classList
    let myIndex = lastIndex(contentToDo)

    if (contentToDo.myIndex != 'd-none') {

        contentToDo.add('d-none')

    }

}





// find last index

function lastIndex(el) {
    let lastIn = el.length - 1
    return lastIn
}