import { getDataFromError, getDataFromResponse, getUnAuthenticatedAxios } from './helpers';
export const auth = {
    login: (body) =>
        getUnAuthenticatedAxios().post(`auth/login`,body)
            .then(getDataFromResponse)
            .catch(getDataFromError),
    signup: (body) =>
        getUnAuthenticatedAxios().post(`auth/signup`,body)
            .then(getDataFromResponse)
            .catch(getDataFromError),
};
