import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function DestinationCard({ destination }) {
  const containerStyle = {
    width: "500px",
    height: "400px",
  };

  const center = {
    lat: +destination.latitude,
    lng: +destination.longitude,
  };

  const position = {
    lat: +destination.latitude,
    lng: +destination.longitude,
  };

  return (
    <div
      className="rounded-lg shadow-lg bg-gray-400 w-full flex flex-row flex-wrap p-3 antialiased"
      style={{
        backgroundImage: `url(${destination.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="md:w-1/3 w-full">
        <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            <Marker position={position} />
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap p-3">
        <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div className="text-2xl text-white font-bold leading-tight">
            {destination.name}
          </div>
          <div className="text-normal mt-3 text-gray-100">
            <span className="  pb-1">Hari ke {destination.labelDay}</span>
          </div>
          <div className="text-lg font-semibold text-gray-100">
            <span className="  pb-1">{destination.activity}</span>
          </div>
          <div className="text-md text-white md:absolute pt-3 md:pt-0 bottom-0 right-0 m-2">
            Start Hour: <b>{destination.startHour}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
