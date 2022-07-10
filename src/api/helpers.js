import axios from "axios";
export const apiBaseUrl = 'http://localhost:5000/api';

export const getUnAuthenticatedAxios = () => ( axios.create({ baseURL: apiBaseUrl }))

export const getDataFromResponse = (response) => response.data;

export const getDataFromError = error => error.response.data