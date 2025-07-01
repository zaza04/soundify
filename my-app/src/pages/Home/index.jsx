import { Outlet } from "react-router-dom";
import NavHero from "./NavHero";
import SoundContent from "./SoundContent";

function Home() {
  return (
    <>
      <div className="Nav_Hero container_hero">
        <NavHero />
        <div className="mt-5 h-32">
          <Outlet />
        </div>
      </div>
      <div className="Sound_Content mt-10 h-auto container_sound">
        <SoundContent />
      </div>
    </>
  );
}

export default Home;
