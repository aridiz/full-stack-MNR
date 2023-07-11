import axios from "axios";
import { API_SERVER_URL } from "./public-config";

//functions both for back end and front end
export const fetchContestList = async () => {
    const resp = await axios.get(`${API_SERVER_URL}/contests`);
    return resp.data.contests; //all contests
}; 

export const fetchContest = async (contestId) => {       //contest id value
    const resp = await axios.get(`${API_SERVER_URL}/contest/${contestId}`); //customized path
    return resp.data.contest;  //single contest
}; 