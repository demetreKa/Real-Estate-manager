/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "../Button/Button";
import styles from "./BedNumber.module.css";
function BedNumber({
  onbedDrop,
  drop,
  setNumberOFbeds,
  filterActivation,
  setBeddrop,
  numberOfBeds,
}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (onbedDrop && !event.target.closest(`.dropDown`)) {
        setBeddrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onbedDrop, setBeddrop]);

  return (
    <div className="dropDown">
      <Button
        ButtonText={"საძინებლების რაოდენობა"}
        RightEmoji={<i className="fa-solid fa-chevron-down fa-sm"></i>}
        onClick={onbedDrop}
      />
      {drop ? (
        <div className={styles.conteiner}>
          <h3>საძინებლების რაოდენობა</h3>
          <div className={styles.grid}>
            <button
              value="1"
              onClick={(e) => setNumberOFbeds(e.target.value)}
              className={numberOfBeds === "1" ? styles.actvie : styles.inactive}
            >
              1
            </button>
            <button
              value="2"
              onClick={(e) => setNumberOFbeds(e.target.value)}
              className={numberOfBeds === "2" ? styles.actvie : styles.inactive}
            >
              2
            </button>
            <button
              value="3"
              onClick={(e) => setNumberOFbeds(e.target.value)}
              className={numberOfBeds === "3" ? styles.actvie : styles.inactive}
            >
              3
            </button>
            <button
              value="4"
              onClick={(e) => setNumberOFbeds(e.target.value)}
              className={numberOfBeds === "4" ? styles.actvie : styles.inactive}
            >
              4
            </button>
            <button
              value="5"
              onClick={(e) => setNumberOFbeds(e.target.value)}
              className={numberOfBeds === "5" ? styles.actvie : styles.inactive}
            >
              5
            </button>
          </div>
          <div className="buttonToLeft">
            <button className="btn">
              <span className="text" onClick={filterActivation}>
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

export default BedNumber;
