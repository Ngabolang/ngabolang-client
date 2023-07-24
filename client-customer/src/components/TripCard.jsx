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
    <div 
    onClick={handleDetail}
    className="mx-2 w-[20vh] cursor-pointer">
      <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="h-[12vh] overflow-hidden">
          <img
            src={trip.imgUrl}
            alt="Card Image"
            className="object-cover w-full h-full rounded-t-lg"
          />
        </div>
        <div className="px-2 py-2">
          <div className="h-[7vh]">
          <h3 className="text-gray-900 font-semibold text-sm tracking-tight dark:text-white">
            {trip.name}
          </h3>
          </div>
          <div className="text-xs h-4">
          <p>{trip.location}</p>
          </div>
         
          <div className="flex items-center my-2">
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
            <span className="text-xs font-bold text-gray-900 dark:text-white mb-3">
              {formatter.format(trip.price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripCard;
