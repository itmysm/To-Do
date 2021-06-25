// save ToDo in local storage


class ToDoSave {
    constructor(name, level, levelNum, info) {
        this.name = name
        this.level = level
        this.levelNum = levelNum
        this.info = info
        this.saveDate = Date.now()
    }

    saveData() {

        let listToDo;

        // check localStorage and if null create new empty array
        if (localStorage.getItem('ToDos') == null) {

            listToDo = []

        } else {

            listToDo = JSON.parse(localStorage.getItem('ToDos'))

        }

        let newObj = {
            name: this.name,
            level: this.level,
            levelNum: this.levelNum,
            info: this.info,
            date: this.saveDate
        }


        // add new Object to array 
        listToDo.push(newObj)

        // set array inside local storage with new object

        localStorage.setItem('ToDos', JSON.stringify(listToDo))

    }
}