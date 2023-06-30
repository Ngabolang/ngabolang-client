import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/ngabolang-long.png";
export default function Sidebar() {
  const navigate = useNavigate();
  async function handlingLogout(e) {
    e.preventDefault();
    localStorage.clear();
    await Swal.fire({
      text: "Logout Success",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/login");
  }

  return (
    <section className="sidebar col-md-3 col-lg-2 shadow bg-ngab text-white">
      <div className="mb-5">
        <img src={logo} className="logo" />
        <h4 className="text-center text-black">Management System</h4>
      </div>

      <div className="sidebar-item fw-bold">
        <i className="bi bi-film p-3"></i>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>
      </div>
      <div className="sidebar-item fw-bold">
        <i className="bi bi-list-task p-3"></i>
        <NavLink
          to="/genre"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          List Genres
        </NavLink>
      </div>
      <div className="sidebar-item fw-bold">
        <i className="bi bi-person-add p-3"></i>
        <NavLink
          to="/newAdmin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Register Admin
        </NavLink>
      </div>

      <div className="sidebar-item mt-3 fw-bold">
        <i className="bi bi-box-arrow-left p-3"></i>
        <a onClick={handlingLogout}>Logout</a>
      </div>
    </section>
  );
}
