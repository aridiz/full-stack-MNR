import * as React from "react"; 

const ContestPreview: React.FC<{ contest: object, onClick: any }> = 
({ contest, onClick }) => {

        const handleClick = (event) => {
            event.preventDefault(); //prevent default DOM behavior
            //navigate to a niew view
            onClick(contest.id);
        }
    return (
        //link to make the cursor visibile
        <div className="contest-preview link" onClick={handleClick}>
                <div className="category">{contest.categoryName}</div>
                <div className="contest">{contest.contestName}</div>
               </div>
    );
};

export default ContestPreview;