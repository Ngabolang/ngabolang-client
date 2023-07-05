import { useEffect, useState } from "react";
import TripCard from "../components/TripCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchSearchTrips,
  fetchTrips,
} from "../store/actions/actionCreator";
import { useNavigate, useParams } from "react-router-dom";

export default function Trips() {
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const { trips, categories } = useSelector((state) => {
    return state.trip;
  });
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function filterTrip(event) {
    if (event.target.value === "semua") {
      navigate(`/trip/`);
    } else {
      navigate(`/trip/${event.target.value}`);
    }
  }

  function handleTripSearch(event) {
    dispatch(fetchSearchTrips(inputText));
  }

  function inputHandler(event) {
    setInputText(event.target.value);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCategories());
    dispatch(fetchTrips(category))
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          className=" scale-100 w-[60vh]"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt=""
        />
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto my-40 px-10">
        <div className="flex gap-8 m-10">
          <select
            onChange={filterTrip}
            className="relative cursor-pointer pb-1 border-b border-gray-400 text-sm font-medium transition hover:border-gray-600 "
          >
            <option value="semua">Tampilkan semua</option>
            {categories.map((el, index) => (
              <option key={index} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>

          <div className="flex gap-4">
            <input
              onChange={inputHandler}
              type="search"
              className="w-auto rounded-lg border border-gray-300 text-sm shadow-sm px-4"
              placeholder="Cari trip"
            />
            <button
              onClick={handleTripSearch}
              className="block rounded-md bg-[#1db5ab] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#19958c]"
            >
              Cari
            </button>
          </div>
        </div>

        {trips.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {trips.map((el, index) => (
              <TripCard key={index} trip={el}></TripCard>
            ))}
          </div>
        ) : (
          <div className="h-[30vh] items-center justify-center flex">
            <p>Trip tidak ditemukan</p>
          </div>
        )}
      </div>
    </>
  );
}
