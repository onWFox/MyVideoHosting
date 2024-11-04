import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./app/providers/SidebarProvider/index.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </BrowserRouter>
);
