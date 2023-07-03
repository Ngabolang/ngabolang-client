import { useEffect, useState } from "react";
export default function DetailModal({ vacation }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Detail
      </button>

      {show && (
        <div className="modal show text-black" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{vacation.title} - </h5>
                <h5 className="modal-title">- Bali</h5>
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
                    src={vacation.youtubeUrl}
                    title={vacation.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="vacation-details">
                  {/* Vacation Image */}
                  <img
                    src={vacation.image}
                    alt={vacation.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  />

                  {/* Other details */}
                  <h5>Description:</h5>
                  <p>{vacation.description}</p>

                  <h5>Start Date:</h5>
                  <p>{vacation.time}</p>

                  <h5>Duration:</h5>
                  <p>3 Day</p>

                  <h5>Quota:</h5>
                  <p>{vacation.quota}</p>

                  <h5>Price:</h5>
                  <p>{vacation.price}</p>

                  <h5>Status:</h5>
                  <p>{vacation.status}</p>
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
