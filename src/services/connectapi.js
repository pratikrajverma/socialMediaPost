import axios from "axios";

export const axiosinstance  = axios.create({});

export const apiConnector = (method, url, data, headers, params) => {
    return axiosinstance({
        method: method,
        url: url,
        data: data ? data : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    });
};

