/* eslint-disable react/prop-types */
import styles from "./HouseDetails.module.css";
import checkSing from "../icon/CheckSign.svg";
import Bin from "../icon/Bin.svg";
import { useState, useRef } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
function HouseDetails({
  price,
  handlepriceAdd,
  width,
  HandleWidthAdd,
  HandleBedNumber,
  bedNumber,
  description,
  setDescription,
  setformData,
  error,
}) {
  const [selectimage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }
  function HandleDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
      setformData((prevData) => ({
        ...prevData,
        image: file,
      }));

      const read = new FileReader();
      read.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      read.readAsDataURL(file);
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setformData((prevData) => ({
      ...prevData,
      image: file,
    }));

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleDeleteImage = () => {
    setSelectedImage(null);
    setformData((prevData) => ({ ...prevData, image: "" }));
  };

  return (
    <>
      <h3>ბინის დეტალები</h3>
      <form action="" className={styles.conteiner} onDrop={HandleDrop}>
        <label>
          ფასი
          <input
            type="text"
            className={error?.price?.length > 0 ? "error" : styles.option}
            value={price}
            onChange={handlepriceAdd}
            name="price"
          />
          {error?.price?.length > 0 ? (
            <ErrorBox error={error.price} />
          ) : (
            <>
              <img src={checkSing} alt="" />
              <p className={styles.Pstyles}>მხოლოდ რიცხვები</p>
            </>
          )}
        </label>
        <label>
          ფართობი
          <input
            type="text"
            name="area"
            className={error?.area?.length > 0 ? "error" : styles.option}
            value={width}
            onChange={HandleWidthAdd}
          />
          {error?.area?.length > 0 ? (
            <ErrorBox error={error.area} />
          ) : (
            <>
              <img src={checkSing} alt="" />
              <p className={styles.Pstyles}>მხოლოდ რიცხვები</p>
            </>
          )}
        </label>
        <label>
          საძინებლების რაოდენობა
          <input
            type="text"
            className={error?.bedrooms?.length > 0 ? "error" : styles.option}
            name="bedrooms"
            value={bedNumber}
            onChange={HandleBedNumber}
          />
          {error?.bedrooms?.length > 0 ? (
            <ErrorBox error={error.bedrooms} />
          ) : (
            <>
              <img src={checkSing} alt="" />
              <p className={styles.Pstyles}>მხოლოდ რიცხვები</p>
            </>
          )}
        </label>
      </form>
      <label htmlFor="">
        აღწერა*
        <textarea
          name="description"
          rows="10"
          cols="30"
          className={
            error?.description?.length > 0
              ? styles.textAreaError
              : styles.TextArea
          }
          value={description}
          onChange={setDescription}
        />
        {error?.description?.length > 0 ? (
          <ErrorBox error={error.description} />
        ) : (
          <>
            <img src={checkSing} alt="" />
            <p className={styles.Pstyles}>მინიმუმ 5 სიტყვა</p>
          </>
        )}
      </label>
      <p>ატვირთეთ ფოტო* </p>
      <div
        onDrag={handleDragOver}
        onDrop={HandleDrop}
        className={styles.HousePicture}
      >
        <label>
          <h1 className={styles.uploadImage}>
            {!selectimage ? <i className="fa-solid fa-plus fa-2x"></i> : ""}
          </h1>
          {!selectimage ? (
            <input
              className={styles.fileUploader}
              type="file"
              accept="image/*"
              name="image"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          ) : (
            " "
          )}
        </label>

        {selectimage && (
          <div className={styles.imageStyle}>
            <img
              name="image"
              src={selectimage}
              alt="uploaded Image"
              className={styles.image}
            />
            <button
              onClick={() => handleDeleteImage()}
              className={styles.binButton}
            >
              <img src={Bin} alt="" />
            </button>
          </div>
        )}
      </div>
      {error?.image?.length > 0 ? <ErrorBox error={error.image} /> : " "}
    </>
  );
}

export default HouseDetails;
