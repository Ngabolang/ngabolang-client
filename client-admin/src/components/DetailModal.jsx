import { useEffect, useState } from "react";
import { fetchDetailTrip } from "../stores/actions/actionType";
import { useDispatch, useSelector } from "react-redux";
import CardParticipants from "./CardParticipants";
export default function DetailModal({ id }) {
  const dispatch = useDispatch();
  const { trip } = useSelector((state) => state.trip);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    dispatch(fetchDetailTrip(id))
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [show]);
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Detail
      </button>

      {show && (
        <div
          className="modal show text-black "
          style={{
            display: "flex",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{trip.name} - </h5>
                <h5 className="modal-title">- {trip.location}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <div className="video-wrapper">
                  {/* YouTube Video Frame */}
                  <iframe
                    width="100%"
                    height="315"
                    src={trip.videoUrl}
                    title={trip.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="vacation-details">
                  {/* Vacation Image */}
                  <img
                    src={trip.imgUrl}
                    alt={trip.name}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />

                  {/* Other details */}
                  <h5>Description:</h5>
                  <p>{trip.description}</p>

                  <h5>Start Date:</h5>
                  <p>{trip.date.split("T")[0]}</p>

                  <h5>Duration:</h5>
                  <p>{trip.duration} Day</p>

                  <h5>Quota:</h5>
                  <p>
                    {trip.TripGroups.length}/{trip.limit} Person
                  </p>

                  <h5>Price:</h5>
                  <p>{formatter.format(trip.price)}</p>

                  <h5>Status:</h5>
                  <p>{trip.status ? "Active" : "Completed"}</p>

                  <h5>Participants:</h5>
                  <div className="d-flex align-content-start flex-wrap">
                    {trip.TripGroups.map((item) => (
                      <CardParticipants item={item.User} key={item.id} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
