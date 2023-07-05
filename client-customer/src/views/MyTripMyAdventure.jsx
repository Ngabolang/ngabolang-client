import { useEffect, useState } from "react";
import MyTripCard from "../components/MyTripCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyTrip } from "../store/actions/actionCreator";

function MyTrip() {
  const [isLoading, setIsLoading] = useState(true);
  const { mytrips } = useSelector((state) => {
    return state.trip;
  });
  // console.log(mytrips);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchMyTrip())
      .then((result) => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mt-20">
      {mytrips.length ? (
        <div className="py-12 flex flex-col justify-center items-center">
          {mytrips.map((el, index) => (
            <MyTripCard key={index} mytrip={el}></MyTripCard>
          ))}
        </div>
      ) : (
        <div className="py-12 flex h-[60vh] flex-col justify-center items-center">
          <p>Trip Belum Ada, tambahkan trip terlebih dahulu</p>
        </div>
      )}
    </div>
  );
}

export default MyTrip;
