import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";
import { DarkModeProvider } from "./components/DarkMode/DarkModeProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
  
    <Theme>
    <DarkModeProvider>
      <App />
      </DarkModeProvider>
    </Theme>


 
    </BrowserRouter>
  </StrictMode>
);
