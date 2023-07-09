// import { useState } from "react"; //used most
import Header from "./header";

const App = () => {
    //useState() function imported > makes React register a state variable for the component
    //state variable: reactive variable that changes
    //array: current value, function update 

    return (
    <div className="container">
        <Header message="Naming Contests" />

    </div>
    );
};

export default App;