import { Link, NavLink } from "react-router-dom";
import {
  OscillationIcon,
  ShuffleIcon,
  ThreeDotsIcon,
} from "../../components/icon";
import { useEffect, useRef, useState } from "react";
import Playlists from "./Playlists";
import Favorites from "./Favorites";

function NavHero() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    let handleModal = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    // bắt sự kiện khi người click ra ngoài
    if (openModal) {
      document.addEventListener("mousedown", handleModal);
    }

    // return để gỡ event tránh rò rỉ
    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [openModal]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-center gap-x-1">
          <NavLink to="/playlists" className={({ isActive }) => (isActive ? "bg-[#00000066] rounded-2xl" : "")}>
            <p className="button_hero px-3 py-1">Playlists</p>
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? "bg-[#00000066] rounded-2xl" : "")}>
            <p className="button_hero px-3 py-1">Favorites</p>
          </NavLink>
        </div>
        <div>
          <ul className="hidden sm:inline-flex items-center gap-x-1"> 
            <li>
              <p className="button_hero px-3 py-1">Save</p>
            </li>
            <li>
              <p className="button_hero px-3 py-1">Clear</p>
            </li>
            <li>
              <p className="button_hero px-3 py-1">Share</p>
            </li>
            <li>
              <p className="button_hero p-2">
                <OscillationIcon />
              </p>
            </li>
            <li>
              <p className="button_hero p-2">
                <ShuffleIcon />
              </p>
            </li>
          </ul>
          <div className="block sm:hidden relative" ref={modalRef}>
            <div
              className="button_hero p-2"
              onClick={() => {
                setOpenModal((prev) => !prev);
              }}
            >
              <ThreeDotsIcon />
            </div>
            <div
              className={
                "modal_container shadow-box w-35 " +
                (openModal
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0")
              }
            >
              <ul className="">
                <li>
                  <p className="font-medium px-1 py-2">Save</p>
                </li>
                <li>
                  <p className="font-medium px-1 py-2">Clear</p>
                </li>
                <li>
                  <p className="font-medium px-1 py-2">Share</p>
                </li>
                <li>
                  <p className="font-medium px-1 py-2 flex justify-between items-center">
                    Oscillation
                    <OscillationIcon />
                  </p>
                </li>
                <li>
                  <p className="font-medium px-1 py-2 flex justify-between items-center">
                    Shuffle
                    <ShuffleIcon />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavHero;
