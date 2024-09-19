import TransactionType from "../Components/Listing/TransactionType";
import Location from "../Components/Listing/Location";
import Button from "../Components/Button/Button";
import styles from "./ListingAdd.module.css";
import HouseDetails from "../Components/Listing/houseDetails";
import Agent from "../Components/Listing/Agent";
import axios from "axios";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function ListingAdd() {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState();
  const [formData, setformData] = useState({
    address: "",
    region_id: 1,
    description: "",
    city_id: "",
    zip_code: "",
    price: "",
    area: "",
    bedrooms: "",
    is_rental: 0,
    agent_id: "",
    image: null,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
        formData
      );
      console.log(response.data);
    } catch (error) {
      setError(error.response.data.errors);
      console.error(error);
    }
  }

  useEffect(() => {
    async function getAgents() {
      try {
        // setLoading(true);
        const response = await axios.get(`${BASE_URL}/agents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAgents(response.data);
        setformData((prev) => ({
          ...prev,
          agent_id: response.data[0]?.id,
        }));
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
        console.error(error);
      }
    }
    getAgents();
  }, []);
  console.log(error);
  function HandleChange(e) {
    const { name, value } = e.target;

    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  // function handleImageselectino(file) {
  //   if (file) {
  //     setformData((prev) => ({
  //       ...prev,
  //       image: file,
  //     }));
  //   }
  // }

  return (
    <div className={styles.conteiner}>
      <form action="" onSubmit={handleSubmit}>
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
          <Agent
            agents={agents}
            getAgents={formData.agent_id}
            hanldeAgentAdd={HandleChange}
          />
        </section>
        <div className={styles.btnConteiner}>
          <Link to="/">
            <Button ButtonText="გაუქმება" className={styles.btn} />{" "}
          </Link>

          <input
            type="submit"
            className={styles.secBtn}
            placeholder="ლისტინგის დამატება"
            value="ლისტინგის დამატება"
          />
        </div>
      </form>
    </div>
  );
}

export default ListingAdd;
