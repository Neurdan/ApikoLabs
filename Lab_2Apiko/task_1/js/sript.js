function createDOMFunction(Tags, attr, child){
    const mainEl = document.createElement(Tags);

    if (attr.constructor.name === 'Object')
    {
        for (const atribute in attr) {

            mainEl.setAttribute(atribute, attr[atribute])

        }
    }
    if (child instanceof Array) {
        child.forEach((el)=> {
            mainEl.appendChild(el)

        })
    }
    return mainEl;
}

var view = createDOMFunction('div', {id: 'header'}, [
    createDOMFunction('div', {textContent: 'Привіт!', style:"color:blue"}),
    createDOMFunction('div', {textContent: ' Базовий приклад SPA без використання сторонніх бібліотек.'}),
    createDOMFunction('a', {href: '#', textContent: 'Перейти на привітання'}),
    createDOMFunction('a', {href: '#', textContent: 'Перейти назад'}),
])

console.log(view);