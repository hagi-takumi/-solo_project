import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  return (
    <div>
      <div className="images-wrapper">
        <div className="image">
          <img
            src="https://pixabay.com/get/g4e1ea8b774927c784778e972bfe4ad3011beb18da796d53eed7e51c78c29ba61236202fabec32b490f3bae8abc4ea677d9323c36afc4c9db80a08c350f55f7ea_1280.jpg"
            alt=""
          />
        </div>{" "}
        <div className="image">
          <img
            src="https://pixabay.com/get/g4e1ea8b774927c784778e972bfe4ad3011beb18da796d53eed7e51c78c29ba61236202fabec32b490f3bae8abc4ea677d9323c36afc4c9db80a08c350f55f7ea_1280.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
