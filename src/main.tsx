import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "src/index.css";
import App from "src/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ModeProvider } from "@alextheman/components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <App />
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
