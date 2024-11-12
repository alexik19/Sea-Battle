import './App.css'
import BoardShip from './Components/boardShip'
import TableRival from './Components/boardShipRival'
import { shipDisabling4, shipDisabling3, shipDisabling1, shipDisabling2, paint5, paint4, paint2, paint0 } from './Components/disabling'
import React, { useEffect, useState } from 'react'
import { Button } from './Components/Button'
import img2 from './img/cross.png'
import img1 from './img/close.png'

function App () {
    const [currentElement, setCurrentElement] = useState(null)
    const [currentPosition, setCurrentPosition] = useState(null)
    let [newArr,setNewArr] = useState([])
    let  arrrr = []
    let  arrrr2 = []
    let startBtn = []
    let  arrrr3 = []
    let  arrrr4 = []
    let win2 = 0
    let win1=0
    let wiin = 0
    let tables = []
    function reload() {
        window.location.reload()
    }
    function generateUniquePairs() {
        const pairs = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                pairs.push([i, j]);
            }
        }
        for (let k = pairs.length - 1; k > 0; k--) {
            const randIndex = Math.floor(Math.random() * (k + 1));
            [pairs[k], pairs[randIndex]] = [pairs[randIndex], pairs[k]];
        }
    
        return pairs
    }
    let strike2 = () => {
        let random = generateUniquePairs()
        let randI = random[0][0]
        let randJ = random[0][1]
        let img = document.createElement('img')
        let target = tables[0].querySelector(`[data-row="${randI}"][data-col="${randJ}"]`)
if(target.children && target.children.length===1 && (target.children[0].tagName === "DIV" )){
    win1++
    target.style.backgroundColor = 'red'            
            target.style.backgroundColor = '#E9967A'
            img.style.width = '35px'
            img.style.height = '35px'
            img.src=img2
            target.appendChild(img)             
            setTimeout(strike2,1000)
    console.log(  `The Opponent Shot The %c${randI + 1} Row%c,%c${randJ + 1} Column%c`,
        'color: red; font-weight: bold;','',
        'color: red; font-weight: bold;',''
    );
        }
        else if(!target.hasChildNodes()){
            win1=win1
                    target.style.backgroundColor = '#FFEFD5'
                    img.src=img1
                    img.style.width = '30px'
                    img.style.height = '30px'
                    img.style.alignSelf = 'center'
                    img.style.justifySelf = 'center'
                    target.appendChild(img)
            tables[1].classList.remove('disabled')
    console.log(
        `The Opponent Missed, The Target was Row %c${randI+1}%c, Column %c${randJ+1}%c`,
        'color: red; font-weight: bold;','',
        'color: red; font-weight: bold;',''
    )
           }
           else{
            win1=win1
            strike2() 
}}
    useEffect(() => {
        let c
        startBtn[0].addEventListener('click',(event)=>{
            alert('The Game is Started')
            event.target.style.display ='none'
            tables[0].classList.add('disabled')
             c=1
        })
        tables[1].addEventListener('click',(event)=>{
                if(event.target.dataset.disabled === 'true' && event.target.tagName === 'TD' && event.target.children.length ===0 && c===1){
                    win2++
                    event.target.style.backgroundColor = '#E9967A'
                    let img = document.createElement('img')
                    img.style.width = '35px'
                    img.style.height = '35px'
                    img.src=img2
                    event.target.appendChild(img)
                }
                else if(event.target.dataset.disabled === 'false' && event.target.tagName === 'TD' && event.target.children.length ===0 && c===1){
                    event.target.style.backgroundColor = '#FFEFD5'
                    let img = document.createElement('img')
                    win2 = win2
                    img.src=img1
                    img.style.width = '30px'
                    img.style.height = '30px'
                    img.style.alignSelf = 'center'
                    img.style.justifySelf = 'center'
                    event.target.appendChild(img)
                    tables[1].classList.add('disabled')
                    setTimeout(strike2,1000)
                }
                if(win2 === 20){
                    alert('We Are The Winner!!')
                    setTimeout(reload,2000)
                }
                if(win1 === 23){
                    alert('We Lose!!')
                    setTimeout(reload,2000)
                }
        })
    }, [])
    useEffect(() => {
        if (arrrr.length > 0) {
            arrrr.forEach((val1,index) => {
                val1.addEventListener('dragstart', (event) => {
                    setCurrentPosition(event.target.parentElement)
                    setCurrentElement(event.target)
                    shipDisabling1(event.target, 'false')
                    for (let i = 0; i < 4; i++) {
                        if (i !== index) {
                            shipDisabling1(arrrr[i], 'true')
                        }}
                        arrrr2.forEach((val)=>{val && shipDisabling2(val, 'true')})
                        arrrr3.forEach(val=>val&& shipDisabling3(val, 'true'))
                        arrrr4.forEach(val=>val&& shipDisabling4(val, 'true'))
        })})}
        if (arrrr2.length > 0) {
            arrrr2.forEach(val => {
                    val.addEventListener('dragstart', (event) => {
                        setCurrentPosition(event.target.parentElement)
                        setCurrentElement(event.target)
                        shipDisabling2(event.target, 'false')
                        // console.log(event.target.parentElement)
                        for (let i = 0; i < 3; i++) {
                            if (arrrr2[i] !== event.target) {
                                shipDisabling2(arrrr2[i], 'true')
                            }}
                            arrrr.forEach((val)=>{val && shipDisabling1(val, 'true')})
                            arrrr3.forEach(val=>val&& shipDisabling3(val, 'true'))
                            arrrr4.forEach(val=>val&& shipDisabling4(val, 'true'))})})}
        if(arrrr3.length>0){
            arrrr3.forEach((val)=>{
                val.addEventListener('dragstart', (event) => {
                    setCurrentPosition(event.target.parentElement)
                    setCurrentElement(event.target)
                    shipDisabling3(event.target,'false')
                    for (let i = 0; i < 3; i++) {
                        if (arrrr3[i] !== event.target) {
                            shipDisabling3(arrrr3[i], 'true')                            
                        }}
                        arrrr2.forEach((val)=>{val && shipDisabling2(val, 'true')})
                        arrrr.forEach(val=>val&& shipDisabling1(val, 'true'))
                        arrrr4.forEach(val=>val&& shipDisabling4(val, 'true'))
                    })})}
        if(arrrr4.length>0){
            arrrr4.forEach(val=>{
                val.addEventListener('dragstart',(event)=>{
                    setCurrentElement(event.target)
                    setCurrentPosition(event.target.parentElement)
                    shipDisabling4(event.target,false)
                    arrrr2.forEach((val)=>{val && shipDisabling2(val, 'true')})
                    arrrr3.forEach(val=>val&& shipDisabling3(val, 'true'))
                    arrrr.forEach(val=>val&& shipDisabling1(val, 'true'))
                })})
        }
    }, [])

    useEffect(() => {
        wiin=win2
    }, [win2])
    function onDragEnter (event) {
        setCurrentPosition(event.target)
        if (event.target.nodeName !== 'DIV' && event.target.nodeName === 'TD') {
            if (currentElement?.className === 'ship4' && event.target.nodeName !== 'DIV') {
                let element2 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row)}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element3 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 1}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element4 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 2}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element5 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 3}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                if (parseInt(event.target.dataset.row) && parseInt(event.target.dataset.row) + 1 && parseInt(event.target.dataset.row) + 2 && parseInt(event.target.dataset.row) + 3 && element2.dataset.disabled !== 'true' && element3.dataset.disabled !== 'true' && element4.dataset.disabled !== 'true' && element5.dataset.disabled !== 'true') {
                    paint5(element2, element3, element4, element5, true)
                }
            }
            if (currentElement?.className === 'ship3' && event.target && event.target.nextElementSibling&& event.target.nextElementSibling.nextElementSibling && event.target.nodeName !== 'DIV' && event.target.dataset.disabled !== 'true' && event.target.nextElementSibling.dataset.disabled !== 'true' && event.target.nextElementSibling.nextElementSibling.dataset.disabled !== 'true') {
                paint4(event.target, true)
            }
            if (currentElement?.className === 'ship2' && event.target.nextElementSibling && event.target && event.target.nodeName !== 'DIV' && event.target.dataset.disabled !== 'true' && event.target.nextElementSibling.dataset.disabled !== 'true') {
                paint2(event.target, event.target.nextElementSibling, true)
            }
            if (currentElement.className === 'ship1' && event.target.nodeName !== 'DIV' && event.target.dataset.disabled !== 'true') {
                paint0(event.target, true)
            }
        }
    }
    function onDragLeave (event) {
        if (event.target.nodeName !== 'DIV' && event.target.nodeName === 'TD') {
            if (currentElement?.className === 'ship4' && event.target.nodeName !== 'DIV') {
                let element2 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row)}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element3 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 1}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element4 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 2}"][data-col="${parseInt(event.target.dataset.col)}"]`)
                let element5 = document.querySelector(`[data-row="${parseInt(event.target.dataset.row) + 3}"][data-col="${parseInt(event.target.dataset.col)}"]`)

                if (element2 && element3 && element4 && element5 && element2.dataset.disabled !== 'true' && element3.dataset.disabled !== 'true' && element4.dataset.disabled !== 'true' && element5.dataset.disabled !== 'true') {
                    paint5(element2, element3, element4, element5, false)
                }
            }
            if (currentElement?.className === 'ship3' && event.target && event.target.nextElementSibling&& event.target.nextElementSibling.nextElementSibling && event.target.nodeName !== 'DIV' && event.target.dataset.disabled !== 'true' && event.target.nextElementSibling.dataset.disabled !== 'true' && event.target.nextElementSibling.nextElementSibling.dataset.disabled !== 'true') {
                paint4(event.target, false)
            }
            if (event.target.nodeName !== 'DIV' && event.target.nextElementSibling && event.target) {
                paint2(event.target, event.target.nextElementSibling, false)
            }
            if (currentElement.className === 'ship1' && event.target.nodeName !== 'DIV' && event.target.dataset.disabled !== 'true') {
                paint0(event.target, false)
            }
        }
    }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const onDragEnd = (event) => {
        event.preventDefault()
        if(event.target.nodeName === 'DIV'){
        if (currentElement.className === 'ship1' && currentPosition.dataset.disabled !== 'true' && currentPosition.nodeName === 'TD') {
            currentPosition.appendChild(event.target)
            shipDisabling1(event.target, 'true')
        }
        if (currentPosition.nextElementSibling && currentPosition && currentElement.className === 'ship2' && currentPosition.dataset.disabled !== 'true' && currentPosition?.nextElementSibling.dataset.disabled !== 'true') {
            currentPosition.appendChild(event.target)
            event.target.style.borderRight = '2px inset blue'
            shipDisabling2(event.target, 'true')
        }
        if (currentElement.className === 'ship3' && currentPosition.nextElementSibling && currentPosition.nextElementSibling.nextElementSibling && currentPosition && currentPosition.dataset.disabled !== 'true' && currentPosition?.nextElementSibling.nextElementSibling.dataset.disabled !== 'true' && currentPosition?.nextElementSibling.dataset.disabled !== 'true') {
            currentPosition.appendChild(event.target)
            shipDisabling3(event.target, true)
        }
        if (currentElement.className === 'ship4' && event.target.parentElement && event.target.parentElement.nodeName === 'TD') {
            let element2 = document.querySelector(`[data-row="${parseInt(currentPosition.dataset.row)}"][data-col="${parseInt(currentPosition.dataset.col)}"]`)
            let element3 = document.querySelector(`[data-row="${parseInt(currentPosition.dataset.row) + 1}"][data-col="${parseInt(currentPosition.dataset.col)}"]`)
            let element4 = document.querySelector(`[data-row="${parseInt(currentPosition.dataset.row) + 2}"][data-col="${parseInt(currentPosition.dataset.col)}"]`)
            let element5 = document.querySelector(`[data-row="${parseInt(currentPosition.dataset.row) + 3}"][data-col="${parseInt(currentPosition.dataset.col)}"]`)
            if (element2?.dataset.disabled !== 'true' && element3?.dataset.disabled !== 'true' && element4?.dataset.disabled !== 'true' && element5?.dataset.disabled !== 'true' && currentPosition.nodeName === 'TD') {
                currentPosition.appendChild(event.target)
                shipDisabling4(event.target, true)
            }
        }
    }
    }
    return (
        <div>
            <div className="boardShipFather">
                <div className="tableButton">
                    <BoardShip setCurrentElement={setCurrentElement} tables ={tables} onDragEnter={onDragEnter} onDragLeave={onDragLeave} newArr={newArr} arrrr2={arrrr2} arrrr={arrrr} arrrr3={arrrr3} arrrr4={arrrr4} setNewArr={setNewArr}
                               onDragEnd={onDragEnd} arr={arr}/>
                    <Button startBtn={startBtn}/>
                </div>
                <TableRival win2 = {win2} tables={tables}/>
            </div>
        </div>
    )
}

export default App
