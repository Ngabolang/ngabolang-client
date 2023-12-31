import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addAdmin } from "../stores/actions/actionCreator";
export default function AddAdminPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    photoProfile: "",
  });
  const [error, setError] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  }

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      let { data } = await axios({
        method: "post",
        url: "https://api.imgur.com/3/upload",
        headers: {
          Authorization: "Client-ID afd82e67ae0ee83",
        },
        data: formData,
      });
      console.log(data);
      let { link } = data.data;
      console.log(link);
      setForm({
        ...form,
        photoProfile: link,
      });
      console.log(form);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError("Please fill all the field");
    } else {
      let payload = form;
      console.log(payload);
      dispatch(addAdmin(payload));
      navigate("/");
    }
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0">Add new Admin</h1>
        </div>

        <div className="pl-3">
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </div>
            <div className="form-group mb-3">
              <label>Photo Profile</label>
              <input
                type="file"
                name="photoProfile"
                accept="image/*"
                className="form-control"
                onChange={handleImageUpload}
              />
            </div>
            <div className="form-group mb-3">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phoneNumber"
              />
            </div>
            <div className="form-group mb-3">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>

            <div className="btn-container mt-3">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
