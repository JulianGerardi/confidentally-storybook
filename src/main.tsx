import React from "react";
import ReactDOM from "react-dom/client";
import "./tokens/tokens.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      Este proyecto se navega desde Storybook: <code>npm run storybook</code>
    </div>
  </React.StrictMode>
);
