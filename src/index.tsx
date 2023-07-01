//this file is going to contain some jsx
//react-dom
import {createRoot} from "react-dom/client"

const App = () => {
    return <div>Hello React</div>;
    // return React.createElement("Div", null, "Hello React");
}

//container with the id in HTML - entry point for React
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);