export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS'
    };
};

export const onProductsReceived = (products) => {
    return {
        type: 'PRODUCTS_RECEIVED',
        payload: products
    };
};