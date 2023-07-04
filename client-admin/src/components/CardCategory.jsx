export default function CardCategory({ item }) {
  return (
    <div className="card text-white m-3 p-0 shadow">
      <img src={item.imgUrl} className="card-image-cat" alt="Background" />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <h5 className="card-title text-center text-white font-weight-bold shadow-text">
          {item.name}
        </h5>
      </div>
    </div>
  );
}
