import React from 'react';

const ReviewCard = ({ name, profilePhoto, reviewText, rating, trip, date }) => {
   function formatDate(dateString) {
    const options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('id-ID', options);
    return formattedDate;
  }
  
    return (
    <div className="flex p-4 text-xs bg-white rounded-lg shadow w-[40vh] pt-4">
      <div className="flex-shrink-0 mt-2">
        <img
          src={profilePhoto}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="ml-4">
        <div className="flex items-center">
          <h4 className="text-gray-900 font-semibold">{name}</h4>
          <div className="ml-2 flex items-center">
            {[1, 2, 3, 4, 5].map((value) => (
              <svg
                key={value}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 fill-current ${
                  value <= rating ? 'text-yellow-500' : 'text-gray-400'
                }`}
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 16.29l-5.77 3.12a1 1 0 0 1-1.47-1.05l1.1-6.41-4.67-4.55a1 1 0 0 1 .56-1.7l6.42-.94L9.11 1.1a1 1 0 0 1 1.78 0l2.94 5.94 6.42.94a1 1 0 0 1 .56 1.7l-4.67 4.55 1.1 6.41a1 1 0 0 1-1.47 1.05L10 16.29z"
                />
              </svg>
            ))}
          </div>
        </div>
        <p className="font-medium">{trip}</p>
        <p className="text-gray-700">{formatDate(date)}</p>
        <p className="text-gray-700">"{reviewText}"</p>
      </div>
    </div>
  );
};

export default ReviewCard;
