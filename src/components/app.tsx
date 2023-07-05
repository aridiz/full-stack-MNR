import { useState } from "react";
import Header from "./header";

const App = () => {
    //useState() function imported > makes React register a state variable for the component
    //state variable: reactive variable that changes
    //array: current value, function update 
    const [counter, setCounter] = useState(0);
    return (
    <div className="container">
        <Header message="Naming Contests" />
        <button onClick={() => {
            setCounter(counter + 1); //call the function to update the counter
        }}>{counter}</button>
        
    </div>
    );
};

export default App;