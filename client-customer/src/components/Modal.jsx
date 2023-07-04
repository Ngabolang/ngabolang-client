import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewUser } from "../store/actions/actionCreator";

export default function Modal({isOpen, onClose, id}) {
  const [inputValue, setInputValue] = useState({
    review:'',
    rating:5
  });
  const dispatch=useDispatch()
  function handleInputChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = () => {
    dispatch(reviewUser(id,inputValue))
  };

  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center z-50"
    : "hidden";

  return (
    <div className={modalClasses}>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="bg-white p-4 rounded-lg shadow-lg relative z-50">
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
        <h2 className="text-lg font-bold mb-4">Review</h2>
        <input
          type="text"
          name="review"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Masukan review disini"
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
