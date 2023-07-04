import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AutocompleteInput from "../components/AutocompleteInput";
import { addTrip, fetchCat } from "../stores/actions/actionType";

export default function AddTrip() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "",
    duration: "",
    date: "",
    limit: "",
    price: "",
    categoryId: "",
    imgUrl: "",
    videoUrl: "",
    meetingPoint: "",
  });
  const [error, setError] = useState("");
  const [destForm, setDestForm] = useState([
    {
      name: "",
      imgUrl: "",
      labelDay: "",
      startHour: "",
      activity: "",
      latitude: "",
      longitude: "",
    },
  ]);

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleChangeDest(index, event) {
    let newDest = [...destForm];
    newDest[index] = {
      ...newDest[index],
      [event.target.name]: event.target.value,
    };
    setDestForm(newDest);
    console.log(destForm);
  }
  function handlePlaceSelected(index, lat, lng) {
    console.log(index);
    console.log(lat, lng, "ini di addtrip");
    let newDest = [...destForm];
    newDest[index] = {
      ...newDest[index],
      latitude: lat,
      longitude: lng,
    };
    setDestForm(newDest);
    console.log(destForm);
  }
  function addDestClick(e) {
    console.log(destForm);
    const newDest = {
      name: "",
      imgUrl: "",
      labelDay: "",
      startHour: "",
      activity: "",
      latitude: "",
      longitude: "",
    };
    setDestForm([...destForm, newDest]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !form.name ||
      !form.description ||
      !form.location ||
      !form.duration ||
      !form.date ||
      !form.limit ||
      !form.price ||
      !form.categoryId ||
      !form.imgUrl ||
      !form.videoUrl ||
      !form.meetingPoint
    ) {
      return setError("Input all the field");
    }
    if (!destForm[0].name) {
      return setError("Input The Destination");
    }
    let payload = form;
    payload.destinations = destForm;
    console.log(payload);
    dispatch(addTrip(payload));
    navigate("/");
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">Add new Trip</h1>
        </div>
        {error && <div className="alert alert-danger"> {error}</div>}
        <div className="row">
          <div className="col-md-6 pl-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group mb-3">
                <label>Description</label>
                <br />
                <textarea
                  onChange={handleChange}
                  name="description"
                  className="form-control"
                  value={form.description}
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Enter location"
                />
              </div>
              <div className="form-group mb-3">
                <label>Meeting Point</label>
                <input
                  type="text"
                  name="meetingPoint"
                  className="form-control"
                  value={form.meetingPoint}
                  onChange={handleChange}
                  placeholder="Enter Meeting Point"
                />
              </div>
              <div className="form-group mb-3">
                <label>Image Url</label>
                <input
                  type="url"
                  name="imgUrl"
                  className="form-control"
                  value={form.imgUrl}
                  onChange={handleChange}
                  placeholder="Enter Image Url"
                />
              </div>
              <div className="form-group mb-3">
                <label>Video Url</label>
                <input
                  type="url"
                  name="videoUrl"
                  className="form-control"
                  value={form.videoUrl}
                  onChange={handleChange}
                  placeholder="Enter Video Url"
                />
              </div>
              <div className="form-group mb-3">
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                />
              </div>
              <div className="form-group mb-3">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  value={form.date}
                  onChange={handleChange}
                  placeholder="Enter date"
                />
              </div>
              <div className="form-group mb-3">
                <label>Duration</label>
                <input
                  type="number"
                  name="duration"
                  className="form-control"
                  value={form.duration}
                  onChange={handleChange}
                  placeholder="Enter trip duration day"
                />
              </div>
              <div className="form-group mb-3">
                <label>Quota</label>
                <input
                  type="number"
                  name="limit"
                  className="form-control"
                  value={form.limit}
                  onChange={handleChange}
                  placeholder="Enter participant trip quota"
                />
              </div>
              <div className="form-group mb-3">
                <label>Categories</label> <br />
                <select
                  name="categoryId"
                  className="form-select"
                  value={form.categoryId}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    --Select Category--
                  </option>
                  {categories.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="btn-container mt-3">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-6 pl-5">
            <h3>Destinations</h3>

            {destForm.map((el, index) => (
              <form key={index}>
                <h5>Destination #{index + 1}</h5>
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={destForm.name}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter Destinations Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Activity</label>
                  <input
                    type="text"
                    name="activity"
                    className="form-control"
                    value={destForm.activity}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter Destinations activity"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Image Url</label>
                  <input
                    type="url"
                    name="imgUrl"
                    className="form-control"
                    value={destForm.imgUrl}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter Image Url"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Day</label>
                  <input
                    type="number"
                    name="labelDay"
                    className="form-control"
                    value={destForm.labelDay}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter activy day"
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Time</label>
                  <input
                    type="time"
                    name="startHour"
                    className="form-control"
                    value={destForm.startHour}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter startHour"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Map Place</label>
                  <AutocompleteInput
                    onPlaceSelected={handlePlaceSelected}
                    index={index}
                  />
                </div>
              </form>
            ))}

            <div className="btn-container mt-3">
              <button onClick={addDestClick} className="btn btn-success">
                Add Destination
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
