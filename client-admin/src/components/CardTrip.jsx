import DestModal from "./DestModal";
import DetailModal from "./DetailModal";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTrip } from "../stores/actions/actionCreator";
export default function CardTrip({ item }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  function handleChat(e) {
    e.preventDefault();
    let trip = item.chatId;
    navigate(`/groupChats/${trip}`);
  }

  function updateStatus(e) {
    e.preventDefault();
    dispatch(updateTrip(item.id));
    navigate("/tripClose");
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
          <p className="text-black mt-1">{item.date.split("T")[0]}</p>
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
            <button className="btn btn-success m-2" onClick={updateStatus}>
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
