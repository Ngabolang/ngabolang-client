import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DestinationCarousel from "../components/DestinationCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  createMytrip,
  fetchTripDetail,
} from "../store/actions/actionCreator";
import ImageDestination from "../components/ImageDestination";
import Participant from "../components/Participant";
import CustomerService from "../components/CustomerService";
import Swal from "sweetalert2";

export default function TripDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const { trip } = useSelector((state) => {
    return state.trip;
  });
  // console.log(trip[0],TripGroups);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.access_token;
  function handlePay() {
    if (token) {
      dispatch(createMytrip(id))
        .then((result) => {
          navigate("/mytrip");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: `Login terlebih dahulu`,
      });
      navigate("/login");
    }
  }

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(fetchTripDetail(id))
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      <section className="py-6 mt-40 mx-[40vh] dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={trip[0].imgUrl}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          {trip[0].Destinations.map((el, index) => (
            <ImageDestination key={index} image={el.imgUrl}></ImageDestination>
          ))}
        </div>
        <div className=" items-center flex justify-center my-4">
          <iframe
            width="80%"
            height="450"
            src={
              `https://www.youtube.com/embed/` +
              trip[0].videoUrl.split("?v=")[1]
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">{trip[0].name}</p>
          <p className="py-3">{trip[0].description}</p>
        </div>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">Destinasi Trip</p>
          <div className="w-[120vh] ml-20">
            <DestinationCarousel
            cards={trip[0].Destinations}
          ></DestinationCarousel>
          </div>
          
        </div>

        <div className="flex justify-between">
          <div>
            <p className="py-3">Meeting Point: {trip[0].meetingPoint}</p>
            <p className="py-3">Location: {trip[0].location}</p>
            <p className="py-3">
              Participants: {trip[0].TripGroups.length} / {trip[0].limit}
            </p>
            <p className="py-3">Start Date: {trip[0].date}</p>
            <p className="py-3">Category: {trip[0].Category.name}</p>
            <p className="py-3">Price: {formatter.format(trip[0].price)}</p>
            <button
              onClick={handlePay}
              className="bg-green-500 px-10 rounded-lg py-2 shadow-md text-white"
            >
              <p className="font-bold"> Tambahkan</p>
            </button>
          </div>
          <div>
            <div className="p-4 bg-white rounded-lg shadow-md sm:p-8 mx-5 w-[50vh] dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Participants
                </h3>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {trip[0].TripGroups.map((el, index) => (
                    <Participant key={index} user={el.User}></Participant>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-1">
        {token ? (
          <CustomerService admin={trip[0].User}></CustomerService>
        ) : (
          <p></p>
        )}
        </div>
        
      </section>
    </>
  );
}
