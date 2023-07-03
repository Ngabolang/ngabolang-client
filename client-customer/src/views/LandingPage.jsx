import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  async function handleHome(e) {
    e.preventDefault();
    navigate("/home");
  }
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="ml-10 flex flex-grow justify-center items-center">
          <div className="flex p-4">
            <div className="flex flex-col justify-center pr-4">
              <h2 className="text-2xl font-bold mb-2">Ngabolang</h2>
              <div className="mb-4 max-w-sm">
                <p className="text-gray-600 mb-4 break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div>
                <button
                  onClick={handleHome}
                  className="bg-[#20c4ba] hover:bg-[#1ba89f] text-white font-bold py-2 px-4 rounded-xl"
                >
                  Let's GO !
                </button>
              </div>
            </div>
            <div className=" pl-4 flex justify-center">
              <div className="w-[110vh] flex flex-wrap justify-center">
                <div className="w-1/3 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                    alt="Gallery 1"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80"
                    alt="Gallery 2"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1559543881-229123523bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                    alt="Gallery 3"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
