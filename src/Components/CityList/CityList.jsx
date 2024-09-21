/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./CityList.module.css";
import axios from "axios";
const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function CityList({
  onRegionChange,
  selectedRegions,
  handleRegionDrop,
  regionDrop,
  onClick,
  setRegiondrop,
}) {
  const [region, setRegion] = useState([]);
  useEffect(() => {
    async function getrealestate() {
      try {
        // setLoading(true);
        const response = await axios.get(`${BASE_URL}/regions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRegion(response.data);
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
        console.error(error);
      }
    }

    getrealestate();
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (regionDrop && !event.target.closest(`.${styles.licode} `)) {
        setRegiondrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [regionDrop, setRegiondrop]);
  return (
    <div className={styles.licode}>
      <Button
        onClick={handleRegionDrop}
        ButtonText={"რეგიონი"}
        RightEmoji={<i className="fa-solid fa-chevron-down fa-sm"></i>}
      />
      {regionDrop ? (
        <div className={styles.conteiner}>
          <div className={styles.gridDropDown}>
            {region.map((region) => (
              <div key={region.id}>
                <input
                  type="checkbox"
                  value={region.id}
                  checked={selectedRegions.includes(region.id)}
                  onChange={() => onRegionChange(region.id)}
                  id={styles.checkbox}
                />
                <label htmlFor={region.id}>{region.name}</label>
              </div>
            ))}
          </div>
          <div className="buttonToLeft">
            <button className="btn" onClickCapture={() => handleRegionDrop()}>
              <span className="text" onClick={onClick}>
                არჩევა
              </span>
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default CityList;
