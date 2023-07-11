import { useState, useEffect } from "react";
import { addNewNameToContest, fetchContest } from "../api-client";
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

    const handleNewNameSubmit = async (event) => {
        //API DOM interaction to get the value of the form
        event.preventDefault();
        const newNameInput = event.target.newName;
        //await async post functions that uses contest Id and the new name
        const postBody = {
            contestId: contest.id, 
            newNameValue: newNameInput.value
        };
        console.log("to post", postBody);
        const updatedContest = await addNewNameToContest(postBody);
        console.log(`Contest.tsx: ${updatedContest}`);
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
            <div className="title">Propose a new name</div>
            <div className="body">
                <form onSubmit={handleNewNameSubmit}>
                   <input type="text" name="newName" placeholder="new name here" />
                   <button type="submit">Submit</button> 
                </form>
            </div>
            <a href="/" className="link" onClick={handleClickContestList}>Contests List</a>
        </div>
</>
    );
}

export default Contest;