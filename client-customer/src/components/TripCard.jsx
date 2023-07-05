import { useNavigate } from "react-router-dom";
import Star from "./Star";

function TripCard({ trip }) {
  const navigate = useNavigate();

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  function handleDetail(e) {
    e.preventDefault();
    navigate(`/trip/detail/${trip.id}`);
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
          <div className="h-14">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {trip.name}
          </h3>
          </div>
         
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
              className="text-white bg-[#1db5ab] hover:bg-[#19a097] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            >
              Lihat detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
