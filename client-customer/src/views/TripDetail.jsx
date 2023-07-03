import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Slider from 'react-slick';

export default function TripDetail() {
  const { id } = useParams();
  const vacation = {
    youtubeUrl: "https://www.youtube.com/embed/Bl0s-1c5L0M",
    title: "acanana",
  };

  const destinations = [
    {
      id: 1,
      tripId: 1,
      name: "Pulau Kelor",
      imgUrl:
        "https://lh5.googleusercontent.com/p/AF1QipPaE5Bmj1nDSYGuDWEZRrhUx9NFEnQ1AOL-Chrs=w408-h306-k-no",
      labelDay: 1,
      startHour: "09:00:00",
      longitude: "119.81622416875352",
      latitude: "-8.54673581674982",
      activity: "makan",
      placeId: "ChIJ13oeH8dgtC0Rp2THGQWY6Ck",
    },
    {
      id: 1,
      tripId: 1,
      name: "Pulau Kelor",
      imgUrl:
        "https://lh5.googleusercontent.com/p/AF1QipPaE5Bmj1nDSYGuDWEZRrhUx9NFEnQ1AOL-Chrs=w408-h306-k-no",
      labelDay: 1,
      startHour: "09:00:00",
      longitude: "119.81622416875352",
      latitude: "-8.54673581674982",
      activity: "makan",
      placeId: "ChIJ13oeH8dgtC0Rp2THGQWY6Ck",
    },
    {
      id: 1,
      tripId: 1,
      name: "Pulau Kelor",
      imgUrl:
        "https://lh5.googleusercontent.com/p/AF1QipPaE5Bmj1nDSYGuDWEZRrhUx9NFEnQ1AOL-Chrs=w408-h306-k-no",
      labelDay: 1,
      startHour: "09:00:00",
      longitude: "119.81622416875352",
      latitude: "-8.54673581674982",
      activity: "makan",
      placeId: "ChIJ13oeH8dgtC0Rp2THGQWY6Ck",
    },
  ];

  const Carousel = ({ cards }) => {

  const containerStyle = {
    width: "500px",
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
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div
          key={index}
          class="rounded-lg shadow-lg bg-gray-200 w-full flex flex-row flex-wrap p-3 antialiased"
          style={{
            backgroundImage: `url(${card.imgUrl})`,
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
        ))}
      </Slider>
    );
  };


  useEffect(() => {}, []);

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

        <Carousel cards={cards} />

        


      </section>
    </>
  );
}
