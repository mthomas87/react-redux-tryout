import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import store from "./store"
import Board from "./app/component/Board"

render(<Provider store={store}>
        <Board/>
    </Provider>,
    window.document.getElementById('root'));