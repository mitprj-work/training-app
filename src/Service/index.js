import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1/';

const commanApiCall = async ({
    url, method, data
}) => {
    try {
        console.log("DATA IN AXIOZ", data);
        const contentType = data.isImage ? "application/image" : "application/json";
        const apiurl = API_URL + url;
        const user = localStorage.getItem('user');
        const token = user.token ? user.token : '';
        const response = await axios.get(apiurl,
            {
                headers: {
                    'Content-Type': contentType,
                    'authorization': `Bearer `
                },
                params: data
            }
        )
        console.log("response", response);
        return response.data;
    } catch (error) {
        throw error
    }
};
const commanPostApiCall = async ({
    url, data
}) => {
    console.log("DATA IN AXIOZ", data);
    const apiurl = API_URL + url;
    const response = await axios.post(apiurl,
        {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer '
            },
            data: data
        }
    )
    console.log("response", response);
    return response.data;
};

export const getUserInfo = (city) => {
    const res = commanApiCall({ url: 'employee/findAll', method: 'GET', data: { city: city } });
    return res;
}
export const seveUserInfo = (data) => {
    const res = commanPostApiCall({ url: 'employee/save', data: data });
    return res;
}
export const login = (data) => {
    const res = commanPostApiCall({ url: 'employee/login', data: data });
    return res;
}

export const getAllUser = async (city) => {
    const res = await commanApiCall({ url: 'employee/findAll', method: 'GET', data: { city: city } });
    console.log("THIS IS GET ALL USER IN SERVICES", res);
    return res;
}

