/* eslint-disable react/prop-types */
import styles from "./TransactionType.module.css";

function TransactionType({ onRentalChange }) {
  return (
    <>
      <h3 className={styles.header}>გარიგების ტიპი</h3>
      <div className={styles.roundOptins}>
        <label className={styles.roundOptin}>
          <div>
            <input
              type="radio"
              name="is_rental"
              value={1}
              onChange={onRentalChange}
            />
            <span className={styles.textCss}>იყიდება</span>
          </div>
        </label>
        <label className={styles.roundOptin}>
          <div>
            <input
              type="radio"
              name="is_rental"
              value={0}
              onChange={onRentalChange}
            />
            <span className={styles.textCss}>ქირავდება</span>
          </div>
        </label>
      </div>
    </>
  );
}

export default TransactionType;
