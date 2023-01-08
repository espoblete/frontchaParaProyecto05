import axios from "axios";
//require ("dotenv").config();
const url_api = "http://localhost:3005";


export const getUsers = async () => {
    const result = await axios.get(`${url_api}/user/all`);
    
    return result.data.users;
}   