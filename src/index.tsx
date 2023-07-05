//this file is going to contain some jsx
//react-dom
import {createRoot} from "react-dom/client"

import App from "./components/app";

//container with the id in HTML - entry point for React
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />); //react component to be rendered

