import { SET_PRODUCTS } from "./products";

export const FETCH_CATEGORIES = 'fetch_categories';

export const fetchCategories = () => {
    return async dispatch => {
        const response = await fetch(
            `https://5bcce576cf2e850013874767.mockapi.io/task/categories`,
            {
                method: 'GET',
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            } else {
                message = 'Email Or Password Not Valid';
            }
            throw new Error(message);
        }

        const json = await response.json();
        if (json == undefined) {
            let message = 'No Data Found';
            throw new Error(message);
        } else {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: json
            });
            dispatch({
                type: SET_PRODUCTS,
                payload: json
            });

        }
    };
}