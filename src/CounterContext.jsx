import { createContext } from 'solid-js';
import { createStore } from 'solid-js/store';
export const CounterContext = createContext();
export function CounterProvider(props) {
    const [state, setState] = createStore({
        count: 0,
    });
    const counter = [
        state,
        {
            increment() {
                setState('count', (c) => c + 1);
            },
            decrement() {
                setState('count', (c) => c - 1);
            },
        },
    ];
    return <CounterContext.Provider value={counter}>{props.children}</CounterContext.Provider>;
}
