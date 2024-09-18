import styles from "./AddListingBTN.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function AddListingBTN() {
  return (
    <div className={styles.conteiner}>
      <Link to="listAdd">
        <Button
          ButtonText="ლისტინგის დამატება"
          leftEmoji={<i className="fa-solid fa-plus"></i>}
          className={styles.btn}
        />
      </Link>
    </div>
  );
}

export default AddListingBTN;
