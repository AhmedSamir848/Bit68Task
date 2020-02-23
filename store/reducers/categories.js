import { FETCH_CATEGORIES } from "../actions/categories";

const initialState = {
    categories: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {
                categories: action.payload,
            };
        default:
            return state;
    }
};
