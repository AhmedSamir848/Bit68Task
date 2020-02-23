export const SET_PRODUCTS = 'set_products';
export const FILTER_PRODUCTS = 'filter_products';

export const setProducts = (categories) => {
    return {
        type: SET_PRODUCTS,
        payload: categories
    };
};

export const filterProducts = (searchKey) => {
    
    return {
        type: FILTER_PRODUCTS,
        payload: searchKey
    };
};