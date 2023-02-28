import {} from 'solid-js';
import Children from './Child';
import Parent from './Parent';
const Main = () => {
    return (
        <div>
            <h2>Index</h2>
            <Parent>
                <Children />
            </Parent>
        </div>
    );
};

export default Main;
