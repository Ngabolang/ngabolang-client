import { useEffect, useState } from "react";

import { fetchDestTrip } from "../stores/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import CardDest from "./CardDest";
export default function DestModal({ id }) {
  const dispatch = useDispatch();
  const { dest } = useSelector((state) => state.trip);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  let center;
  let position;
  useEffect(() => {
    dispatch(fetchDestTrip(id))
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, [show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleShow}>
        Destinations
      </button>

      {show && (
        <div
          className="modal show text-black"
          style={{ display: "block", backdropFilter: "blur(5px)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Destinations - </h5>
                <h5 className="modal-title">- Bali</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                {dest.map((item, index) => (
                  <CardDest item={item} key={item.id} index={index} />
                ))}
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
