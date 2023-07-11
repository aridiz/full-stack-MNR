// import { useState } from "react"; //used most
import ContestList from "./contest-list";
import { useEffect, useState } from "react";
import Contest from "./contest";

const App = ( {initialData} ) => {
    //the page variable can be either contestList or contest
    const [page, setPage] = useState<"contestList" | "contest">(
        initialData.currentContest ? "contest" : "contestList",);
    const [currentContest, setCurrentContest] = useState<object | undefined>(
        initialData.currentContest); 
    
    //manage path when clicking on back and forward on the browser
    useEffect(() => {
        window.onpopstate = (event) => {
            const newPage = event.state?.contestId 
            ? "contest" 
            : "contestList";
            setPage(newPage);
            setCurrentContest({id: event.state?.contestId});
        };
    }, []);

    const navigateToContest = (contestId) => {
        window.history.pushState({contestId}, "", `/contest/${contestId}`); //dynamic URL
        setPage("contest");
        setCurrentContest({id : contestId});
    };

    const pageContent = () => {
        switch (page) {
            case "contestList": 
                return <ContestList initialContests={initialData.contests} onContestClick={navigateToContest}/>
            case "contest": 
                return <Contest initialContest={currentContest} />;
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