import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react"; 
import { fetchContestList } from "../api-client";

const ContestList = ({ initialContests, onContestClick }) => {
    const [contests, setContests] = useState(initialContests ?? []);

    //only fetch contest if they don't exist
    useEffect(() => {
        if (!initialContests) {
        fetchContestList().then((contests) => { //call the function and then.. 
            setContests(contests); 
        }); 
    }
}, [initialContests]); //dependency array | after the first render stops re-rendering

    return (
        <>
        <div className="contest-list">
                    {contests.map((contest) => {
                    return (
                    <ContestPreview key={contest.id} contest={contest} onClick={onContestClick} />
                    );
                    })}
                </div>
        </>
        );
};

export default ContestList;