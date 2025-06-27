import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, autoTheme } from "./themeSlice";
import { CheckedIcon, ThemeIcon } from "../../components/icon";

function ThemeMenu() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const { currentTheme, themes, mixTheme } = theme;

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
  
  // thay đổi theme theo id
  let handleChangeTheme = (themeId) => {
    if (currentTheme.id !== themeId) {
      dispatch(setTheme(themeId));
    } 
  };

  
  // set theme tự động
  const toggleAutoTheme = () => {
    dispatch(autoTheme(true));
  }
  

  return (
    <>
      <div className="relative" ref={modalRef}>
        <span
          className="button"
          onClick={() => {
            setOpenModal((prev) => !prev);
          }}
        >
          <ThemeIcon />
        </span>

        {/* MODAL */}
        <div
          className={
            "modal_container shadow-box w-50 " +
            (openModal
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0")
          }
        >
          {/* THEME ITEM */}
          {themes && (
            <ul className="">
              {themes.map((theme) => (
                <li
                  key={theme.id}
                  // hàm sự kiện onClick
                  onClick={() => {
                    handleChangeTheme(theme.id);
                  }}
                >
                  <p className="flex justify-between items-center overflow-auto hover-selector">
                    {theme.name}
                    {theme.id === currentTheme.id ? (
                      <CheckedIcon />
                    ) : (
                      ""
                    )}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <div className="border-1 w-[calc(208px-20%)] mx-auto border-[#F3F4F6]"></div>
          <p className="flex justify-between items-center overflow-auto hover-selector" onClick={toggleAutoTheme}>
            Mix all
            {mixTheme ? <CheckedIcon /> : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default ThemeMenu;
