import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/actions/actionCreator";
import axios from "axios";
import logo from "../assets/ngabolang.png";

function RegisterCustomerView() {
  // local state
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    photoProfile: "",
    address: "",
    // role:'customer'
  });

  // global state
  const [isLoading, setIsLoading] = useState(true);

  // requirement
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function
  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      let { data } = await axios({
        method: "post",
        url: "https://api.imgur.com/3/upload",
        headers: {
          Authorization: "Client-ID afd82e67ae0ee83",
        },
        data: formData,
      });

      let { link } = data.data;
      console.log(link);
      setForm({
        ...form,
        photoProfile: link,
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleAbout(e) {
    e.preventDefault();
    navigate("/");
  }

  async function handleRegister(e) {
    e.preventDefault();
    dispatch(registerUser(form))
      .then((result) => {
        navigate("/login");
      })
      .catch((err) => {});
  }
  // lifecycle
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage: `url('https://images-ext-2.discordapp.net/external/bQPOqdpkVQ4OUwvRNq81DAo7cw9GTOq96aQjpFCf-cA/%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D1925%26q%3D80/https/images.unsplash.com/photo-1604999333679-b86d54738315?width=1162&height=930')`,
            }}
          ></div>

          <div className="flex items-center w-full max-w-3xl p-8 mb-10 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <div className=" flex items-center justify-center">
                <img src={logo} alt="" className="w-[23vh] mb-10" />
              </div>
              <h1 className="text-3xl font-semibold tracking-wider text-gray-800 dark:text-white">
                Get's started your journey.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Daftarkan diri dan lengkapi profil anda untuk memulai perjalanan travelling yang tak terlupakan bersama kami!
              </p>

              <form>
                <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Username
                    </label>
                    <input
                      onChange={handleForm}
                      name="username"
                      type="text"
                      placeholder="John"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleForm}
                      name="password"
                      type="password"
                      placeholder="Masukan kata sandi anda disini"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Phone number
                    </label>
                    <input
                      onChange={handleForm}
                      name="phoneNumber"
                      type="text"
                      placeholder="XXX-XX-XXXX-XXX"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email address
                    </label>
                    <input
                      onChange={handleForm}
                      name="email"
                      type="email"
                      placeholder="johnsnow@example.com"
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>
                <div className="my-4">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <textarea
                    onChange={handleForm}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Masukan alamat anda disini"
                    rows="4"
                    name="address"
                  ></textarea>
                </div>
                <div className="my-4">
                  <label
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    htmlFor="photoProfile"
                  >
                    Photo Profile
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    name="photoProfile"
                  />
                  {form.photoProfile && (
                    <img className="w-40 mt-3" src={form.photoProfile} />
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleRegister}
                    className="flex items-center justify-between w-60 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#20c4ba] rounded-md hover:bg-[#1ba89f] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    <span>Daftar</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleAbout}
                    className="flex items-center justify-between w-60 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-400 rounded-md hover:bg-rose-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    <span>Kembali</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegisterCustomerView;
