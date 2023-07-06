import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardTrip from "../components/CardTrip";
import { fetchSearchTrip, fetchTrip } from "../stores/actions/actionCreator";
export default function DashboardPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { trips } = useSelector((state) => state.trip);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTrip())
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleAddTrip(params) {
    navigate("/newTrip");
  }

  const [valSearch, setValSearch] = useState("");

  function handleSeacrh(e) {
    setValSearch(e.target.value);
  }

  function submitSearch(e) {
    e.preventDefault();
    dispatch(fetchSearchTrip(valSearch));
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
          <h1 className="h3 mb-0">Trips</h1>
          <div className="row">
            <div className="col-12">
              <form className="d-flex">
                <input
                  type="tezt"
                  placeholder="Search"
                  className="form-control"
                  onChange={handleSeacrh}
                />
                <button className="btn btn-primary" onClick={submitSearch}>
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
          <button className="btn btn-primary p-2" onClick={handleAddTrip}>
            Add New Trip
          </button>
        </div>

        <div className="flex flex-wrap align-items-center">
          {trips.map((item, index) => (
            <CardTrip item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
