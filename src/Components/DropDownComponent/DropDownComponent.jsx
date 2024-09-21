/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./DropDownComponent.module.css";
import { useEffect } from "react";
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
  style,
  setDrop,
  onEvent,
  onMaxEvent,
}) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drop && !event.target.closest(`.${style}`)) {
        setDrop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drop, setDrop, style]);
  return (
    <div className={style}>
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
                <button
                  className={styles.chose}
                  onClick={(e) => onEvent(Number(e.target.value))}
                  value={50000}
                >
                  50000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onEvent(Number(e.target.value))}
                  value={100000}
                >
                  100000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onEvent(Number(e.target.value))}
                  value={150000}
                >
                  150000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onEvent(Number(e.target.value))}
                  value={200000}
                >
                  200000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onEvent(Number(e.target.value))}
                  value={250000}
                >
                  250000
                </button>
              </div>
              <div>
                <p className={styles.chose}>{MaxProperty}</p>
                <button
                  className={styles.chose}
                  onClick={(e) => onMaxEvent(Number(e.target.value))}
                  value="50000"
                >
                  50000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onMaxEvent(Number(e.target.value))}
                  value={100000}
                >
                  100000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onMaxEvent(Number(e.target.value))}
                  value={150000}
                >
                  150000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onMaxEvent(Number(e.target.value))}
                  value={200000}
                >
                  200000
                </button>
                <button
                  className={styles.chose}
                  onClick={(e) => onMaxEvent(Number(e.target.value))}
                  value={250000}
                >
                  250000
                </button>
              </div>
            </div>
          </div>

          <div className="buttonToLeft">
            <button className="btn" onClick={filterActivation}>
              <span className="text" onClick={() => setDrop(false)}>
                არჩევა
              </span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DropDownComponent;
