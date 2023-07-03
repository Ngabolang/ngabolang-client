import DetailModal from "./DetailModal";
import { useNavigate } from "react-router-dom";
export default function CardClosedTrip() {
  const navigate = useNavigate();
  const vacation = {
    title: "Summer Vacation",
    youtubeUrl: "https://www.youtube.com/embed/v6eWQqpfuCg",
    image:
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
    description: "Enjoy your summer vacation at a beautiful beach resort.",
    time: "July 15 - July 22, 2023",
    quota: "Limited availability",
    price: "$1000",
    status: "Open for booking",
  };

  function handleChat() {
    let trip = "japan";
    navigate(`/groupChats/${trip}`);
  }

  return (
    <div className="card text-white m-3 p-0 shadow ">
      <div className="row">
        <img
          src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
          className="col-3 rounded"
          alt="Background"
        />
        <div className="col-6">
          <h4 className="card-title text-black font-weight-bold mt-2">
            Pantai Indah Kapuk
          </h4>
          <h5 className="text-black mt-1">Bali</h5>
          <h5 className="text-black mt-1">Participants: 15/30</h5>
          <p className="text-black mt-1">28 maret 2023</p>
          <p className="text-black mt-1">Category: pantai</p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-end">
            <DetailModal vacation={vacation} />
            <button className="btn btn-primary m-2">Destinations</button>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <button className="btn btn-secondary m-2" onClick={handleChat}>
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
