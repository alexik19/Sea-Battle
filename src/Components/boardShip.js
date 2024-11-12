import React, { useState, useEffect, useRef } from 'react'
import '../ComponentsStyle/boardShip.css'
import '../ComponentsStyle/ships.css'

export default function Table ({
    setCurrentElement,
    onDragEnd,
    arrrr2,
    onDragStart,
    onDragLeave,
    arr,
    onDragEnter,
    tables,
    setNewArr,
    newArr,
    arrrr,
    arrrr3,
    arrrr4
}) {
    const shipRefs = useRef([])
    return (
        <table className="table" onDragEnter={onDragEnter} onDragLeave={onDragLeave} ref={(el) => {
            if(el !== null){

            tables.push(el)
        }}}>
            <tbody>

            {arr.map((val1, rowIndex) => (
                <tr key={rowIndex} data-row={rowIndex}>
                    {arr.map((val, colIndex) => {
                        const ship1 = (rowIndex === 7 && colIndex === 1) || (rowIndex === 9 && colIndex === 3) || (rowIndex === 9 && colIndex === 0) || (rowIndex === 5 && colIndex === 5)
                        const isDisabled2 = (rowIndex === 0 && colIndex === 0) || (rowIndex === 0 && colIndex === 3) || (rowIndex === 0 && colIndex === 6)
                        const isDisabled22 = (rowIndex === 0 && colIndex === 1) || (rowIndex === 0 && colIndex === 4) || (rowIndex === 0 && colIndex === 7)
                        const isDisabled3 = (rowIndex === 4 && colIndex === 0) || (rowIndex === 9 && colIndex === 6) || (rowIndex === 2 && colIndex === 5)
                        const isDisabled32 = (rowIndex === 4 && colIndex === 1) || (rowIndex === 9 && colIndex === 7) || (rowIndex === 2 && colIndex === 6)
                        const isDisabled33 = (rowIndex === 4 && colIndex === 2) || (rowIndex === 9 && colIndex === 8) || (rowIndex === 2 && colIndex === 7)
                        const idDisabled4 = (rowIndex === 3 && colIndex === 9)
                        const idDisabled42 = (rowIndex === 4 && colIndex === 9)
                        const idDisabled43 = (rowIndex === 5 && colIndex === 9)
                        const idDisabled44 = (rowIndex === 6 && colIndex === 9)
                        if (!shipRefs.current[rowIndex]) {
                            shipRefs.current[rowIndex] = []
                        }
                        return (

                            <td
                                onClick={(event) => {
                                    if (event.target.dataset.disabled) {
                                        console.log(event.target.dataset.disabled)
                                    }
                                }}
                                //style={{ backgroundColor: (val1===1 && (val===1 || val===2 || val===5|| val===4 || val===8|| val===7)) ? 'lightgreen' : 'initial' }}
                                key={colIndex}
                                data-row={rowIndex}
                                data-col={colIndex}
                                data-disabled={'false'}
                            >
                                {((rowIndex === 7 && colIndex === 1) || (rowIndex === 9 && colIndex === 3) || (rowIndex === 9 && colIndex === 0) || (rowIndex === 5 && colIndex === 5)) &&
                                    <div className="ship1" ref={(el) => {
                                        shipRefs.current[rowIndex][colIndex] = el
                                        arrrr.push(el)
                                        setNewArr(() => {return el})
                                    }} onDragEnd={onDragEnd} draggable="true"></div>}
                                {(val1===1 && (val===1 || val===4 || val===7)) &&
                                    <div className="ship2" ref={(el) => {
                                        shipRefs.current[rowIndex][colIndex] = el
                                        arrrr2.push(el)
                                    }} onDragEnd={onDragEnd} draggable="true"></div>}
                                {(val1===1 && (val===2 || val===5 || val===8)) &&
                                    <div className="ship22" draggable="true"></div>}
                                {((rowIndex === 4 && colIndex === 0) || (rowIndex === 9 && colIndex === 6) || (rowIndex === 2 && colIndex === 5)) &&
                                    <div className="ship3" ref={(el) => {
                                        shipRefs.current[rowIndex][colIndex] = el
                                        arrrr3.push(el)
                                    }} onDragEnd={onDragEnd} onDragLeave={onDragLeave} draggable="true"></div>}
                                {((rowIndex === 4 && colIndex === 1) || (rowIndex === 9 && colIndex === 7) || (rowIndex === 2 && colIndex === 6)) &&
                                    <div className="ship32" draggable="true"></div>}
                                {((rowIndex === 4 && colIndex === 2) || (rowIndex === 9 && colIndex === 8) || (rowIndex === 2 && colIndex === 7)) &&
                                    <div className="ship33" draggable="true"></div>}
                                {((rowIndex === 3 && colIndex === 9)) &&
                                    <div className="ship4" ref={(el) => {
                                        shipRefs.current[rowIndex][colIndex] = el
                                        arrrr4.push(el)
                                    }} onDragEnd={onDragEnd} onDragLeave={onDragLeave} draggable="true"></div>}
                                {((rowIndex === 4 && colIndex === 9)) &&
                                    <div className="ship42" draggable="true"></div>}
                                {((rowIndex === 5 && colIndex === 9)) &&
                                    <div className="ship43" draggable="true"></div>}
                                {((rowIndex === 6 && colIndex === 9)) &&
                                    <div className="ship44" draggable="true"></div>}
                            </td>
                        )
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    )
}