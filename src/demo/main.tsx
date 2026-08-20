import { createRoot } from "react-dom/client";
import "../kit/styles.css";
import "./demo.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(<App />);
