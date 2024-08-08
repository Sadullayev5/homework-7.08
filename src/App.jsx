import { useLocation } from "react-router-dom";
import Nav from "./components/Nav"
import RouteController from "./routes/RouteController"


function App() {
  const { pathname } = useLocation();

  return (
    <>
    { pathname ==="/" && <Nav/>}
    <RouteController/>
    </>
  )
}

export default App
