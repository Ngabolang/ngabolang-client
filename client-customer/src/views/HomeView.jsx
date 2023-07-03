import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import TripCard from "../components/TripCard";

function HomeView() {
  // local state
  const [isLoading, setIsLoading] = useState(true);
  // global State
  // requirement
  const dispatch = useDispatch();
  // lifecycle
  useEffect(() => {
    if (isLoading) {
      // dispatch(fetchMenus())
      //   .then((res) => {
      //     setIsLoading(false);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  }, []);

  // if (isLoading) {
  //   return (
  //     <img
  //       className="w-full pl-60 scale-50"
  //       src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
  //       alt=""
  //     />
  //   );
  // }
  const images = [
    "https://images.unsplash.com/photo-1528265417219-1a288ae08573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
    "https://images.unsplash.com/photo-1528265417219-1a288ae08573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  ];

  return (
    <>
      <div className="container mx-auto mt-[13vh]">
        <Carousel images={images} width="100%" />
      </div>
      <div className="m-10">
        <div class="h-[70vh] flex items-center justify-center">
          <div class="grid grid-cols-12 px-18 gap-5">
            <div class="col-span-12">
              <div className="flex justify-between">
                <p>Top kategori</p>
                <button>Lihat Semua Kategori</button>
              </div>
              <hr className="w-full bg-gray-400"></hr>
            </div>
            <a class="col-span-3 bg-rose-700 rounded-xl h-52 md:h-80" href="">
              <img
                src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320"
                class="rounded-t-xl max-h-44"
              />

              <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
                {" "}
                Bandung{" "}
              </p>

              <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
                {" "}
                117 kilometers away{" "}
              </p>
            </a>

            <a class="col-span-3 bg-red-500 rounded-xl h-52 md:h-80" href="">
              <img
                src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320"
                class="rounded-t-xl max-h-44"
              />

              <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
                {" "}
                Lembang{" "}
              </p>

              <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
                {" "}
                109 kilometers away{" "}
              </p>
            </a>
            <a class="col-span-3 bg-pink-700 rounded-xl h-52 md:h-80" href="">
              <img
                src="https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=320"
                class="rounded-t-xl max-h-44"
              />
              <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
                {" "}
                Semarang{" "}
              </p>
              <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
                {" "}
                406 kilometers away{" "}
              </p>
            </a>
            <a class="col-span-3 bg-rose-600 rounded-xl h-52 md:h-80" href="">
              <img
                src="https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320"
                class="rounded-t-xl max-h-44"
              />
              <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Serang </p>
              <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
                {" "}
                78 kilometers away{" "}
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col mx-[35vh]">
          <div className="flex justify-between">
            <p>Trip terbaru</p>
            <button>Lihat Semua Trip</button>
          </div>

          <hr className="w-full bg-gray-400"></hr>
          <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap ">
              <TripCard></TripCard>
              <TripCard></TripCard>
              <TripCard></TripCard>
              <TripCard></TripCard>
              <TripCard></TripCard>
              <TripCard></TripCard>
              <TripCard></TripCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeView;
