//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Routes
import AppRoutes from './routes'

//Assets
//import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();