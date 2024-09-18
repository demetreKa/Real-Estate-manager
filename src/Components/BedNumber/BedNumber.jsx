/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./BedNumber.module.css";
function BedNumber({ onbedDrop, drop }) {
  return (
    <div>
      <Button
        ButtonText={"საძინებლების რაოდენობა"}
        RightEmoji={<i className="fa-solid fa-chevron-down fa-sm"></i>}
        onClick={onbedDrop}
      />
      {drop ? (
        <div className={styles.conteiner}>
          <h3>საძინებლების რაოდენობა</h3>
          <div className={styles.grid}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div className="buttonToLeft">
            <button className="btn">
              <span className="text">არჩევა</span>
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
