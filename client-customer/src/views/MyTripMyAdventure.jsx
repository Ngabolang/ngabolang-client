import { useEffect, useState } from "react";
import MyTripCard from "../components/MyTripCard";
import { useSelector } from "react-redux";


function MyTrip() {


  useEffect(() => {
  
  }, []);
  return (
    <div className="mt-20">
      <div className="py-12 flex flex-col justify-center items-center">
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
        <MyTripCard></MyTripCard>
      </div>
    </div>
  );
}

export default MyTrip;
