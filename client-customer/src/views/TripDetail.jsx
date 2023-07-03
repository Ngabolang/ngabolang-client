import { useParams, } from "react-router-dom";
import { useEffect } from "react";
import DestinationCarousel from "../components/DestinationCarousel";
import { useDispatch } from "react-redux";
import { paymentGateway } from "../store/actions/actionCreator";

export default function TripDetail() {
  const dispatch=useDispatch()
  const { id } = useParams();
  const vacation = {
    youtubeUrl: "https://www.youtube.com/embed/Bl0s-1c5L0M",
    title: "acanana",
  };

  async function handlePay(){
    dispatch(paymentGateway(id))
  }

  const trip = {
    id: 1,
    name: "Wisata Labuan Bajo Sailing Komodo",
    categoryId: 1,
    adminId: 3,
    date: "2023-08-17T00:00:00.000Z",
    price: 2000000,
    status: true,
    imgUrl:
      "https://res.klook.com/image/upload/Mobile/City/rv76yqukp2hey0fckh99.jpg",
    videoUrl: "https://www.youtube.com/watch?v=kQIri35Yjds",
    duration: 3,
    meetingPoint: "Jakarta",
    location: "Nusa Tenggara Timur",
    limit: 30,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat architecto necessitatibus tempora molestias explicabo delectus distinctio cupiditate esse totam, quibusdam ea vitae fugit natus numquam cumque, quisquam accusamus quis quam.",
    chatId: "wisata-labuan-bajo-sailing-komodo",
    createdAt: "2023-07-03T01:09:28.291Z",
    updatedAt: "2023-07-03T01:09:28.291Z",
    Category: {
      id: 1,
      name: "Beaches",
      imgUrl:
        "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&uid=R41671461&ga=GA1.2.468604856.1683977961&semt=sph",
      createdAt: "2023-07-03T01:09:28.285Z",
      updatedAt: "2023-07-03T01:09:28.285Z",
    },
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
          <p className="text-3xl py-3 font-bold">{trip.name}</p>
          <p className="py-3">{trip.description}</p>
          <p className="py-3">Meeting Point: {trip.meetingPoint}</p>
          <p className="py-3">Location: {trip.location}</p>
          <p className="py-3">Limit: {trip.limit}</p>
          <p className="py-3">Category: {trip.Category.name}</p>
          <p className="py-3">Price: {trip.price}</p>
        </div>
        <button
        onClick={handlePay}
        className="bg-green-500 px-10 rounded-xl text-white"
        >BELI</button>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">Destinations</p>
          <DestinationCarousel cards={destinations}></DestinationCarousel>
        </div>
      </section>
    </>
  );
}
