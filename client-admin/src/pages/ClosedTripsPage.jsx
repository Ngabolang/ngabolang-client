import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CardClosedTrip from "../components/CardClosedTrip";
import {
  fetchComTrip,
  fetchSearchComTrip,
} from "../stores/actions/actionCreator";
export default function ClosedTripsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { comTrips } = useSelector((state) => state.trip);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchComTrip())
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [valSearch, setValSearch] = useState("");

  function handleSeacrh(e) {
    setValSearch(e.target.value);
  }

  function submitSearch(e) {
    e.preventDefault();
    dispatch(fetchSearchComTrip(valSearch));
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
          <h1 className="h3 mb-0">Completed Trips</h1>
          <div className="row">
            <div className="col-11">
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
        </div>

        <div className="flex flex-wrap align-items-center">
          {comTrips.map((item, index) => (
            <CardClosedTrip item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
