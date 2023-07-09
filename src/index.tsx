//this file is going to contain some jsx
//react-dom
import {createRoot} from "react-dom/client"
import axios from "axios";

import { API_SERVER_URL } from "./public-config";

import App from "./components/app";

//container with the id in HTML - entry point for React
const container = document.getElementById("app");
const root = createRoot(container);

//JS Promis
axios.get(`${API_SERVER_URL}/contests`).then((resp) => {
    console.log(resp);
    root.render(<App initialData={ {contests: resp.data.contests} } />
    ); //react component to be rendered
});

