class Preloader {
    constructor(hide, show, preloader, time) {
        this.time = time
        this.preloader = preloader
        this.hide = hide
        this.show = show
    }


    loader() {

        //hiding parent element
        this.hide.classList.add('d-none')

        // showing preloader and remove d-none class
        this.preloader.classList.remove('d-none')

        setTimeout(() => {

            // hiding preloader after few sec (this.time is a variable num)
            this.preloader.classList.add('d-none');

            // remove d-none from element
            this.show.classList.remove('d-none')

        }, this.time);
    }
}