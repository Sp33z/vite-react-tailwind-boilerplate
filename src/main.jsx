import { createRoot } from "react-dom/client";

import { App } from "./App.jsx";

import "./assets/styles/theme.styles.css";
import "./assets/styles/main.style.css";

createRoot(document.getElementById("root")).render(<App />);
