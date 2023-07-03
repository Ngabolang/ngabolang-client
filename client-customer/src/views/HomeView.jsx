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
        <div className="flex flex-col bg mx-80">
          <div className="flex justify-between">
            <p>Trip Terbaru</p>
            <button>Lihat Semua</button>
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
