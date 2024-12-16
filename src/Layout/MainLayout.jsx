// Components
import { Navbar, Footer, ColorContainer } from "../components";

// RRD
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <ColorContainer />
      <main className="align-element w-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
