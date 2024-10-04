/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="px-2 3xl:px-0 max-w-screen-3xl mx-auto">
            {children}
        </div>
    );
};

export default Container;