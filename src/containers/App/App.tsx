import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import {applyMiddleware, compose, createStore, Store} from "redux";
import {reducer} from "../../store/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = process.env.REACT_APP_DEV_TOOLS
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const store: Store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Routes>
                    <Route path={"/*"} element={<Home/>}/>
                </Routes>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
