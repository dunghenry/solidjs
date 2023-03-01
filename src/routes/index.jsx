import { Title } from 'solid-start';
import Counter from '~/components/Counter';
import CreateSignal from '~/components/createSignal';
import CreateEffect from '~/components/createEffect';
import CreateMemo from '~/components/createMemo';
import Props from '~/components/props';
import Main from '~/components/children';
import LoadingData from '~/components/loadingData';
import { CounterProvider } from '~/CounterContext';
export default function Home() {
    return (
        <main>
            <Title>Hello World</Title>
            {/* <CreateSignal /> */}
            {/* <CreateEffect /> */}
            {/* <CreateMemo /> */}
            {/* <Props title="Props" /> */}
            {/* <Main /> */}
            <CounterProvider>
                <h1>Hello world!</h1>
                <LoadingData />
            </CounterProvider>
        </main>
    );
}
