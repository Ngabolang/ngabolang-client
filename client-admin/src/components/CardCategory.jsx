export default function CardCategory() {
  return (
    <div className="card text-white m-3 p-0 shadow">
      <img
        src="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
        className="card-image-cat"
        alt="Background"
      />
      <div className="card-img-overlay d-flex align-items-center justify-content-center">
        <h5 className="card-title text-center text-white font-weight-bold shadow-text">
          Pantai
        </h5>
      </div>
    </div>
  );
}
