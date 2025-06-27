import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../icon";

function UserAccount() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  // check click outside
  useEffect(() => {
    let handleModal = (e) => {
      if (openModal && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    // bắt sự kiện khi click chuột
    document.addEventListener("mousedown", handleModal);

    // clear event tránh rò rỉ
    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [openModal]);


  return (
    <>
      <div className="relative" ref={modalRef}>
        <span
          className="button"
          onClick={() => {
            setOpenModal(prev => !prev);
          }}
        >
          <UserIcon />
        </span>

        {/* MODAL  */}
        <div
          className={
            "modal_container shadow-box w-50 " +
            (openModal ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-1 opacity-0 pointer-events-none")
          }
        >
          <div className="flex justify-between flex-col">
            <ul>
              <li>
                <Link to="/account">
                  <p className="hover-selector">Account</p>
                </Link>
              </li>
              <li >
                <Link to="/support" target="_blank">
                  <p className="hover-selector">Support center</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" target="_blank">
                  <p className="hover-selector">Contact us</p>
                </Link>
              </li>
            </ul>
            <div className="border-1 border-gray-100 w-40 mx-auto"></div>
            <div>
              <p className="hover-selector text-red-500">Sign out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 

export default UserAccount;