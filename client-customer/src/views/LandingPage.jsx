import logo from "../assets/ngabolang.png";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <nav className="flex items-center justify-between p-4 mx-40 text-black">
          <div className="flex items-center">
            <div className="mr-10">
              <img src={logo} alt="Logo" className="w-[14vh]" />
            </div>
            <div className="flex items-center">
              <a href="/" className="mx-3 hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="mx-3 hover:text-gray-400">
                About
              </a>
              <a href="/contact" className="mx-3 hover:text-gray-400">
                Contact
              </a>
            </div>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </nav>
        <div className="flex flex-grow justify-center items-center">
          <div className="flex w-1/2 p-4">
            <div className="w-1/2 flex flex-col justify-center pr-4">
              <h2 className="text-2xl font-bold mb-2">Title</h2>
              <div className="mb-4 max-w-sm">
                <p className="text-gray-600 mb-4 break-words">
                  asdnajsfasadasadaskfajsfnsajkfnkasfanjasdassnsfkakjfsnakjfnasjfnasfnasjfnasjkfasfasfaskfasfasfasfasfjafafjasfasfafasfasfasafasfjaenfjasdasdasndkasndskjadk
                </p>
              </div>
              <div>
                <button className="bg-[#20c4ba] hover:bg-[#1ba89f] text-white font-bold py-2 px-4 rounded">
                  Let's Go !
                </button>
              </div>
            </div>
            <div className="w-1/2 pl-4 flex justify-center">
              <div className="w-2/3 flex flex-wrap justify-center">
                <div className="w-1/3 p-2">
                  <img
                    src="/path/to/image1.jpg"
                    alt="Gallery 1"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <img
                    src="/path/to/image2.jpg"
                    alt="Gallery 2"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3 p-2">
                  <img
                    src="/path/to/image3.jpg"
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
