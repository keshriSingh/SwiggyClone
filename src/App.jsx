import { Outlet } from "react-router"
import { useSelector } from "react-redux"

function App() {
  const visible = useSelector(state=>state.searchSlice.visible);
  const sign = useSelector(state=>state.searchSlice.sign)
  return (
  <div className={`${visible?'h-screen w-full overflow-hidden':''}${sign?'h-screen w-full overflow-hidden':''}`}>
  <Outlet/>
  </div>
  )
}

export default App
