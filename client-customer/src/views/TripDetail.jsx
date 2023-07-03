import { useParams } from "react-router-dom";
import { useEffect } from "react";

import DestinationCarousel from "../components/DestinationCarousel";

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

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">JALAN JALAN KE TRIP {id}</p>
          <p className="py-3">sdadadadadsadasdadsdsasds</p>
        </div>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">Destinations</p>
          <DestinationCarousel cards={destinations}></DestinationCarousel>
        </div>
      </section>
    </>
  );
}
