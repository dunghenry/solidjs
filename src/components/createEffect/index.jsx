import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';
import './style.css';
const CreateEffect = () => {
    const [count, setCount] = createSignal(0);
    const [show, setShow] = createSignal(false);
    // called after render
    createEffect(() => {
        console.log(count());
    }, 0);

    //called after render not run again
    onMount(() => {
        // console.log(count());
    });

    //clean up function
    createEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY >= 100);
        };
        window.addEventListener('scroll', handleScroll);
        onCleanup(() => {
            console.log('Cleanup complete');
            return window.removeEventListener('scroll', handleScroll);
        });
    });

    //called before render
    // queueMicrotask(() => {
    //     console.log('microtask');
    //     setCount(3); // immediately prints `count = 3`
    //     console.log('goodbye');
    // });

    const handleIncrease = () => {
        setCount((prev) => ++prev);
        // setCount((prev) => ++prev);
    };
    const handleClick = () => {
        setShow(false);
        window.scrollTo(0, 0);
    };
    return (
        <>
            <h2>CreateEffect</h2>
            <h3>{count()}</h3>
            <button onClick={handleIncrease}>Increase</button>
            {show() && (
                <button class="btn" onClick={handleClick}>
                    Go to top
                </button>
            )}
        </>
    );
};

export default CreateEffect;
