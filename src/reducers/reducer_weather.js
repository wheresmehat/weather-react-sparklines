import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {

    switch (action.type) {

        case FETCH_WEATHER:

            //return [action.payload.data].concat(state);   // never change (mutate) state, but return a brand new state instead; so using push is NOT recommended, instead use concat or ...(spread operator) below

            // redux checks if the two objects (old state and new state) are the same object; if it's the same object it doesn't rerender, so mutating wouldn't rerender; that's why we must send back a brand new object, redux checks that the two objects are different and rerenders 
            // if redux checked for mutated objects that would be very time consuming (checking every property); but comparing two objects is fast

            return [action.payload.data, ...state];     // ES6
    }

    return state;

}