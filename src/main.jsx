import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(<App />);
