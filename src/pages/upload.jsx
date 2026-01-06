import { useState } from "react";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // 👈 MUST MATCH multer key

    const res = await fetch("https://farm2plamserver.onrender.com/api/upload/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImageUrl(data.url);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
      <button onClick={uploadImage}>Upload</button>

      {imageUrl && (
        <>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="uploaded" width="300" />
        </>
      )}
    </div>
  );
}
