import React from 'react';
import '../ComponentsStyle/boardShip.css';
export default function TableRival({tables}) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <table
            className="table2" ref={(el) => {
            if(el !== null) {
                tables.push(el)
            }
        }} >
            <tbody>
            {arr.map((val1, rowIndex) => (
                <tr key={rowIndex} data-row={rowIndex}>
                    {arr.map((val, colIndex) => {
                        return (
                            <td
                                //style={{ backgroundColor: (val1===10 && val>2 && val%2===0) || (val1&2!==0 && val1>4 && val<3) || (val1<4 && (val===3 || val===6)) || (val1===6 && val>4 && val<9) ? 'lightgreen' : 'initial' }}
                                key={colIndex}
                                data-col={colIndex}
                                data-row={rowIndex}
                                data-disabled={(val1===10 && val>2 && val%2===0) || (val1&2!==0 && val1>4 && val<3) || (val1<4 && (val===3 || val===6)) || (val1===6 && val>4 && val<9) ? 'true' : 'false'}
                            >
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
}
