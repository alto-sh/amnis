import * as React from "react";
import * as ReactDOM from "react-dom";

import * as WebFont from "webfontloader";

import App from "./app";

import {createStore} from "redux";
// @ts-ignore
import {Provider} from "react-redux";
import allReducers from "./reducers/index";

const store = createStore(allReducers,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

WebFont.load({
    google: {
        families: ["Montserrat", "Poppins"]
    }
})

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById("app")

)