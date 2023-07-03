import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CardTrip from "../components/CardTrip";
import CardClosedTrip from "../components/CardClosedTrip";
export default function ClosedTripsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("");

  useEffect(() => {
    setLoading(false);
    setPage("closed");
  }, []);

  async function handleDelete(id) {
    dispatch(deleteMovie(id));
    await Swal.fire({
      title: "sucess",
      text: `movie with id ${id} deleted`,
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
          <h1 className="h3 mb-0">Closed Trips</h1>
        </div>

        <div className="flex flex-wrap align-items-center">
          <CardClosedTrip />
        </div>
      </div>
    </section>
  );
}
