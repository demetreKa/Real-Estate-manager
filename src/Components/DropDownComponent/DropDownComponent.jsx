/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./DropDownComponent.module.css";

function DropDownComponent({
  header,
  MinProperty,
  MaxProperty,
  onClick,
  ButtonText,
  drop,
  minName,
  maxName,
  action,
  minVal,
  maxVal,
  filterActivation,
}) {
  return (
    <li>
      <Button
        onClick={onClick}
        ButtonText={ButtonText}
        RightEmoji={<i className="fa-solid fa-chevron-down fa-sm"></i>}
        className={styles.btndrop}
      />
      {drop ? (
        <div className={styles.Conteiner}>
          <h4 className={styles.Header}>{header}</h4>
          <div className={styles.PriceDropDown}>
            <div className={styles.InputFiels}>
              <input
                type="text"
                placeholder="დან"
                name={minName}
                onChange={action}
                value={minVal}
              />
              <input
                type="text"
                placeholder="მდე"
                name={maxName}
                onChange={action}
                value={maxVal}
              />
            </div>

            <div className={styles.textArea}>
              <div>
                <span>{MinProperty}</span>
                <p>50000</p>
                <p>100000</p>
                <p>150000</p>
                <p>200000</p>
                <p>250000</p>
              </div>
              <div>
                <span>{MaxProperty}</span>
                <p>50000</p>
                <p>100000</p>
                <p>150000</p>
                <p>200000</p>
                <p>250000</p>
              </div>
            </div>
          </div>

          <div className="buttonToLeft">
            <button className="btn" onClick={filterActivation}>
              <span className="text">არჩევა</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default DropDownComponent;
