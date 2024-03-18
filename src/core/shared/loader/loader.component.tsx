import {useLoaderStyles} from './loader.style';

const LoaderComponent = () => {
    const {loader, inner,} = useLoaderStyles();
    return (
        <div className={loader}>
            <span className={inner}></span>
        </div>
    );
};

export default LoaderComponent;

