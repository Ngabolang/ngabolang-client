import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export default function DashboardPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
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
      <div>ini dashboard kanan</div>
    </section>
  );
}
