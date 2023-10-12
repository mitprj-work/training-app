import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1/';

const commanApiCall = async ({
    url, method, data
}) => {
    console.log("DATA IN AXIOZ", data);
    const apiurl = API_URL + url;
    const response = await axios.get(apiurl,
        {
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer dfnskjdnfkdsnfkjsdfnkdsjnvdksvvskdmvsdjfdsnfsdknfsdnfsdnfdsnkf'
            },
            params: data
        }
    )
    console.log("response", response);
    return response.data;
};

export const getUserInfo = (city) => {
    const res = commanApiCall({ url: 'employee/findAll', method: 'GET', data: { city: city } });
    return res;
}
export const getUserInfoById = () => {
    const res = commanApiCall({ url: 'employee/findByid', method: 'GET', data: { id: 120 } });
    return res;
}

