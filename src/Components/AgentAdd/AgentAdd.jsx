import Button from "../Button/Button";
import styles from "./AgentAdd.module.css";
function AgentAdd() {
  return (
    <div className={styles.conteiner}>
      <Button
        ButtonText={"აგენტის დამატება"}
        leftEmoji={<i className="fa-solid fa-plus"></i>}
        className={styles.btn}
      />
    </div>
  );
}

export default AgentAdd;
