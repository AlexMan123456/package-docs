import { ModeProvider } from "@alextheman/components";
import { StrictMode } from "react";

import "src/index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "src/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ModeProvider>
        <App />
      </ModeProvider>
    </BrowserRouter>
  </StrictMode>,
);
