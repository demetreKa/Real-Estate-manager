import TransactionType from "../Components/Listing/TransactionType";
import Location from "../Components/Listing/Location";
import Button from "../Components/Button/Button";
import styles from "./ListingAdd.module.css";

import HouseDetails from "../Components/Listing/HouseDetails";
import Agent from "../Components/Listing/Agent";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function ListingAdd() {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const sendData = new FormData();
  const [formData, setformData] = useState(() => {
    const storedData = localStorage.getItem("fromData");
    return storedData
      ? JSON.parse(storedData)
      : {
          address: "",
          region_id: 1,
          description: "",
          city_id: "",
          zip_code: "",
          price: "",
          area: "",
          bedrooms: "",
          is_rental: 0,
          agent_id: 583,
          image: null,
        };
  });
  useEffect(function () {
    localStorage.setItem("fromData", JSON.stringify(formData));
    return () => {
      localStorage.clear();
    };
  });
  useEffect(
    function () {
      sendData.append("image", formData.image);
      sendData.append("address", formData.address);
      sendData.append("region_id", formData.region_id);
      sendData.append("description", formData.description);
      sendData.append("city_id", formData.city_id);
      sendData.append("zip_code", formData.zip_code);
      sendData.append("price", formData.price);
      sendData.append("area", formData.area);
      sendData.append("bedrooms", formData.bedrooms);
      sendData.append("is_rental", formData.is_rental);
      sendData.append("agent_id", formData.agent_id);
    },
    [sendData]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
        sendData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      console.log(response.data);
      if (!response.data.errors) {
        navigate("/");
      }
    } catch (error) {
      setError(error.response.data.errors);
      console.error(error);
    }
  }

  function HandleChange(e) {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form action="" onSubmit={handleSubmit} className={styles.conteiner}>
      <section className={styles.transaction}>
        <TransactionType
          rental={formData.is_rental}
          onRentalChange={HandleChange}
        />
      </section>
      <section>
        <Location
          address={formData.address}
          change={HandleChange}
          mailindex={formData.zip_code}
          setMailindex={HandleChange}
          city={formData.city_id}
          setCity={HandleChange}
          region={formData.region_id}
          setRegion={HandleChange}
          error={error}
          setformData={setformData}
        />
      </section>
      <section>
        <HouseDetails
          price={formData.price}
          handlepriceAdd={HandleChange}
          bedNumber={formData.bedrooms}
          HandleBedNumber={HandleChange}
          width={formData.area}
          HandleWidthAdd={HandleChange}
          description={formData.description}
          setDescription={HandleChange}
          setformData={setformData}
          image={formData.image}
          error={error}
        />
      </section>
      <section>
        <Agent getAgents_id={formData.agent_id} hanldeAgentAdd={HandleChange} />
      </section>
      <div className={styles.btnConteiner}>
        <Link to="/">
          <Button ButtonText="გაუქმება" className={styles.btn} onClick={""} />{" "}
        </Link>

        <input
          type="submit"
          className={styles.secBtn}
          placeholder="ლისტინგის დამატება"
          value="ლისტინგის დამატება"
        />
      </div>
    </form>
  );
}

export default ListingAdd;
