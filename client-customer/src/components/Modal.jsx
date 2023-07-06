import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewUser } from "../store/actions/actionCreator";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Modal({ isOpen, onClose, id }) {
  const [inputValue, setInputValue] = useState({
    review: "",
    rating: 0,
  });

  const handleRatingClick = (selectedRating) => {
    setInputValue({
      ...inputValue,
      rating: selectedRating,
    });
  };

  const dispatch = useDispatch();
  function handleInputChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }
  const navigate = useNavigate();
  const handleSubmit = async () => {
    // console.log(inputValue);
    dispatch(reviewUser(id, inputValue))
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Akun berhasil keluar",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/home");
      })
      .catch((err) => {});
  };

  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg relative z-50 text">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-lg font-bold m-4 text-center">
          Beri tanggapan tentang trip ini
        </h2>
        <div className="w-80 text-gray-700 text-">
          <p>
            Feedback anda akan sangat berguna demi kenyamanan pelanggan untuk
            kedepannya
          </p>
        </div>
        <textarea
          onChange={handleInputChange}
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Tulis review disini"
          rows="4"
          name="review"
        ></textarea>
        {/*  */}
        <div className="my-3">
          <h2 className="text-lg font-bold mb-4">Rating Perjalanan Ini</h2>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <svg
                key={value}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 fill-current ${
                  value <= inputValue.rating
                    ? "text-yellow-500"
                    : "text-gray-400"
                } cursor-pointer`}
                viewBox="0 0 20 20"
                onClick={() => handleRatingClick(value)}
              >
                <path
                  fillRule="evenodd"
                  d="M10 16.29l-5.77 3.12a1 1 0 0 1-1.47-1.05l1.1-6.41-4.67-4.55a1 1 0 0 1 .56-1.7l6.42-.94L9.11 1.1a1 1 0 0 1 1.78 0l2.94 5.94 6.42.94a1 1 0 0 1 .56 1.7l-4.67 4.55 1.1 6.41a1 1 0 0 1-1.47 1.05L10 16.29z"
                />
              </svg>
            ))}
          </div>
        </div>
        <button
          className="bg-teal-500 my-3 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
