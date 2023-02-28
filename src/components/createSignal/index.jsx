import { createSignal } from 'solid-js';
import './style.css';
const orders = [
    {
        name: 'RAM 32GB',
        price: 24,
    },
    {
        name: 'Keyboard RK61 RGB',
        price: 85,
    },
    {
        name: 'Mouse RGB',
        price: 30,
    },
];
const CreateSignal = () => {
    const totalPrice = orders.reduce((total, item) => total + item.price, 0);

    const [count, setCount] = createSignal(0, {
        equals: false,
    });
    const [total, setTotal] = createSignal(() => {
        const totalPrice = orders.reduce((total, item) => total + item.price, 0);
        return totalPrice;
    });
    const handleIncrease = () => {
        setCount((prev) => ++prev);
        setCount((prev) => ++prev);
    };
    console.log('Render');
    //console.log(total()());
    return (
        <>
            <h2 class="h2">CreateSignal</h2>
            <h3>{count()}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </>
    );
};
export default CreateSignal;
