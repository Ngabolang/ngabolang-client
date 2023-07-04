import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCat } from "../stores/actions/actionType";

export default function AddCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    imgUrl: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.imgUrl) {
      setError("Please fill all the field");
    } else {
      let payload = form;
      dispatch(addCat(payload));
      navigate("/categories");
    }
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">Add new Categories</h1>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}
        <div className="pl-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Category name"
              />
            </div>
            <div className="form-group mb-3">
              <label>Image Url</label>
              <input
                type="text"
                name="imgUrl"
                className="form-control"
                value={form.imgUrl}
                onChange={handleChange}
                placeholder="Enter Category image url"
              />
            </div>

            <div className="btn-container mt-3">
              <button type="submit" className="btn btn-primary">
                Add New Categories
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
