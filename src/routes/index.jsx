import { Title } from 'solid-start';
import Counter from '~/components/Counter';
import CreateSignal from '~/components/createSignal';
import CreateEffect from '~/components/createEffect';
import CreateMemo from '~/components/createMemo';
import Props from '~/components/props';
import Main from '~/components/children';
import LoadingData from '~/components/loadingData';
export default function Home() {
    return (
        <main>
            <Title>Hello World</Title>
            <h1>Hello world!</h1>
            {/* <CreateSignal /> */}
            {/* <CreateEffect /> */}
            {/* <CreateMemo /> */}
            {/* <Props title="Props" /> */}
            {/* <Main /> */}
            <LoadingData />
        </main>
    );
}
