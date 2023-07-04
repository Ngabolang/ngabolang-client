export default function CardParticipants({ item }) {
  return (
    <div className="card col-2 m-2 px-1">
      <img src={item.photoProfile} className="card-img-top" alt="Cast" />
      <div className="card-body text-center">
        <p>{item.username}</p>
        <p>{item.email}</p>
      </div>
    </div>
  );
}
