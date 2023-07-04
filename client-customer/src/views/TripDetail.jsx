import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DestinationCarousel from "../components/DestinationCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTripDetail,
  paymentGateway,
} from "../store/actions/actionCreator";
import ImageDestination from "../components/ImageDestination";

export default function TripDetail() {
  const [isLoading, setIsLoading] = useState(true);
  const { trip } = useSelector((state) => {
    return state.trip;
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  async function handlePay() {
    dispatch(paymentGateway(id));
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

        <iframe
          width="100%"
          height="500"
          src={
            `https://www.youtube.com/embed/` + trip[0].videoUrl.split("?v=")[1]
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">{trip[0].name}</p>
          <p className="py-3">{trip[0].description}</p>
        </div>

        <div className="my-10">
          <p className="text-3xl py-3 font-bold">Destinasi Trip</p>
          <DestinationCarousel
            cards={trip[0].Destinations}
          ></DestinationCarousel>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="py-3">Meeting Point: {trip[0].meetingPoint}</p>
            <p className="py-3">Location: {trip[0].location}</p>
            <p className="py-3">Limit: {trip[0].limit}</p>
            <p className="py-3">Category: {trip[0].Category.name}</p>
            <p className="py-3">Price: {formatter.format(trip[0].price)}</p>
            <button
              onClick={handlePay}
              className="bg-green-500 px-10 rounded-lg py-2 shadow-md text-white"
            >
              <p className="font-bold"> BELI SEKARANG</p>
            </button>
          </div>
          <div>
            <div class="p-4 bg-white rounded-lg shadow-md sm:p-8 mx-5 w-[50vh] dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  User
                </h3>
              </div>
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                          alt="Neil image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Neil Sims
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                          alt="Bonnie image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Bonnie Green
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                          alt="Michael image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Michael Gough
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                          alt="Lana image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Lana Byrd
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="Thomas image"
                        ></img>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Thomes Lean
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          email@windster.com
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
