const log = console.log
const app = document.querySelector('.app')

randomInt = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

randomColor = () => {
    return `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)},.5)`
}


let el = {
    create: (...[]) => {
        let block = document.createElement(tag)
        block.className = className

        try {
            // for input
            block.type = type
            block.value = value
    
            // for text
            block.innerHTML = text 

        } catch (err) {
            log(err.message)
        }

        goto.append(block);

        return block;
    }
}


let slider = el.create(
    tag = 'div', 
    className = 'slider', 
    goto = app
)

let slides = el.create(
    tag = 'ul', 
    className = 'slides', 
    goto = slider
)

for (let i = 1; i <= 3; i++) {  
    let slide = el.create(
        tag = 'li', 
        className = 'slide', 
        goto = slides
    )
}

let controls = el.create(
    tag = 'div', 
    className = 'controls', 
    goto = slider
)

let prevBtn = el.create(
    tag = 'input', 
    className = 'btn prev', 
    type = 'button', 
    value = '<', 
    goto = controls
)

let playBtn = el.create(
    tag = 'input', 
    className = 'btn play', 
    type = 'button', 
    value = 'Play', 
    goto = controls
)

let nextBtn = el.create(
    tag = 'input', 
    className = 'btn next', 
    type = 'button', 
    value = '>', 
    goto = controls
)

let allSlides = document.querySelectorAll('.slide')
allSlides[0].className += ' show'


color = ['tomato', 'lightblue', 'lightgreen']

let crntSlide = 0;
// allSlides[crntSlide].style.backgroundColor = randomColor()
allSlides[crntSlide].style.backgroundColor = color[crntSlide]
let playing = true;

let play = () => {
    playing = true;
    playBtn.value = 'Play'
    clearInterval(interval);

}
let pause = () => {
    playing = false;
    interval = setInterval(() => {
        nextSlide()
    }, 2000)
    playBtn.value = 'Pause'
}

let nextSlide = () => {
    allSlides[crntSlide].className = 'slide';
    crntSlide = (crntSlide + 1) % allSlides.length;
    allSlides[crntSlide].className = 'slide show';
    // allSlides[crntSlide].style.backgroundColor = randomColor()   
    allSlides[crntSlide].style.backgroundColor = color[crntSlide] 
}

let prevSlide = () => {
    allSlides[crntSlide].className = 'slide';
    crntSlide = (crntSlide - 1) >= 0 ? (crntSlide - 1) % allSlides.length : allSlides.length - 1;
    allSlides[crntSlide].className = 'slide show';
    // allSlides[crntSlide].style.backgroundColor = randomColor()   
    allSlides[crntSlide].style.backgroundColor = color[crntSlide]   
}

playBtn.onclick = function() {
    // log(playing)
    playing ? pause() : play()
}

nextBtn.onclick = function() {
    nextSlide()
}

prevBtn.onclick = function() {
    prevSlide()
}


