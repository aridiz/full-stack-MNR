// import { useState } from "react"; //used most
import ContestList from "./contest-list";
import { useState } from "react";
import Contest from "./contest";

const App = ( {initialData} ) => {
    //the page variable can be either contestList or contest
    const [page, setPage] = useState<"contestList" | "contest">("contestList",);
    const [currentContestId, setCurrentContestId] = useState<string | undefined>(); //undefined as default
    
    const navigateToContest = (contestId) => {
        setPage("contest");
        setCurrentContestId(contestId);
    }

    const pageContent = () => {
        switch (page) {
            case "contestList": 
                return <ContestList initialContests={initialData.contests} onContestClick={navigateToContest}/>
            case "contest": 
                return <Contest id={currentContestId} />;
            // default:
            //     break;
        }
    };

    return (
    <div className="container">

        {pageContent()}
    </div>
    );
};

export default App;