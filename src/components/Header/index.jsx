import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(prev => !prev);
  }

  return (
    <>
      <div className="w-full h-20 flex justify-between items-center shadow-bottom px-5">
        <div className="text-2xl font-bold">
          <Link to="/">Soundify</Link>
        </div>
        <div className="flex-center gap-x-5">
          <div className="">
            <span className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M14.217 3.622a1 1 0 1 1 1.566-1.244C17.26 4.24 18 6.46 18 9c0 2.54-.74 4.76-2.217 6.622a1 1 0 1 1-1.566-1.244C15.407 12.878 16 11.098 16 9c0-2.099-.593-3.879-1.783-5.378z"></path><path fill="currentColor" fill-rule="nonzero" d="M12.168 6.555a1 1 0 1 1 1.664-1.11C14.603 6.602 15 7.792 15 9c0 1.208-.397 2.398-1.168 3.555a1 1 0 1 1-1.664-1.11C12.73 10.602 13 9.792 13 9c0-.792-.27-1.602-.832-2.445zM3.586 5l4-4A2 2 0 0 1 11 2.414v13.172A2 2 0 0 1 7.586 17l-4-4H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1.586zm1.121 1.707A1 1 0 0 1 4 7H2v4h2a1 1 0 0 1 .707.293L9 15.586V2.414L4.707 6.707z"></path><path d="M0 0h18v18H0z"></path></g></svg>
            </span>
          </div>
          <div className="">
            <Link to="/todos" className="button">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 16L16.1 18.5L20 13.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 6L3 6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path> <path d="M21 10L3 10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path> <path d="M10 14H3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path> <path d="M10 18H3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            </Link>
          </div>
          <div className="relative" onClick={handleActive}>
            <span className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M9 10A5 5 0 1 1 9 0a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3.5 18C2.041 18 1 16.965 1 15.5 1 12.824 4.777 11 9 11c4.193 0 8 1.853 8 4.5 0 1.427-1.053 2.5-2.5 2.5h-11zm0-2h11c.334 0 .5-.17.5-.5 0-1.15-2.773-2.5-6-2.5-3.256 0-6 1.325-6 2.5 0 .358.143.5.5.5z"></path><path d="M0 0h18v18H0z"></path></g></svg>
            </span>
            <div className={"absolute bg-white top-10 right-0 w-50 h-70 py-5 rounded-tl-xl rounded-b-xl text-text-second transition-opacity duration-300 ease-in-out shadow-sm shadow-gray-50" + (active ? ("visible opacity-100") : ("invisible opacity-0"))}>
              <div className="flex justify-between gap-y-5 flex-col text-sm font-medium">
                <ul>
                  <li className="cursor-pointer py-3 px-5 hover:bg-gray-50">Test</li>
                  <li className="cursor-pointer py-3 px-5 hover:bg-gray-50">Test2</li>
                  <li className="cursor-pointer py-3 px-5 hover:bg-gray-50">Test3</li>
                  <li className="cursor-pointer py-3 px-5 hover:bg-gray-50">Test4</li>
                </ul>
                <div className="cursor-pointer py-3 px-5 hover:bg-gray-50">Sign out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;