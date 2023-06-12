import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '~/app/router/router';

const App = (): JSX.Element => {
    return (
        <div id="_tuanp">
            <BrowserRouter basename={`/`}>
                <Router />
            </BrowserRouter>
        </div>
    );
};

export default App;
