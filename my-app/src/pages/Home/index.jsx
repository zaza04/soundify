import { Outlet } from "react-router-dom";
import NavHero from "./NavHero";

function Home() {
  return (
    <>
      <div className="Nav_Hero container_hero">
        <NavHero />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Home;
