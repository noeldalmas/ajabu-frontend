import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createUser = async(data)=>{

    let res;
    try {
        res = await axios.post(`${API_URL}/users`, data);
    } catch (error) {
        res = error.response
    }

    return res;
}