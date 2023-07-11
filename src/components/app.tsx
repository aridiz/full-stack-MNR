// import { useState } from "react"; //used most
import Header from "./header";
import ContestList from "./contest-list";
import { useState } from "react";
import Contest from "./contest";

//page: contestList or contest 

const App = ( {initialData} ) => {
    const [page, setPage] = useState("contestList");
    const [currentContestId, setCurrentContestId] = useState(); //undefined as default
    
    const navigateToContest = (contestId) => {
        setPage("contest");
        setCurrentContestId(contestId);
        console.log(contestId); //testing click on contest 
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
        <Header message="Naming Contests" />
        {pageContent()}
    </div>
    );
};

export default App;