import React from 'react'
import { UseCounter } from './hooks/UseCounter'

export const HookApp = () => {

    const { contador, increment, decrement, reset } = UseCounter();

    return (
        <>
            <h1>contador: { contador }</h1>
            <button className="btn" onClick={() => increment()}>+1</button>
            <button className="btn" onClick={() => decrement()}>-1</button>
            <button className="btn" onClick={reset}>reset</button>
        </>
    )
}
