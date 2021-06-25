// show ToDos from Local Storage

class ShowToDos {

    constructor(listTodos, listDone) {

        if (listTodos == undefined) {

            this.listTodos = JSON.parse(localStorage.getItem('ToDos'))

            if (this.listTodos == null) {

            }

        } else {

            this.listTodos = listTodos

        }


        if (listDone == undefined) {

            this.listDone = JSON.parse(localStorage.getItem('Done'))

            if (this.listDone == null) {

            }

        } else {

            this.listDone = listDone

        }

    }

    showDoIt() {

        let doIt = (this.listTodos == undefined || this.listTodos.length == 0) ? [1, 2] : this.listTodos;
        const list = document.querySelector('#listDoIt')

        if (doIt[1] == 2) {

            list.innerHTML = `
            
            <li class="empty--content animate__animated animate__fadeInDown animate__delay-1s">
            <img class='img--banner__1' src="./other/images/Make.png" alt="Make">
            <h1 class='content--text'>Umm!</h1>
            <h4 class='content--text'>Looks like you're not busy</h4>
            </li>
            
            `
        } else {

            list.innerHTML = ` `

            for (let i = 0; i < doIt.length; i++) {

                list.innerHTML += `
                <li class="todo animate__animated animate__fadeInLeft" value="${i}">
                <div>
                      <p class="name"value='content'><small class='index'>${i+1}</small><small>\u00A0${doIt[i].name}</small></p>
                     
                </div>
                <div>
                    <img class="done remove" src="./other/icons/Remove.png" alt="Remove" value="0">
                    <img class="done" src="./other/icons/Done.png" alt="Done" value="1">
                </div>
                </li>
                `
            }
        }
    }






    showDone() {

        let done = (this.listDone == undefined || this.listDone == null || this.listDone.length == 0) ? [1, 2] : this.listDone;
        const list = document.querySelector('#listDone')

        if (done[1] == 2) {



            list.innerHTML = `
            
            <li class="empty--content animate__animated animate__fadeInDown animate__delay-1s" style="margin: 2em 0 0 0;">
                <img class="img--banner__2" src="./other/images/Empty.png" alt="empty">
                <h1 class="content--text">Hum!!!</h1>
                <h4 class="content--text">Do something</h4>
            </li>
            
            `

        } else {
            list.innerHTML = ``

            for (let i = 0; i < done.length; i++) {


                list.innerHTML += `
            <li class="todo animate__animated animate__fadeInLeft" value="${i}">
            <div>
                  <p class="name"><small class='index'>${i+1}</small><small>\u00A0${done[i].name}</small></p>
            </div>
            <div>
                <img class="done remove" src="./other/icons/Remove.png" alt="Remove" value="0">
            </div>
            </li>
            `
            }


        }
    }
}