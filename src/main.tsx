import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Presentation from "./components/Presentation/Presentation";
import App from "./App.tsx";
import NotFound from "./components/NotFound/NotFound";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootLayout from "./components/RootLayout/RootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index path="/" element={<App />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
