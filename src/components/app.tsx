import { useState, useEffect } from "react"; //used most
import Header from "./header";

const App = () => {
    //useState() function imported > makes React register a state variable for the component
    //state variable: reactive variable that changes
    //array: current value, function update 
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        //anything external to React can be done here
        //side effects to the component: calling data API to fetch
        const intervalId = setInterval( () => {
            setCounter(counter +1);
        }, 1000)

        return () => {
            //any clean up from the dom
            //stop the timer
            clearInterval(intervalId);
        }
    })
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