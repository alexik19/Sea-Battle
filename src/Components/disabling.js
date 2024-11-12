const makeBool = (str) => str === 'true';

export function  disableShip1(element, disableCurrent, val){
    if (disableCurrent) {
            element.dataset.disabled = val
    }
    if (element.nextElementSibling ) {
        element.nextElementSibling.dataset.disabled = val;
    }

    if (element.previousElementSibling) {
        element.previousElementSibling.dataset.disabled = val;
    }
}
export function shipDisabling1(event,val){
    let topElement = document.querySelector(`[data-row="${parseInt(event.parentElement.dataset.row) - 1}"][data-col="${parseInt(event.parentElement.dataset.col)}"]`)
    let bottomElement = document.querySelector(`[data-row="${parseInt(event.parentElement.dataset.row) + 1}"][data-col="${parseInt(event.parentElement.dataset.col)}"]`)
    disableShip1(event.parentElement,true,makeBool(val))
    topElement && disableShip1(topElement,true,makeBool(val))
    bottomElement && disableShip1(bottomElement,true,makeBool(val))
}
export function shipDisabling2(event,val){
    let topElement = document.querySelector(`[data-row="${parseInt(event.parentElement.dataset.row) - 1}"][data-col="${parseInt(event.parentElement.dataset.col)}"]`)
    let bottomElement = document.querySelector(`[data-row="${parseInt(event.parentElement.dataset.row) + 1}"][data-col="${parseInt(event.parentElement.dataset.col)}"]`)
    disableShip1(event.parentElement,true,makeBool(val))
    // console.log(event);
    topElement && disableShip1(topElement,true,makeBool(val))
   // topElement && console.log(topElement);
    bottomElement && disableShip1(bottomElement,true,makeBool(val))
    //bottomElement && console.log(bottomElement)
    disableShip1(event.parentElement.nextElementSibling,true,makeBool(val))
    topElement && disableShip1(topElement.nextElementSibling,true,makeBool(val))
    bottomElement && disableShip1(bottomElement.nextElementSibling,true,makeBool(val))

}
export const paint2 = (el, nextEl, ifTrue) => {
    if (ifTrue) {
        el.classList.add('ship2-spec-left');
        nextEl.classList.add('ship2-spec-right');
    } else {
        el.classList.remove('ship2-spec-left');
        nextEl.classList.remove('ship2-spec-right');
    }
}

export const paint0 = (el, ifTrue) => {
    if (ifTrue) {
        el.classList.add('spec0');
    } else {
        el.classList.remove('spec0');
    }
}
export function shipDisabling4(element, check) {
    let element1 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) - 1}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let element2 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row)}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let element3 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) + 1}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let element4 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) + 2}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let element5 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) + 3}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let element6 = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) + 4}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    element1 && disableShip1(element1,true,check)
    element2 && disableShip1(element2,true,check)
    element3 && disableShip1(element3,true,check)
    element4 && disableShip1(element4,true,check)
    element5 && disableShip1(element5,true,check)
    element6 && disableShip1(element6,true,check)
}
export function shipDisabling3(element, check) {
    let topElement = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) - 1}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    let bottomElement = document.querySelector(`[data-row="${parseInt(element.parentElement.dataset.row) + 1}"][data-col="${parseInt(element.parentElement.dataset.col)}"]`)
    disableShip1(element.parentElement,true,check)
    topElement && disableShip1(topElement,true,check)
    bottomElement && disableShip1(bottomElement,true,check)
    disableShip1(element.parentElement.nextElementSibling,true,check)
    topElement?.nextElementSibling && disableShip1(topElement.nextElementSibling,true,check)
    bottomElement?.nextElementSibling && disableShip1(bottomElement.nextElementSibling,true,check)
    disableShip1(element.parentElement.nextElementSibling.nextElementSibling,true,check)
    topElement?.nextElementSibling?.nextElementSibling && disableShip1(topElement.nextElementSibling.nextElementSibling,true,check)
    bottomElement?.nextElementSibling?.nextElementSibling && disableShip1(bottomElement.nextElementSibling.nextElementSibling,true,check)
}
export const paint4 = (element, ifTrue) => {
    if(element && element.nextElementSibling && element.nextElementSibling.nextElementSibling){
    if (ifTrue) {
        element.classList.add('spec2');
        element.nextElementSibling.classList.add('spec');
        element.nextElementSibling.nextElementSibling.classList.add('spec3');
    } else {
        element.classList.remove('spec2');
        element.nextElementSibling.classList.remove('spec');
        element.nextElementSibling.nextElementSibling.classList.remove('spec3');
    }}
}
export const paint5 = (top, el, botEl, botElBot, ifTrue) => {
    if (ifTrue) {
        top.classList.add('spec');
        el.classList.add('spec2');
        botEl.classList.add('spec3');
        botElBot.classList.add('spec4');
    } else {
        top.classList.remove('spec');
        el.classList.remove('spec2');
        botEl.classList.remove('spec3');
        botElBot.classList.remove('spec4');
    }

}