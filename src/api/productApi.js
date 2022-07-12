import { getDataFromError, getDataFromResponse, getUnAuthenticatedAxios } from './helpers';
export const productApi = {
    getProducts: () =>
        getUnAuthenticatedAxios().get(`products`)
            .then(getDataFromResponse)
            .catch(getDataFromError),
    getProduct: (id) =>
        getUnAuthenticatedAxios().get(`product/${id}`)
            .then(getDataFromResponse)
            .catch(getDataFromError),
    postproduct: (body) =>
        getUnAuthenticatedAxios().post(`products`, body)
            .then(getDataFromResponse)
            .catch(getDataFromError),
    updateproduct: (body) =>
        getUnAuthenticatedAxios().put(`product/${body.id}`, body)
            .then(getDataFromResponse)
            .catch(getDataFromError),
    deleteproduct: (id) =>
        getUnAuthenticatedAxios().delete(`product/${id}`)
            .then(getDataFromResponse)
            .catch(getDataFromError),
};
