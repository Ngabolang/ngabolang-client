import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
export default function CardDest({ item }) {
  const containerStyle = {
    width: "100%",
    height: "200px",
  };

  const center = {
    lat: Number(item.latitude),
    lng: Number(item.longitude),
  };

  const position = {
    lat: Number(item.latitude),
    lng: Number(item.longitude),
  };
  return (
    <div className="card mb-2">
      <div className="row">
        <div className="col-5">
          <h5>{item.name}</h5>
          <p>Activity: {item.activity}</p>
          <p>Day: {item.labelDay}</p>
          <p>Time: {item.startHour}</p>
        </div>
        <div className="col-7">
          <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker position={position} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </div>
  );
}
