import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../store/actions/actionCreator";

export default function Trips() {
  const [isLoading, setIsLoading] = useState(true);
  const {trips} = useSelector((state) => {
    return state.trip;
  });
  // console.log(trips);

  function filterLodging() {
    return "GG";
  }

  function searchLodging() {
    return "GG";
  }

  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchTrips())
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return (
      <img
        className="w-full h-60 scale-50"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        alt=""
      />
    );
  }

  return (
    <>
      <div className="container mx-auto my-40 px-10">
        <div className="flex gap-8 m-10">
          <select
            onChange={filterLodging}
            className="relative cursor-pointer pb-1 border-b border-gray-400 text-sm font-medium transition hover:border-gray-600 "
          >
            <option disabled>
              Filter berdasarkan kategori
            </option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
            <option value="type.id">GG</option>
          </select>

          <div className="flex gap-4">
            <input
              type="search"
              className="w-auto rounded-lg border border-gray-300 text-sm shadow-sm px-4"
              placeholder="Cari trip"
            />
            <button
              onClick={searchLodging}
              className="block rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Cari
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {trips.map((el, index) => (
          <TripCard key={index} trip={el}></TripCard>
        ))}
        </div>
      </div>
    </>
  );
}
