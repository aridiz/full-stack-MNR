import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react"; 
import { fetchContests } from "../api-client";

const ContestList = ({ initialContests }) => {
    const [contests, setContests] = useState(initialContests);

    useEffect(() => {
    fetchContests().then((data) => { //call the function and then.. 
        setContests(data.contests); 
    }); 
}, []); //after the first render stops re-rendering

    return (
        <div className="contest-list">
                    {contests.map((contest) => {
                    return (
                    <ContestPreview key={contest.id} contest={contest} />
                    );
                    })}
                </div>
            );
};

export default ContestList;