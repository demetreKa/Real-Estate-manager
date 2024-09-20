/* eslint-disable react/prop-types */
import styles from "./AgentAddForm.module.css";
import Bin from "../icon/Bin.svg";
import CheckSing from "../icon/CheckSign.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ErrorBox from "../ErrorBox/ErrorBox";
import axios from "axios";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function AgentAddForm({ setAgentdrop, agentdrop }) {
  const [selectimage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [error, setError] = useState();
  const [agentsForm, setAgentsForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    avatar: "",
  });
  console.log(error);
  const AgentData = new FormData();
  useEffect(function () {
    AgentData.append("name", agentsForm.name);
    AgentData.append("surname", agentsForm.surname);
    AgentData.append("email", agentsForm.email);
    AgentData.append("phone", agentsForm.phone);
    AgentData.append("avatar", agentsForm.avatar);
  });
  function hanldeChange(e) {
    const { name, value } = e.target;
    setAgentsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        AgentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.errors);
      console.error(error);
      console.log(error);
    }
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (agentdrop && !event.target.closest(`.${styles.center} `)) {
        setAgentdrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [agentdrop, setAgentdrop]);

  function handleDragOver(e) {
    console.log(e);
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }
  function HandleDrop(e) {
    console.log(e);
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const file = files[0];
      setAgentsForm((prev) => ({
        ...prev,
        avatar: file,
      }));
      console.log(file);
      const read = new FileReader();
      read.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      read.readAsDataURL(file);
    }
  }

  const handleImageChange = (event) => {
    console.log(event);
    const file = event.target.files[0];
    setAgentsForm((prev) => ({
      ...prev,
      avatar: file,
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
    setAgentsForm((prevData) => ({ ...prevData, avatar: "" }));
  };

  return (
    <form className={styles.center}>
      <h1>აგენტის დამატება</h1>
      <div className={styles.conteiner}>
        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> სახელი *</p>
          <input
            type="text"
            name="name"
            className={error?.name?.length > 0 ? "error" : styles.option}
            value={agentsForm.name}
            onChange={hanldeChange}
          />
          {error?.name?.length > 0 ? (
            <ErrorBox error={error.name} />
          ) : (
            <>
              <img src={CheckSing} alt="" />
              <p className={styles.Pstyles}>მინიმუმ ორი სიმბოლო</p>
            </>
          )}
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> გვარი</p>
          <input
            type="text"
            name="surname"
            className={error?.surname?.length > 0 ? "error" : styles.option}
            value={agentsForm.surname}
            onChange={hanldeChange}
          />
          {error?.surname?.length > 0 ? (
            <ErrorBox error={error.surname} />
          ) : (
            <>
              <img src={CheckSing} alt="" />
              <p className={styles.Pstyles}>მინიმუმ ორი სიმბოლო</p>
            </>
          )}
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> ელ ფოსტა*</p>
          <input
            type="text"
            name="email"
            value={agentsForm.email}
            onChange={hanldeChange}
            className={error?.email?.length > 0 ? "error" : styles.option}
          />
          {error?.email?.length > 0 > 0 ? (
            <ErrorBox error={error.email} />
          ) : (
            <>
              <img src={CheckSing} alt="" />
              <p className={styles.Pstyles}>გამოიყენეთ @redberry.ge ფოსტა</p>
            </>
          )}
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}>ტელეფონის ნომერი</p>
          <input
            type="text"
            name="phone"
            value={agentsForm.phone}
            onChange={hanldeChange}
            className={error?.phone?.length > 0 ? "error" : styles.option}
          />
          {error?.phone?.length > 0 ? (
            <ErrorBox error={error.phone} />
          ) : (
            <>
              <img src={CheckSing} alt="" />
              <p className={styles.Pstyles}>მხოლოდ რიცხვები</p>
            </>
          )}
        </label>
        <div className={styles.inputStyle}>
          <p className={styles.pStyle}>ატვირთეთ ფოტო* </p>
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
                  name="avatar"
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
                  name="avatar"
                  src={selectimage}
                  alt="uploaded Image"
                  className={styles.image}
                />
                <button className={styles.binButton}>
                  <img src={Bin} alt="" onClick={handleDeleteImage} />
                </button>
              </div>
            )}
          </div>
          <div className={styles.btnConteiner}>
            <Link to="/">
              <Button
                ButtonText="გაუქმება"
                className={styles.btn}
                onClick={() => setAgentdrop(false)}
              />{" "}
            </Link>

            <input
              type="submit"
              className={styles.secBtn}
              placeholder="ლისტინგის დამატება"
              value="დამატება აგენტი"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AgentAddForm;
