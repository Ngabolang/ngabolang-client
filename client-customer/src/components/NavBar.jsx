import { useNavigate } from "react-router-dom";
import logo from "../assets/ngabolang.png";
import Swal from 'sweetalert2'

function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.access_token;
  
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
    navigate("/trip");
  }

  async function handleCategory(e) {
    e.preventDefault();
    navigate("/categories");
  }

  async function handleMyTrip(e) {
    e.preventDefault();
    navigate("/mytrip");
  }

  async function handleLogOut(e) {
    e.preventDefault();
    localStorage.clear();
    await Swal.fire({
      icon: 'success',
      title: 'Akun berhasil keluar',
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/");
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
    <nav className="fixed top-0 z-50 flex items-center justify-between px-40 bg-white text-black w-screen shadow-md py-1">
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
          <a
            onClick={handleCategory}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Kategori
          </a>
        </div>
      </div>
      {token ? (
        <div>
          <a
            onClick={handleMyTrip}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Trip Saya
          </a>
          <a
            onClick={handleLogOut}
            className="mx-3 hover:text-gray-400 cursor-pointer"
          >
            Keluar
          </a>
        </div>
      ) : (
        <div>
          <button
            onClick={handleLogin}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Masuk
          </button>
          <button
            onClick={handleRegister}
            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded"
          >
            Daftar
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
