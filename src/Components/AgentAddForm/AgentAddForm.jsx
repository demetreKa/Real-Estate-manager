import styles from "./AgentAddForm.module.css";
import Bin from "../icon/Bin.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import axios from "axios";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function AgentAddForm() {
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
    }
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }
  function HandleDrop(e) {
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
  const handleClick = () => {
    fileInputRef.current.click();
  };
  const handleDeleteImage = () => {
    setSelectedImage(null);
    setAgentsForm((prevData) => ({ ...prevData, avatar: "" }));
  };

  return (
    <form className={styles.center} onClick={handleSubmit}>
      <h1>აგენტის დამატება</h1>
      <div className={styles.conteiner}>
        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> სახელი *</p>
          <input
            type="text"
            name="name"
            className={styles.option}
            value={agentsForm.name}
            onChange={hanldeChange}
          />
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> გვარი</p>
          <input
            type="text"
            name="surname"
            className={styles.option}
            value={agentsForm.surname}
            onChange={hanldeChange}
          />
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}> ელ ფოსტა*</p>
          <input
            type="text"
            name="email"
            value={agentsForm.email}
            onChange={hanldeChange}
            className={styles.option}
          />
        </label>

        <label className={styles.lebleStyle}>
          <p className={styles.pStyle}>ტელეფონის ნომერი</p>
          <input
            type="text"
            name="phone"
            value={agentsForm.phone}
            onChange={hanldeChange}
            className={styles.option}
          />
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
                  onClick={handleClick}
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
              <Button ButtonText="გაუქმება" className={styles.btn} />{" "}
            </Link>

            <input
              type="submit"
              className={styles.secBtn}
              placeholder="ლისტინგის დამატება"
              value="დამატება აგენტი"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default AgentAddForm;
