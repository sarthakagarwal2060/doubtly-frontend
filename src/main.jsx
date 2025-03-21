import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Theme>
      <App className ="dark:text-black dark:bg-[#1C1C1E]"/>
    </Theme>
    </BrowserRouter>
  </StrictMode>
);
