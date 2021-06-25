const sort = document.querySelector('#sort')
const menu = document.querySelector('#menuHead')
let status = 0;




events()

function events() {

    sort.addEventListener('click', giveList)

}





function giveList() {

    let animationMenu = document.querySelector('#menu1 .sub--head .sub--animation');

    // last index find // return 0,1,2,3,..
    let lastIn = lastIndex(animationMenu.classList)


    if (animationMenu.classList[lastIn] == 'd-none') {

        let list = JSON.parse(localStorage.getItem('Done'))

        list = (list == null) ? popupMsg('btn-danger', "You have no To-Do in this section ") : list, sortList(list, 1);

    } else {

        let list = JSON.parse(localStorage.getItem('ToDos'))

        list = (list == null) ? popupMsg('btn-danger', "You have no To-Do in this section ") : list, sortList(list, 0);

    }
}



function sortList(list, num) {

    if (status == 0) {

        // call func, sort by importance
        importance(list, num)

        status = 1

    } else {

        // call func, sort by date
        byDate(list, num)

        status = 0
    }

}

// sort by importance

function importance(list, num) {
    let arr;

    list.sort((a, b) => {
        // 1 to 9 is sorting process and I reverse the operation from 1- 9 to 9 - 1. read the comments below 

        if (a.levelNum < b.levelNum) {

            // it should return -1 here, but i changed it
            return 1

        } else if (a.levelNum > b.levelNum) {

            // it should return 1 here, but i changed it
            return -1

        }
    })

    arr = list


    if (num == 0) {

        localStorage.setItem('ToDos', JSON.stringify(arr))

        // call DoIT and reset list
        const list = new ShowToDos()
        list.showDoIt()

    } else if (num == 1) {

        localStorage.setItem('Done', JSON.stringify(arr))

        // call done section and reset list 
        const list = new ShowToDos()
        list.showDone()

        // send popup
        popupMsg('btn-info', 'Sorted by Importance')
    }

}



// by date
function byDate(list, num) {

    let arr;

    list.sort((a, b) => {
        // 1 to 9 is sorting process and I reverse the operation from 1- 9 to 9 - 1. read the comments below 

        if (a.date < b.date) {

            // it should return -1 here, but i changed it
            return 1

        } else if (a.date > b.date) {

            // it should return 1 here, but i changed it
            return -1

        }
    })


    arr = list

    if (num == 0) {

        localStorage.setItem('ToDos', JSON.stringify(arr))

        // call DoIT and reset list
        const list = new ShowToDos()
        list.showDoIt()

    } else if (num == 1) {

        localStorage.setItem('Done', JSON.stringify(arr))

        // call done section and reset list 
        const list = new ShowToDos()
        list.showDone()

        // send popup
        popupMsg('btn-info', 'Sorted by creation date')
    }


}