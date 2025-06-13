import { useEffect, useRef, useState } from "react";

function ThemeToggle() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();


  useEffect(() => {
    let handleModal = (e) => {
      if(!modalRef.current.contains(e.target)) {
        setOpenModal(false);
      }
    }

    // bắt sự kiện khi người click ra ngoài
    if(openModal) {
      document.addEventListener("mousedown", handleModal);
    }
    
    // return để gỡ event tránh rò rỉ 
    return() => {
      document.removeEventListener("mousedown", handleModal);
    }
  }, [openModal]);  

  return (
    <>
      <div className="relative" ref={modalRef}>
        <span className="button" onClick={() => {setOpenModal(prev => !prev)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 3l0 18"></path><path d="M12 9l4.65 -4.65"></path><path d="M12 14.3l7.37 -7.37"></path><path d="M12 19.6l8.85 -8.85"></path></svg></span>

        {/* MODAL */}
        <div className={"absolute top-10 right-0 bg-amber-50 w-32 h-30 text-black shadow-sm shadow-gray-50 rounded-lg pointer-events-auto transition-all duration-300 ease-in-out " + (openModal ? ("translate-y-0 opacity-100") : ("pointer-events-none -translate-y-1 opacity-0"))}>
          Modal
        </div>
      </div>
    </>
  )
}

export default ThemeToggle;