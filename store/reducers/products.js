import { SET_PRODUCTS, FILTER_PRODUCTS } from "../actions/products";

const initialState = {
    products: [],
    filteredProducts: []
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCTS:
            // console.log("===========================");
            const allProducts = [];
            action.payload.forEach(category => category.products.forEach(element => {
                allProducts.push(element);
            }));
            // console.log(allProducts);

            return {
                products: allProducts,
            };
        case FILTER_PRODUCTS:
            const searchkey = action.payload;

            const updatedFilteredProd = state.products.filter(product => product.name.includes(searchkey));
            return {
                ...state,
                filteredProducts: updatedFilteredProd
            }
        default:
            return state;
    }
};
