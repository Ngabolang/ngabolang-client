import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function AddTrip() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      placeId: "",
    },
    {
      name: "",
      imgUrl: "",
      labelDay: "",
      startHour: "",
      activity: "",
      latitude: "",
      longitude: "",
      placeId: "",
    },
  ]);

  useEffect(() => {
    // dispatch(fetchGenre());
  }, []);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  function handleChangeDest(index, event) {
    let newDest = [...castForm];
    newDest[index] = {
      ...newDest[index],
      [event.target.name]: event.target.value,
    };
    setDestForm(newDest);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!castForm[0].name || !castForm[1].name) {
      return setError("Input The Cast");
    }
    let payload = {
      title: form.title,
      slug: form.title,
      synopsis: form.synopsis,
      trailerUrl: form.trailerUrl,
      imgUrl: form.imgUrl,
      rating: form.rating,
      genreId: Number(form.genreId),
      casts: castForm,
    };
    console.log(payload);
    console.log(payload.casts);
    // dispatch(addMovie(payload));
    await Swal.fire({
      title: "sucess",
      text: "new movie added",
      icon: "success",
      confirmButtonText: "Okay",
    });
    navigate("/");
  }

  function addDestClick(e) {
    console.log(destForm);
    const newDest = {
      name: "",
      profilePict: "",
    };
    setDestForm([...destForm, newDest]);
  }

  return (
    <section className="col-md-10">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3 pt-5">
          <h1 className="h3 mb-0 text-gray-800">Add new Trip</h1>
        </div>
        <div className="row">
          <div className="col-md-6 pl-3">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
              </div>
              <div className="form-group mb-3">
                <label>Synopsis</label>
                <br />
                <textarea
                  onChange={handleChange}
                  name="synopsis"
                  value={form.synopsis}
                  rows="4"
                  cols="64"
                ></textarea>
              </div>

              <div className="form-group mb-3">
                <label>Trailer Url</label>
                <input
                  type="text"
                  name="trailerUrl"
                  className="form-control"
                  value={form.trailerUrl}
                  onChange={handleChange}
                  placeholder="Enter trailerUrl"
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
                  placeholder="Enter imageUrl"
                />
              </div>
              <div className="form-group mb-3">
                <label>Rating</label>
                <input
                  type="text"
                  name="rating"
                  className="form-control"
                  value={form.rating}
                  onChange={handleChange}
                  placeholder="Enter rating"
                />
              </div>
              <div className="form-group mb-3">
                <label>Genre</label> <br />
                <select
                  name="genreId"
                  value={form.genreId}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    --Select Genre--
                  </option>
                  {/* {genres.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })} */}
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
            {error && <div className="alert alert-danger"> {error}</div>}
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
                    placeholder="Enter Cast Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label>Profile Picture</label>
                  <input
                    type="url"
                    name="profilePict"
                    className="form-control"
                    value={destForm.profilePict}
                    onChange={(event) => handleChangeDest(index, event)}
                    placeholder="Enter Profile Picture"
                    required
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
