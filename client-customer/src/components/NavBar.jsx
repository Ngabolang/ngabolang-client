import { useNavigate } from "react-router-dom";
import logo from "../assets/ngabolang.png";

function NavBar() {
  const navigate = useNavigate();

  async function handleHome(e) {
    e.preventDefault();
    navigate("/home");
  }
  async function handleAbout(e) {
    e.preventDefault();
    navigate("/");
  }
  async function handleTrip(e) {
    e.preventDefault();
    navigate("/mytrip");
  }

  async function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  async function handleRegister(e) {
    e.preventDefault();
    navigate("/register");
  }

  return (
    <nav className="fixed top-0 z-50 flex items-center justify-between px-40 bg-white text-black w-screen">
      <div className="flex items-center my-3">
        <div className="mr-10 cursor-pointer" onClick={handleAbout}>
          <img src={logo} alt="Logo" className="w-[14vh]" />
        </div>
        <div className="flex items-center">
          <a
            onClick={handleAbout}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Tentang Kami
          </a>
          <a
            onClick={handleHome}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Beranda
          </a>
          <a
            onClick={handleTrip}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Trip
          </a>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Masuk
        </button>
        <button
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Daftar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
