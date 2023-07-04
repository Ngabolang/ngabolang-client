import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { fetchCategories } from "../store/actions/actionCreator";
import CategoriesCard from "../components/CategoriesCard";

export default function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    return state.trip;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCategories())
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
    <section className="py-48 bg-white flex flex-col justify-center m-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Cari trip berdasarkan kategori
      </h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-20">
        {categories.map((card) => (
          <CategoriesCard card={card} />
        ))}
      </div>
    </section>
  );
}
