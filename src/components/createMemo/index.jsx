import { createMemo, createSignal, For } from 'solid-js';

const CreateMemo = () => {
    const [title, setTitle] = createSignal('');
    const [price, setPrice] = createSignal('');
    let input;
    const [products, setProducts] = createSignal([{ title: 'Laptop', price: 100 }]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title() != '' && +price() > 0) {
            const id = Math.floor(Math.random() * 100);
            const product = { id, title: title(), price: +price() };
            setProducts((prev) => [...prev, product]);
            input.focus();
        } else {
            alert('Invalid data');
        }
        setPrice('');
        setTitle('');
    };
    const total = createMemo(() => {
        const totalPrice = products()?.reduce((total, product) => total + product.price, 0);
        console.log('Tinh toan');
        return totalPrice;
    }, 0);
    return (
        <>
            <h1>CreateMemo</h1>
            <h2>Total: {total}</h2>
            <For each={products()}>
                {(product, i) => {
                    return (
                        <li>
                            {product?.id}: {product?.title} - {product?.price}
                            {/* {console.log(i())} */}
                        </li>
                    );
                }}
            </For>
            <form onSubmit={handleSubmit}>
                <input
                    ref={input}
                    type="text"
                    value={title()}
                    oninput={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    value={price()}
                    oninput={(e) => setPrice(e.currentTarget.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default CreateMemo;
