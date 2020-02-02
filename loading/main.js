const log = console.log
const app = document.querySelector('.app')


let el = {
    create: (tag, className, text = null) => {
        let block = document.createElement(tag)
        block.className = className
        block.innerHTML = text
        return block;
    },
    append: (el, to) => {
        to.append(el);
    }
}


let loadingBarOuter = el.create('div', 'loading-bar-outer')
el.append(loadingBarOuter, app)

let loadingBarInner = el.create('div', 'loading-bar-inner')
el.append(loadingBarInner, loadingBarOuter)

let loadingBarText = el.create('p', 'loading-bar-text' , 'Загрузка ...')
el.append(loadingBarText, loadingBarOuter);


(() => {
    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
            loadingBarInner.style.width = i + '%'
        }, i * 50)
    }
})()