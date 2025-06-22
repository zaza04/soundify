import Header from "../Header";
import Footer from "../Footer";
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
            ? "w-screen h-screen fixed top-0 left-0 -z-1 animate-mixed"
            : "bg-[var(--color-bg-primary)]")
        }
      >
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default LayoutPlaylist;
