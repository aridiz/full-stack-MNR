import { useState, useEffect } from "react";
import { disableValidation } from "schema-utils";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ( {initialContest, onContestListClick} ) => { //receive the id
    const [contest, setContest] = useState(initialContest); //empty ojbect?

    useEffect(() => {
        if (!contest.names) {
            //don't have the data
        fetchContest(contest.id).then((contest) => {
            setContest(contest);
        });
    }
    }, [contest.id, contest.names]); //dependency array - just one network request

    const handleClickContestList = (event) => {
        event.preventDefault();
        onContestListClick();
    };
    //return HTML contest structure
    return (
        <>
        <Header message={contest.contestName} />
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contest.description}</div>
            <div className="title">Proposed Names</div>
            <div className="body">
                {contest.names?.length > 0 ? 
                (<div className="list">
                    {contest.names.map((proposedName) => (
                        <div key={proposedName.id} className="item">{proposedName.name}</div>
                    ))}
                </div>)
                : <div>No names proposed yet</div>
            }
            </div>
            <a href="/" className="link" onClick={handleClickContestList}>Contests List</a>
        </div>
</>
    );
}

export default Contest;