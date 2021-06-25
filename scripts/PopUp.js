// popup func 
function popupMsg(className, message) {

    const popup = document.querySelector('#popupMsg')

    if (popup.classList[3] == 'd-none') {

        // remove d-none
        popup.classList.remove('d-none')

        // add elements to popup
        popup.innerHTML = `
        
        <div class="content--message ${className}" id="error--msg">
            ${message}
        </div>

        <div class="time--message"></div>
        
        `
            // after few sec remove popup message
        setTimeout(() => {
            popup.classList.add('d-none')
        }, 4000);

    }


}