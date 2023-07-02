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
                <button
                onClick={handleHome}
                className="bg-[#20c4ba] hover:bg-[#1ba89f] text-white font-bold py-2 px-4 rounded-xl">
                  Let's GO !
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
