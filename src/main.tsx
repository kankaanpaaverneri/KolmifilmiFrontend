import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Presentation from "./components/Presentation/Presentation";
import App from "./App.tsx";
import NotFound from "./components/NotFound/NotFound";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RootLayout from "./components/RootLayout/RootLayout.tsx";
import Productions from "./components/Productions/Productions.tsx";
import Contact from "./components/Contact/Contact.tsx";
import { paths } from "./paths/paths.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path={paths.root} element={<RootLayout />}>
            <Route index path={paths.root} element={<App />} />
            <Route path={paths.presentation} element={<Presentation />} />
            <Route path={paths.productions} element={<Productions />} />
            <Route path={paths.contact} element={<Contact />} />
            <Route path={paths.notFound} element={<NotFound />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>,
);
