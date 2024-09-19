/* eslint-disable react/prop-types */
import RedcheckSing from "../icon/RedCheckSign.svg";
import styles from "./ErrorBox.module.css";
function ErrorBox({ error }) {
  return (
    <>
      <img src={RedcheckSing} alt="" className={styles.errorText} />
      <p className={styles.errorText}>{error}</p>
    </>
  );
}

export default ErrorBox;
