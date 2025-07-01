import { NavLink } from "react-router-dom";
import {
  ShuffleIcon,
} from "../../components/icon";
import { useEffect, useRef, useState } from "react";

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
          <ul className="inline-flex items-center gap-x-1"> 
            <li>
              <p className="button_hero px-3 py-1">Save</p>
            </li>
            <li>
              <p className="button_hero p-2">
                <ShuffleIcon />
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavHero;
