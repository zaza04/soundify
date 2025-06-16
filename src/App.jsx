import AllRouter from "./components/AllRouter"
import { useSelector } from "react-redux";
// import ItemTest from "./components/Item"

function App() {
  const { currentTheme } = useSelector(state => state.theme);

  console.log(currentTheme.name);
  
  return (
    <>
      <div style={{ backgroundColor: currentTheme.colorCode }}>
        <AllRouter />
      </div>
      {/* <ItemTest /> */}
    </>
  )
}

export default App