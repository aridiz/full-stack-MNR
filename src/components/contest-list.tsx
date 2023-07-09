import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react"; 
// import { fetchContests } from "../api-client";

const ContestList = ({ initialContests }) => {
    const [contests] = useState(initialContests);

    useEffect(() => {
    // fetchContests().then((contests) => { //call the function and then.. 
    //     setContests(contests); 
    // }); 
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