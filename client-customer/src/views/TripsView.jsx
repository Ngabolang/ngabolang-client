import { useEffect } from "react";

export default function Trips() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className="my-40 items-center text-center">
      <p>sedang dibuat</p>
    </div>
  );
}
