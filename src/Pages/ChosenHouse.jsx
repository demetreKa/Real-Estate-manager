/* eslint-disable react/prop-types */
import bed from "../Components/icon/bed.svg";
import vector from "../Components/icon/vector.svg";
import roadSign from "../Components/icon/roadSign.svg";
import Email from "../Components/icon/Email.svg";
import Phone from "../Components/icon/Phone.svg";
import BackBtn from "../Components/icon/BackBtn.svg";
import REDBERRY from "../Components/icon/logo.svg";
import location from "../Components/icon/Mimartuleba.svg";
import axios from "axios";
import DeleteCard from "../Components/DeleteCard/DeleteCard";
import Carusel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LayoutItem from "../Components/Layout/LayoutItem";
import { useEffect, useState } from "react";
import styles from "./ChosenHouse.module.css";
import { Link } from "react-router-dom";
import Time from "react-time-format";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";

function ChosenHouse({ houseid, houses, setHouseid }) {
  const [ChousenHouse, setChousenHouse] = useState({});
  const [popCard, setPopCard] = useState(false);
  async function deleteEstate() {
    axios
      .delete(
        `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${houseid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(
    function () {
      async function getRealestateById() {
        try {
          const getData = await axios.get(
            `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${houseid}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setChousenHouse(getData.data);
        } catch (error) {
          console.log(error);
        }
      }
      getRealestateById();
    },
    [houseid]
  );
  const numberFormat = (value) => new Intl.NumberFormat("fr-FR").format(value);
  console.log(Date.now());
  return (
    <>
      <div className={popCard ? styles.diactivated : styles.padding}>
        <img src={REDBERRY} alt="" className={styles.logo} />
        <span className={styles.BackBtn}>
          <Link to="/">
            <img src={BackBtn} alt="" className={styles.BackBtn} />
          </Link>
        </span>
        <div>
          <div className={styles.conteiner}>
            <div>
              <p className={styles.sold}>
                {ChousenHouse.is_rental <= 0 ? "იყიდება" : "ქირავდება"}
              </p>
              <img
                src={ChousenHouse.image}
                alt=""
                className={styles.mainImage}
              />

              <span className={styles.time}>
                <p className={styles.timeText}>გამოქვეყნების თარიღი</p>
                <Time
                  value={ChousenHouse.created_at}
                  format="YYYY-MM-DD"
                  className={styles.timeText}
                />
              </span>
            </div>

            <div className={styles.infoContainer}>
              <div>
                <h1 className={styles.header}>
                  {numberFormat(ChousenHouse.price)}
                </h1>
                <p className={styles.pStyle}>
                  <img src={location} alt="" />
                  {ChousenHouse.address}
                </p>
                <p className={styles.pStyle}>
                  <img src={vector} alt="" />
                  ფართობი{ChousenHouse.area}
                </p>
                <p className={styles.pStyle}>
                  {" "}
                  <img src={bed} alt="" />
                  საძინებელი
                  {ChousenHouse.bedrooms}
                </p>
                <p className={styles.pStyle}>
                  <img src={roadSign} alt="" />
                  საფოსტო ინდექსი {ChousenHouse.zip_code}
                </p>
              </div>
              <p className={styles.description}>{ChousenHouse.description}</p>
              <div className={styles.margin}>
                <span className={styles.agentProfile}>
                  <img
                    src={ChousenHouse?.agent?.avatar}
                    className={styles.forImage}
                  />
                  <span>
                    <p>{`${ChousenHouse?.agent?.name} ${ChousenHouse?.agent?.surname}`}</p>
                    <p>აგენტი</p>
                  </span>
                </span>
                <span className={styles.agentInfo}>
                  <p className={styles.agentpStyle}>
                    <img src={Email} alt="" className={styles.agentContacnts} />
                    {ChousenHouse?.agent?.email}
                  </p>
                  <p className={styles.agentpStyle}>
                    <img src={Phone} alt="" className={styles.agentContacnts} />
                    {ChousenHouse?.agent?.phone}
                  </p>
                </span>
              </div>

              <button className={styles.btn} onClick={() => setPopCard(true)}>
                ლისტინგის წაშლა
              </button>
            </div>
          </div>
        </div>
        <h3>ბინები მსგავს ლოკაციაზე</h3>
        <Carusel responsive={responsive} infinite={true}>
          {houses
            .filter(
              (house) =>
                house.id !== ChousenHouse.id &&
                house.address === ChousenHouse.address
            )
            .map((item) => (
              <div key={item.id}>
                <LayoutItem house={item} setHouseid={setHouseid} />
              </div>
            ))}
        </Carusel>
      </div>
      {popCard && (
        <DeleteCard
          onClick={deleteEstate}
          setPopCard={setPopCard}
          popCard={popCard}
        />
      )}
    </>
  );
}

export default ChosenHouse;
