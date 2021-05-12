import React, { useState } from 'react'
import './style/UseCounterCSS.css' 

export const UseCounterApp = () => {
    
    // trabajar sin objetos
   /*  const [contador, setContador] = useState(10)

    return (
        <>
            <h1>Counter { contador }</h1>
            <button className="btn" onClick = { () => setContador( contador +1 )}>+1</button>
        </>
    ) */

    // trabajar con objetos
    const [state, setState] = useState({contador1: 100, contador2: 200});
    const {contador1, contador2} = state;
    return(
        <>
            <h1>contador1: {state.contador1}</h1>
            <h1>contador2: {state.contador2}</h1>
            <button className="btn" onClick = { () => setState({...state, contador2: contador2 +1})}>
                +1
            </button>
        </>

    )


}
