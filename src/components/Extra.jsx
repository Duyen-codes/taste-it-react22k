import axios from "axios";
import React, { useEffect, useState } from "react";
import unsplash from "../api/unsplash";

const Extra = () => {
  const [photo, setPhoto] = useState();

  const fetchPhoto = async () => {
    const response = await unsplash.get("/photos/random");
    console.log("data", response.data);
    setPhoto(response?.data?.urls?.small);
    console.log(photo);
  };
  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div>
      Saved recipes will be here
      <img src={photo} alt="" />
    </div>
  );
};

export default Extra;
