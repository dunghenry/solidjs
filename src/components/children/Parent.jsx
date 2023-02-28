import {} from 'solid-js';

const Parent = ({ children }) => {
    return (
        <div>
            <h2>Parent</h2>
            {children}
        </div>
    );
};

export default Parent;
