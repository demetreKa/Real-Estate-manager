/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./DropDownComponent.module.css";

function Pricing({
  header,
  MinProperty,
  MaxProperty,
  onClick,
  ButtonText,
  drop,
  margin,
}) {
  return (
    <li style={{ marginLeft: margin }}>
      <Button onClick={onClick} ButtonText={ButtonText} />
      {drop ? (
        <div className={styles.boxShadow}>
          <h4 className={styles.Header}>{header}</h4>
          <div className={styles.PriceDropDown}>
            <div className={styles.InputFiels}>
              <input type="text" placeholder="დან" />
              <input type="text" placeholder="მდე" />
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

          <button className={styles.btn}>არჩევა</button>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default Pricing;
