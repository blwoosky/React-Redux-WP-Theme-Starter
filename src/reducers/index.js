import { combineReducers } from 'redux';

import posts from "./posts";

const rootReducer = combineReducers({
    posts: posts
});

export default rootReducer;