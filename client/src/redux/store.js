import {createStore,combineReducers,applyMiddleware} from"redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { authreducer } from "./reducer/authreducer";
import { artistreducer } from "./reducer/artistreducer";
import { addsongreducer } from "./reducer/songreducer";

const reducer=combineReducers({
    user:authreducer,
    artist:artistreducer,
    songs:addsongreducer
});
let initialstate={
    user:{authdata:localStorage.getItem("profile")?JSON.parse(localStorage.getItem("profile")):null}
}
const middleware = [thunk];

const store=createStore(reducer,initialstate,composeWithDevTools(applyMiddleware(...middleware)));

export default store;