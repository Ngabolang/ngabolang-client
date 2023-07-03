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

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <div
      class="rounded-lg shadow-lg bg-gray-200 w-full flex flex-row flex-wrap p-3 antialiased"
      style={{
        backgroundImage: `url(${destination.imgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
      }}
    >
      <div class="md:w-1/3 w-full">
        <LoadScript googleMapsApiKey="AIzaSyDX5Eak21bfqjXb0Un9RJip6_RHOaJDDug">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            <Marker onLoad={onLoad} position={position} />
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
      <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
        <div class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
          <div class="text-2xl text-white leading-tight">Admin User</div>
          <div class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
            <span class="border-b border-dashed border-gray-500 pb-1">
              Administrator
            </span>
          </div>
          <div class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0">
            Last Seen: <b>2 days ago</b>
          </div>
        </div>
      </div>
    </div>
  );
}
