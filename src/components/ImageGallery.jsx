import React from "react";
import Image from "./Image";
import "./imageWrapper.css";
export default function ImageGallery(props) {
  return (
    <div className="imageWrapper">
      {props.data.map((arr) => {
        return <Image key={arr.id} src={arr.urls.regular} />;
      })}
    </div>
  );
}
