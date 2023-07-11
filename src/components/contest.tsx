import { useState, useEffect } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ( {id} ) => { //receive the id
    const [contest, setContest] = useState({}); //empty ojbect?
    useEffect(() => {
        fetchContest(id).then((contest) => {
            setContest(contest);
        });
    }, [id]); //dependency array - just one network request
    //return HTML contest structure
    return (
        <>
        <Header message={contest.contestName} />
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contest.description}</div>
        </div>
</>
    );
}

export default Contest;