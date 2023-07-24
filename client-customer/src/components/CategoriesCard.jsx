import { useNavigate } from "react-router-dom";

export default function CategoriesCard({ card }) {
  const navigate = useNavigate();
  function handleTrip() {
    navigate(`/trip/${card.name}`);
  }
  return (
    <button
      onClick={handleTrip}
      key={card.id}
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg w-[22vh] h-[9vh] m-2"
    >
      <img className=" object-contain" src={card.imgUrl} alt={card.name} />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-xl font-bold text-center">
          {card.name}
        </h2>
      </div>
    </button>
  );
}
