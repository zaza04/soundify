import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function LayoutDefault() {
  return (
    <>
      <div className="min-h-screen flex flex-col text-text-primary">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutDefault;
