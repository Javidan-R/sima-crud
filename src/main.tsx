import 'reflect-metadata';
import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store.config';

const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
