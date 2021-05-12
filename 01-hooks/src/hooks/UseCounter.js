import { useState } from "react";

export const UseCounter = (initial = 10) => {
    const [contador, setContador] = useState(initial);

    const increment = () => {
        setContador(contador + 1);
    }
    const decrement = () => {
        setContador(contador - 1);
    }
    const reset = () => {
        setContador(initial);
    }

    return {contador, increment, decrement, reset};
}
