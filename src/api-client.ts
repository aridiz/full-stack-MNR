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

export const addNewNameToContest = async ({contestId, newNameValue}) => {  //contest id value and new name
    console.log(`ID: ${contestId} - NEW NAME: ${newNameValue}`); //test ok
    const resp = await axios.post(
    `${API_SERVER_URL}/contest/${contestId}`,
    {newNameValue}
    );
    console.log(resp.data); //test not working
    return resp.data.updatedContest;  //single contest
}; 