import axios from "axios";
import { API_SERVER_URL } from "./public-config";

//functions both for back end and front end
export const fetchContests = async () => {
    const resp = await axios.get(`${API_SERVER_URL}/contests`);
    return resp.data; 
}; 