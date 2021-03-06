import * as React from "react";
import * as ReactDOM from "react-dom";

import * as WebFont from "webfontloader";

import App from "./app";

WebFont.load({
    google: {
        families: ["Montserrat", "Poppins"]
    }
})

ReactDOM.render(
    <App />,
    document.getElementById("app")
)