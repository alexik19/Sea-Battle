import '../ComponentsStyle/button.css'
import React from 'react'
export function Button({startBtn}){
    return <div>
        <button className='button'
                ref={(el) => {
                    if(el !== null) {
                        startBtn.push(el)
                    }
                }}
        >Start</button>
        <button className='button button1' onClick={()=>window.location.reload()}>Play Again!!</button>
    </div>
}