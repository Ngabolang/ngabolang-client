import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/carousel";
import TripCard from "../components/TripCard";
import {
  fetchCategories,
  fetchReview,
  fetchTrips,
} from "../store/actions/actionCreator";
import CategoriesCard from "../components/CategoriesCard";
import { useNavigate } from "react-router-dom";
import ReviewCard from "../components/RatingCard";

function HomeView() {
  // local state
  const [isLoading, setIsLoading] = useState(true);
  // global State
  const dummy = {
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
    createdAt: "2023-07-04T01:36:03.951Z",
    updatedAt: "2023-07-04T01:36:03.951Z",
    Category: {
      id: 1,
      name: "Beaches",
      imgUrl:
        "https://img.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13668.jpg?size=626&ext=jpg&uid=R41671461&ga=GA1.2.468604856.1683977961&semt=sph",
      createdAt: "2023-07-04T01:36:03.949Z",
      updatedAt: "2023-07-04T01:36:03.949Z",
    },
  };
  // requirement
  const dispatch = useDispatch();
  // lifecycle

  const { reviews, categories, trips } = useSelector((state) => {
    return state.trip;
  });
  const navigate = useNavigate();
  function handleCategory() {
    navigate("/categories");
  }
  function handleTrip() {
    navigate("/trip");
  }
  console.log(reviews);
  useEffect(() => {
    // window.scrollTo(0, 0);
    if (isLoading) {
      dispatch(fetchCategories());
      dispatch(fetchTrips());
      dispatch(fetchReview())
        .then((res) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  const images = [
    "https://media.discordapp.net/attachments/1121744763859783772/1126321148087517185/syamsul.png",
    "http://www.goldenrama.com/_next/image?url=https%3A%2F%2Fprod1-api.goldenrama.com%2F%2Fuploads%2FBMG_WEB_BANNER_E_COMMERCE_04_6b8d79745c.png&w=1920&q=100",
    "http://www.goldenrama.com/_next/image?url=https%3A%2F%2Fprod1-api.goldenrama.com%2F%2Fuploads%2FGRANVIA_de89a6cc9b.png&w=1920&q=100",
    "http://www.goldenrama.com/_next/image?url=https%3A%2F%2Fprod1-api.goldenrama.com%2F%2Fuploads%2FWEB_BANNER_QANTAS_01_0e19e6abe6.png&w=1920&q=100",
  ];

  return (
    <>
      <div className=" flex items-center mt-[13vh]">
        <Carousel images={images}/>
      </div>
      <div className="m-10">
        <div className="flex flex-col mx-[35vh]">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Top kategori</p>
            <button onClick={handleCategory}>Lihat Semua Kategori</button>
          </div>

          <hr className="w-full bg-gray-400"></hr>
          <div className="">
            <div className="my-4 items-center justify-center gap-6 flex ">
              {categories.slice(0, 4).map((el, index) => (
                <div key={index} className="w-40">
                  <CategoriesCard  card={el}></CategoriesCard>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-[35vh]">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Trip terbaru</p>
            <button onClick={handleTrip}>Lihat semua trip</button>
          </div>

          <hr className="w-full bg-gray-400"></hr>
          <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap my-4">
              {trips.slice(0, 5).map((el, index) => (
                <TripCard key={index} trip={el}></TripCard>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-[35vh] my-20">
          <div className="flex justify-between">
            <p className="font-semibold text-2xl">Review</p>
           
          </div>

          <hr className="w-full bg-gray-400"></hr>
          <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap my-4 gap-10">
              {reviews.map((el, index) => (
                
                <ReviewCard key={index} date={el.updatedAt} trip={el.Trip.name} name={el.User.username} profilePhoto={el.User.photoProfile} reviewText={el.review} rating={el.rating} ></ReviewCard>
              ))}
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
}

export default HomeView;
