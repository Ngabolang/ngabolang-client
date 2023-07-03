import { useNavigate } from "react-router-dom";
import Star from "./Star";

function TripCard() {
  const navigate = useNavigate();

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

  const id = 22;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  function handleDetail(e) {
    e.preventDefault()
    navigate(`/trip/${id}`);
  }

  return (
    <div className="mx-5 w-80">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="h-40 overflow-hidden">
          <img
            src={trip.imgUrl}
            alt="Card Image"
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {trip.name}
          </h3>
          <p>{trip.location}</p>
          <div className="flex items-center mt-2.5 mb-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div className="flex items-end flex-col">
            <span className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {formatter.format(trip.price)}
            </span>
            <a
              onClick={handleDetail}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
