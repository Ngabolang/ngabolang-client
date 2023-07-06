import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardCategory from "../components/CardCategory";
import { fetchCat } from "../stores/actions/actionCreator";
export default function CategoriesPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchCat())
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleAddCategory(e) {
    e.preventDefault();
    navigate("/newCategory");
  }

  if (loading) {
    return (
      <div className="col-md-10 text-center">
        <img src="https://i.gifer.com/YCZH.gif" alt="" />
      </div>
    );
  }
  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0">Categories</h1>
          <button className="btn btn-primary p-2" onClick={handleAddCategory}>
            Add New Category
          </button>
        </div>

        <div className="d-flex flex-wrap align-items-center">
          {categories.map((item, index) => (
            <CardCategory item={item} key={item.id} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
