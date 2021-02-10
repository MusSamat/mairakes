window.addEventListener(('DOMContentLoaded'), () => {
    class Wrappers {
        constructor(img,alt, img_classes, descr, parentSelector, ...classes) {
            this.img = img
            this.alt = alt
            this.img_classes = img_classes
            this.descr = descr
            this.parent = document.querySelector(parentSelector)
            this.classes = classes
        }

        render () {
            const element = document.createElement('div')
            if(this.classes.length === 0){
                this.element = "waiting_items"
                element.classList.add(this.element)
            }else {
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
                <img src=${this.img} alt=${this.alt} class=${this.img_classes}>
                <div class="waiting_desc"> ${this.descr}
                </div>
            `

            this.parent.append(element)
        }

    }

    new Wrappers(
        'img/waiting/waiting_2.png',
        "alt1",
        "waiting_img",
        'Покажем, как правильно оптимизировать сайт и сделать его\n' +
        '                        привлекательным для поисковых систем. Только свежая, профессиональная и\n' +
        '                        актуальная информация',
        '.waiting .container .waiting_wrapper',
        'waiting_items'
    ).render()

    new Wrappers(
        'img/waiting/waiting_2.png',
        "alt1",
        "waiting_img",
        'Покажем, как правильно оптимизировать сайт и сделать его\n' +
        '                        привлекательным для поисковых систем. Только свежая, профессиональная и\n' +
        '                        актуальная информация',
        '.waiting .container .waiting_wrapper',
        'waiting_items'
    ).render()

    new Wrappers(
        'img/waiting/waiting_2.png',
        "alt1",
        "waiting_img",
        'Покажем, как правильно оптимизировать сайт и сделать его\n' +
        '                        привлекательным для поисковых систем. Только свежая, профессиональная и\n' +
        '                        актуальная информация',
        '.waiting .container .waiting_wrapper',
        'waiting_items'
    ).render()



    //FinishWrapper

    class FinishWrapper{
        constructor(img, alt, img_cls, descr, parentSelector, ...classes) {
            this.img = img
            this.alt = alt
            this.img_cls = img_cls
            this.descr =descr
            this.parent = document.querySelector(parentSelector)
            this.classes = classes
        }

        render () {
            const element = document.createElement('div')
            if(this.classes.length === 0){
                this.element = 'finish_item'
                element.classList.add(this.element)
            }else{
                this.classes.forEach(className => element.classList.add(className))
            }

            element.innerHTML = `
                <div class="finish_round">
                    <img src=${this.img} alt=${this.alt} class=${this.img_cls}>
                </div>
                <div class="finish_desc">${this.descr}</div>
            `
            this.parent.append(element)
        }
    }

    new FinishWrapper(
        'icons/finish_icon_1.png',
        'alt',
        'finish_icon',
        'Создать свой сайт или блог',
        '.finish .container .finish_wrapper',
        'finish_item'
    ).render()

    new FinishWrapper(
        'icons/finish_icon_1.png',
        'alt',
        'finish_icon',
        'Создать свой сайт или блог',
        '.finish .container .finish_wrapper',
        'finish_item'
    ).render()

    new FinishWrapper(
        'icons/finish_icon_1.png',
        'alt',
        'finish_icon',
        'Создать свой сайт или блог',
        '.finish .container .finish_wrapper',
        'finish_item'
    ).render()

    new FinishWrapper(
        'icons/finish_icon_1.png',
        'alt',
        'finish_icon',
        'Создать свой сайт или блог',
        '.finish .container .finish_wrapper',
        'finish_item'
    ).render()

    new FinishWrapper(
        'icons/finish_icon_1.png',
        'alt',
        'finish_icon',
        'Создать свой сайт или блог',
        '.finish .container .finish_wrapper',
        'finish_item'
    ).render()


    const modalBtns = document.querySelectorAll('[data-modalBtn]')
    const modal = document.querySelector('.modal')
    const modalCloseBtn = document.querySelector('[data-close]')

    function showModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow =  'hidden'
    }

    function hideModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow =  ''
    }

    modalBtns.forEach(btn =>{
        btn.addEventListener('click', () => showModal())
    })

    modalCloseBtn.addEventListener('click',() => hideModal())

    modal.addEventListener('click', e => {
        if(e.target && e.target.classList.contains('modal')){
            hideModal()
        }
    })
})