import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function DestModal() {
  const [show, setShow] = useState(false);
  const [vacation, setVacation] = useState({});

  useEffect(() => {
    setVacation({
      name: "Beach Club",
      acitvity: "enjoy beach club",
      labelDay: 1,
      startHour: "17:00",
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const containerStyle = {
    width: "100%",
    height: "200px",
  };

  const center = {
    lat: -8.568110718636364,
    lng: 119.8088147469443,
  };

  const position = {
    lat: -8.568110718636364,
    lng: 119.8088147469443,
  };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <>
      <button className="btn btn-primary m-2" onClick={handleShow}>
        Destinations
      </button>

      {show && (
        <div className="modal show text-black" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Destinations {vacation.name} - </h5>
                <h5 className="modal-title">- Bali</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <div className="card mb-2">
                  <div className="row">
                    <div className="col-7">
                      <h5>{vacation.name}</h5>
                      <p>{vacation.acitvity}</p>
                      <p>Day: {vacation.labelDay}</p>
                      <p>Time: {vacation.startHour}</p>
                    </div>
                    <div className="col-5">
                      <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={13}
                        >
                          <Marker onLoad={onLoad} position={position} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row">
                    <div className="col-7">
                      <h5>{vacation.name}</h5>
                      <p>{vacation.acitvity}</p>
                      <p>Day: {vacation.labelDay}</p>
                      <p>Time: {vacation.startHour}</p>
                    </div>
                    <div className="col-5">
                      <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={13}
                        >
                          <Marker onLoad={onLoad} position={position} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>
                <div className="card mb-2">
                  <div className="row">
                    <div className="col-7">
                      <h5>{vacation.name}</h5>
                      <p>{vacation.acitvity}</p>
                      <p>Day: {vacation.labelDay}</p>
                      <p>Time: {vacation.startHour}</p>
                    </div>
                    <div className="col-5">
                      <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={center}
                          zoom={13}
                        >
                          <Marker onLoad={onLoad} position={position} />
                        </GoogleMap>
                      </LoadScript>
                    </div>
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
