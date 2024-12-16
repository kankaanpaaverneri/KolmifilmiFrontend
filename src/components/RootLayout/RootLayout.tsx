import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router";
function RootLayout() {
  return (
    <>
      <main>
        <Navigation />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
