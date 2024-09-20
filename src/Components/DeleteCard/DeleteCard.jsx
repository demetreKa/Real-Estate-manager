/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./DeleteCard.module.css";
import { useEffect } from "react";
function DeleteCard({ onClick, setPopCard, popCard }) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popCard && !event.target.closest(`.${styles.conteiner} `)) {
        setPopCard(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popCard, setPopCard]);
  return (
    <div className={styles.conteiner}>
      <div className={styles.box}>
        <h1 className={styles.header}>გსურთ წაშალოთ ლისტინგი</h1>
        <div>
          <button className={styles.btn} onClick={() => setPopCard(false)}>
            გაუქმება
          </button>
          <Link to="/">
            <button className={styles.secBtn} onClick={onClick}>
              დადასტურება
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeleteCard;
