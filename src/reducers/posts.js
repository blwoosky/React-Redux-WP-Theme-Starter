import { GET_POSTS } from '../actions';


const defaultState = {
    posts: [],
    totalPages: 1,
    status: "start"
};

//console.log(JSON.stringify(defaultState));


export default function posts(state = defaultState,type) {

    switch (type) {

        case GET_POSTS:

        default:
            return state;


    }

}