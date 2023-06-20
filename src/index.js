import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Fragment>
        <App/>
    </Fragment>
);

document.getElementById('clearConsoleDiplay').addEventListener('click', () => {

    document.querySelectorAll("#consoleDisplay .comment").forEach((span) => {
        span.remove();
    })
});