import axios from 'axios';
import { createResource, createSignal, onMount, Switch, Match } from 'solid-js';
const getUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=5`);
    return await response.data;
};

const LoadingData = () => {
    const [users, setUsers] = createSignal([]);
    const [data] = createResource(getUsers);
    // const handleClick = () => {
    //     getUsers().then((data) => setUsers(data));
    // };
    onMount(() => {
        getUsers().then((data) => setUsers(data));
    });
    return (
        <div>
            <h2>LoadingData</h2>
            {/* <button onClick={handleClick}>Click</button> */}
            {/* <Switch fallback={<div>Not Found</div>}>
                <Match when={data.state === 'pending' || data.state === 'unresolved'}>
                    Loading...
                </Match>
                <Match when={data.state === 'ready'}>{JSON.stringify(data())}</Match>
                <Match when={data.state === 'errored'}>{JSON.stringify(data.error)}</Match>
            </Switch> */}
        </div>
    );
};

export default LoadingData;
