class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);

        window.addEventListener('scroll', ()=>{
            this.fadeRightAnim(this.section, 2)
        })
    }
    fadeRightAnim(section, coordinate){
        const fadeRights = section.querySelectorAll('.fade-right')
        fadeRights.forEach(box => {
            const speed = box.dataset.speed
            box.style.transition = speed + 'ms'
            if(window.scrollY >= (section.offsetTop - section.offsetHeight * coordinate)){
                box.classList.add('active')
            }else box.classList.remove('active')
        })
    }
}
const scroll = new Scroll({
    section: '.services'
})
const scroll2 = new Scroll({
    section: '.team'
})
const scroll3 = new Scroll({
    section: '.projects-1'
})
const scroll4 = new Scroll({
    section: '.projects-2'
})

class Rotate3D {
    constructor(obj) {
        this.cards = document.querySelectorAll(obj.cards);
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {this.rotate(e, card)})
            card.addEventListener('mouseout', () => {this.rotateNone(card)})
        })
    }
    rotate(cursor, card){
        const halfHeight = card.offsetHeight / 2
        const halfWidth = card.offsetWidth / 2
        
        const x = (cursor.offsetY - halfHeight) / 7;
        const y = -(cursor.offsetX - halfWidth) / 7;

        card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
    }
    rotateNone(card){
        card.style.transform = 'rotateX(0) rotateY(0)';
    }
}
const rotate3D = new Rotate3D({
    cards: '.card__block'
})
const rotate3D2 = new Rotate3D({
    cards: '.team__cards'
})

class Gradient {
    constructor(obj){
        this.buttons = document.querySelectorAll(obj.buttons);
        this.transitions = document.querySelectorAll(obj.transition);
        this.buttons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.classList.add('gradient')
            })
            button.addEventListener('mouseout', () => {
                button.classList.remove('gradient')
            })
        })
    }
}
const gradient = new Gradient({
    buttons: '.background__anim',
})