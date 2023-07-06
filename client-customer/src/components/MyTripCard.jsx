import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { paymentGateway } from "../store/actions/actionCreator";

function MyTripCard({ mytrip }) {
  // console.log(mytrip);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedValue, setSubmittedValue] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function handleChat() {
    const slug = mytrip.Trip.chatId;
    navigate(`/chat/` + slug);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();
    const dayOfWeek = date.toLocaleString("id-ID", { weekday: "long" });
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = date.getFullYear();
    const monthColor = generateMonthColor(date.getMonth());

    return {
      day,
      dayOfWeek,
      month,
      year,
      monthColor,
    };
  }

  function generateMonthColor(monthIndex) {
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-violet-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-fuchsia-500",
      "bg-cyan-500",
      "bg-teal-500",
    ];

    const colorIndex = monthIndex % colors.length;
    return colors[colorIndex];
  }

  const date = formatDate(mytrip.Trip.date);
  console.log(date.monthColor);
  const dispatch = useDispatch();
  function handlePay() {
    dispatch(paymentGateway(mytrip.Trip.id));
  }

  function handleTrip() {
    navigate(`/trip/detail/${mytrip.Trip.id}`);
  }
  const line = {
    bgClass: date.monthColor,
    textClass: "text-white",
    pyClass: "py-1",
  };

  return (
    <div className="my-4 flex flex-col w-[140vh] h-auto overflow-hidden bg-white border rounded-lg shadow-xl lg:flex-row ">
      <div className=" bg-white font-medium">
        <div className="w-32 h-full flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
          <div className="block overflow-hidden  text-center ">
            <div
              className={`${line.bgClass} ${line.textClass} ${line.pyClass}`}
            >
              {date.month}
            </div>
            <div className="pt-5 border-l border-r border-white bg-white">
              <span className="text-5xl font-bold leading-tight">
                {date.day}
              </span>
            </div>
            <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
              <span className="text-sm">{date.dayOfWeek}</span>
            </div>
            <div className="mt-4 border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
              <span className="text-xl font-bold">{date.year}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2">
        <img
          src={mytrip.Trip.imgUrl}
          alt="Persons talking in a work setting."
          className="object-cover w-full lg:absolute h-80 lg:h-full"
        />
        <svg
          className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
          viewBox="0 0 20 104"
          fill="currentColor"
        >
          <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
        </svg>
      </div>
      <div className="flex flex-col justify-center p-8 bg-white lg:pl-10 lg:w-1/2">
        <div>
          {!mytrip.Trip.status ? (
            <p className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-200 rounded-full">
              Paid
            </p>
          ) : (
            <div>
              {!mytrip.paymentStatus ? (
                <p className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-red-600 uppercase bg-red-200 rounded-full">
                  Unpaid
                </p>
              ) : (
                <p className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-600 uppercase bg-blue-200 rounded-full">
                  Paid
                </p>
              )}
            </div>
          )}
        </div>
        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
          {mytrip.Trip.name}
        </h5>
        <div className="flex items-center">
          {!mytrip.paymentStatus ? (
            <button
              onClick={handlePay}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-teal-500 rounded-lg hover:bg-teal-700 focus:shadow-outline focus:outline-none"
            >
              Bayar sekarang
            </button>
          ) : (
            <div className="flex">
              <button
                onClick={handleChat}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-teal-500 rounded-lg hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Group chat
              </button>
              {!mytrip.Trip.status && !mytrip.review && (
                <div>
                  <button
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-fuchsia-500 rounded-lg hover:bg-fuchsia-700 focus:shadow-outline focus:outline-none"
                    onClick={openModal}
                  >
                    Review
                  </button>

                  <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    id={mytrip.id}
                  ></Modal>

                  {submittedValue && (
                    <div className="mt-4">
                      <p>Submitted Value: {submittedValue}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          <a
            onClick={handleTrip}
            aria-label=""
            className="inline-flex cursor-pointer items-center text-lg underline transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Ke Halaman Trip
            <svg
              className="inline-block w-2 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyTripCard;
