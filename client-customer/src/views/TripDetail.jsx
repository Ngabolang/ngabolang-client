import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function TripDetail() {
  const { id } = useParams();
  const vacation = {
    youtubeUrl: "https://www.youtube.com/embed/Bl0s-1c5L0M",
    title: "acanana",
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
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

  useEffect(() => {
  
  }, []);

  return (
    <>
      <section className="py-6 mt-40 mx-[40vh] dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
        </div>

        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Bl0s-1c5L0M"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="m-10">
          <p className="text-3xl py-3 font-bold">JALAN JALAN KE TRIP {id}</p>
          <p className="py-3">sdadadadadsadasdadsdsasds</p>
        </div>

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
      </section>
    </>
  );
}
