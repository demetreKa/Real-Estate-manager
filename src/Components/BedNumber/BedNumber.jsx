/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "../Button/Button";
import styles from "./BedNumber.module.css";
function BedNumber({
  onbedDrop,
  drop,
  filterActivation,
  setBeddrop,
  numberOfBeds,
  handleChange,
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

          <input
            type="text"
            name="bedrooms"
            onChange={handleChange}
            value={numberOfBeds}
            className={styles.grid}
          />

          <div className="buttonToLeft">
            <button className="btn" onClick={() => setBeddrop(false)}>
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
