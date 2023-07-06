import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DestinationCarousel from "../components/DestinationCarousel";
import { useDispatch, useSelector } from "react-redux";
import { createMytrip, fetchTripDetail } from "../store/actions/actionCreator";
import ImageDestination from "../components/ImageDestination";
import Participant from "../components/Participant";
import CustomerService from "../components/CustomerService";
import Swal from "sweetalert2";

export default function TripDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const { trip } = useSelector((state) => {
    return state.trip;
  });
  // console.log(trip[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const token = localStorage.access_token;

  function formatDate(dateString) {
    const options = {
      day: "numeric",
      month: "long",
      weekday: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  }

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

  function handleCategory() {
    navigate("/trip/" + trip[0].Category.name);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section className="py-6 mt-20 mx-[40vh] dark:bg-gray-800 dark:text-gray-50">
        <div className="my-10">
          <div className="flex">
            <a
              className=" cursor-pointer underline hover:text-gray-500"
              onClick={handleCategory}
            >
              <p className="pr-2">{trip[0].Category.name}</p>
            </a>
            <p className="pr-2">.</p>
            <p>{trip[0].location}</p>
          </div>

          <p className="text-3xl py-3 font-bold">{trip[0].name}</p>
          <p className="text-2xl ml-2 font-bold">
            {formatter.format(trip[0].price)}
          </p>
        </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={trip[0].imgUrl}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          {trip[0].Destinations.slice(0, 4).map((el, index) => (
            <ImageDestination key={index} image={el.imgUrl}></ImageDestination>
          ))}
        </div>
        <div className=" items-center flex justify-center my-10">
          <iframe
            width="94%"
            height="480"
            src={trip[0].videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        </div>
        <hr></hr>
        <div className="flex justify-between mb-10">
          <div>
            <div className="mt-10 w-[60vh]">
              <p className="text-3xl py-3 text-gray-800 font-semibold">
                Deskripsi
              </p>
              <p className="py-3">{trip[0].description}</p>
            </div>
            <div className="mt-10 w-[60vh]">
              <p className="text-3xl py-3 text-gray-800 font-semibold">
                Info Detail
              </p>
              <p className="py-2">
                <i className="fa-sharp fa-solid fa-arrows-to-circle"></i> Titik
                kumpul: {trip[0].meetingPoint}
              </p>
              <p className="py-2">
                <i className="fa-sharp fa-solid fa-location-dot"></i> Lokasi
                perjalanan: {trip[0].location}
              </p>
              <p className="py-2">
                <i className="fa-solid fa-person"></i> Jumlah Peserta:{" "}
                {trip[0].TripGroups.length} dari {trip[0].limit} terisi
              </p>
              <p className="py-2">
                <i className="fa-solid fa-calendar-days"></i> Tanggal berangkat:{" "}
                {formatDate(trip[0].date)}
              </p>
              <p className="py-2">
                <i className="fa-solid fa-clock"></i> Waktu perjalanan:{" "}
                {trip[0].duration} hari
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col w-[40vh] mr-10">
            <div className="mb-3">
              <div className=" border-1 border-gray-200 border-opacity-60 rounded-lg shadow-lg">
                <div className="m-5 flex flex-col">
                  <h2 className=" inline-block text-lg font-semibold m-2 text-center">
                    {trip[0].name}
                  </h2>
                  <hr></hr>
                  <h2 className="text-md mt-2 text-gray-500">Harga trip</h2>

                  <div className="">
                    <h1 className=" font-bold inline-block text-xl text-gray-800 ">
                      {formatter.format(trip[0].price)}
                    </h1>
                  </div>
                  {trip[0].status ? (
                    <button
                      onClick={handlePay}
                      className="bg-[#1db5ab] hover:bg-[#199a91] w-full my-3 rounded-lg py-2 shadow-md text-white"
                    >
                      <p className="font-bold"> Pesan Trip Sekarang</p>
                    </button>
                  ) : (
                    <button className=" w-full my-3 rounded-lg py-2 ">
                      <p className="font-bold"> Trip tidak tersedia</p>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className=" border-1 border-gray-200 border-opacity-60 p-4 bg-white rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold leading-none text-gray-900 dark:text-white">
                    Peserta Yang Mengikuti
                  </h3>
                </div>
                <div className="flow-root overflow-y-auto h-64">
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                  >
                    {trip[0].TripGroups.map((el, index) => (
                      <Participant key={index} array={trip[0].TripGroups} user={el.User}></Participant>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="my-5">
          <p className="text-3xl py-3 font-semibold text-gray-800">
            Lokasi Perjalanan
          </p>
          <div className="w-[120vh]">
            <DestinationCarousel
              cards={trip[0].Destinations}
            ></DestinationCarousel>
          </div>
        </div>
        <div className="mx-1">
          {token && <CustomerService admin={trip[0].User}></CustomerService>}
        </div>
      </section>
    </>
  );
}
