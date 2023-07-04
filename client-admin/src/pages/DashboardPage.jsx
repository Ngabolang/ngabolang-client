import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardTrip from "../components/CardTrip";
import { fetchTrip } from "../stores/actions/actionType";
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
  async function handleDelete(id) {
    await Swal.fire({
      title: "sucess",
      text: `trip with id ${id} deleted`,
      icon: "success",
      confirmButtonText: "Okay",
    });
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
