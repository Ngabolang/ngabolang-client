import React, { useState } from "react";


export default function ImageUploader() {
  const [base64String, setBase64String] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setBase64String(imageData);
      console.log(imageData);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {base64String && <img src={base64String} alt="Uploaded" />}
    </div>
  );
}
