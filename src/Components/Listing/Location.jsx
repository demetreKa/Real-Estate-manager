/* eslint-disable react/prop-types */
import styles from "./Location.module.css";
import checkSing from "../icon/CheckSign.svg";

import { useEffect, useState } from "react";
import axios from "axios";
import ErrorBox from "../ErrorBox/ErrorBox";
const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function Location({
  address,
  change,
  mailindex,
  setMailindex,
  setCity,
  region,
  setRegion,
  city,
  error,
  setformData,
}) {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    async function getcity() {
      try {
        // setLoading(true);
        const response = await axios.get(`${BASE_URL}/cities`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const response2 = await axios.get(`${BASE_URL}/regions`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRegions(response2.data);
        setCities(response.data);

        setformData((prev) => ({
          ...prev,
          city_id: `${response.data[0].id}`,
        }));
        setformData((prev) => ({
          ...prev,
          region_id: `${response2.data[0].id}`,
        }));
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
        console.error(error);
      }
    }
    getcity();
  }, []);

  return (
    <>
      <h3>მდებარეობა</h3>
      <form action="" className={styles.conteiner}>
        <label>
          მისამართი*
          <input
            type="text"
            name="address"
            className={
              error?.address?.length > 0 ? styles.error : styles.option
            }
            value={address}
            onChange={change}
          />
          {error?.address?.length > 0 ? (
            <>
              <ErrorBox error={error.address} />
            </>
          ) : (
            <>
              <img src={checkSing} alt="" />
              <p className={styles.Pstyles}>მინიმუმ ორი სიმბოლო</p>
            </>
          )}
        </label>

        <label>
          საფოსტო ინდექსი*
          <input
            type="text"
            className={
              error?.zip_code?.length > 0 ? styles.error : styles.option
            }
            value={mailindex}
            onChange={setMailindex}
            name="zip_code"
          />
          {error?.zip_code?.length > 0 ? (
            <ErrorBox error={error.zip_code} />
          ) : (
            <>
              <img src={checkSing} alt="" />
              <p className={styles.Pstyles}>მხოლოდ რიცხვები</p>
            </>
          )}
        </label>
        <label>
          რეგიონი
          <select
            className={styles.selectOption}
            value={region}
            onChange={setRegion}
            name="region_id"
          >
            {regions.map((region) => (
              <option value={region.id} key={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          ქალაქი
          <select
            className={styles.selectOption}
            onChange={setCity}
            value={city}
            name="city_id"
          >
            {cities.map((city) => (
              <option value={city.id} key={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </label>
      </form>
    </>
  );
}

export default Location;
