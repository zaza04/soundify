import Header from "./PlaylistHeader";
import Footer from "./PlaylistFooter";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function LayoutPlaylist() {
  const { currentTheme, mixTheme } = useSelector((state) => state.theme);

  return (
    <>
      <div
        // style={ mixTheme ? {} : {backgroundColor: currentTheme.colorCode}}
        style={{ "--color-bg-primary": currentTheme.colorCode }}
        className={
          "min-h-screen flex flex-col text-text-primary " +
          (mixTheme
            ? "max-w-screen min-h-screen animate-mixed"
            : "bg-[var(--color-bg-primary)]")
        }
      > 
        <Header />
        <main className="flex-1 pt-16 pb-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LayoutPlaylist;
