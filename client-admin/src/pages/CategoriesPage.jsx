import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CardCategory from "../components/CardCategory";
export default function CategoriesPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
          <CardCategory />
        </div>
      </div>
    </section>
  );
}
