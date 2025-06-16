import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 18 18"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M9 10A5 5 0 1 1 9 0a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.5 18C2.041 18 1 16.965 1 15.5 1 12.824 4.777 11 9 11c4.193 0 8 1.853 8 4.5 0 1.427-1.053 2.5-2.5 2.5h-11zm0-2h11c.334 0 .5-.17.5-.5 0-1.15-2.773-2.5-6-2.5-3.256 0-6 1.325-6 2.5 0 .358.143.5.5.5z"
              ></path>
              <path d="M0 0h18v18H0z"></path>
            </g>
          </svg>
        </span>

        {/* MODAL  */}
        <div
          className={
            "absolute bg-white top-10 right-0 w-50 h-auto p-2 rounded-xl text-text-second transition-all duration-300 ease-in-out shadow-box " +
            (openModal ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-1 opacity-0 pointer-events-none")
          }
        >
          <div className="flex justify-between gap-y-3 flex-col">
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