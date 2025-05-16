import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

/* 
Scalability Notes:
✅ To add new pages: Create a file in pages/ and register it in AppRoutes.tsx.

✅ Want admin routes? Create a separate AdminLayout and set of routes.

✅ Want lazy-loading? Use React.lazy and Suspense for code splitting.
*/
