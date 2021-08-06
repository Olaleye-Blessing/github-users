import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-ldtsmmuw.us.auth0.com"
            clientId="w7m5PFIADsyIpXjVV6o8FzJSzKUuHhQ5"
            redirectUri={window.location.origin}
            cacheLocation="localstorage"
        >
            <Router>
                <AppProvider>
                    <App />
                </AppProvider>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
