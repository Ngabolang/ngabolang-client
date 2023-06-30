import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
