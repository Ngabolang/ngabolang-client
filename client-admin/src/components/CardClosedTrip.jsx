import DestModal from "./DestModal";
import DetailModal from "./DetailModal";
import { useNavigate } from "react-router-dom";
export default function CardClosedTrip({ item }) {
  const navigate = useNavigate();

  function handleChat(e) {
    e.preventDefault();
    let trip = item.chatId;
    navigate(`/groupChats/${trip}`);
  }
  function formatDate(dateString) {
    const options = {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  }
  return (
    <div className="card text-white m-3 p-0 shadow ">
      <div className="row">
        <img src={item.imgUrl} className="col-3 rounded" alt="Background" />
        <div className="col-6">
          <h4 className="card-title text-black font-weight-bold mt-2">
            {item.name}
          </h4>
          <h5 className="text-black mt-1">{item.location}</h5>
          <h5 className="text-black mt-1">
            Participants: {item.TripGroups.length}/{item.limit}
          </h5>
          <p className="text-black mt-1">{formatDate(item.date)}</p>
          <p className="text-black mt-1">Category: {item.Category.name}</p>
        </div>
        <div className="col-3 d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-end">
            <DetailModal id={item.id} />
            <DestModal id={item.id} />
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
