/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./AgentAdd.module.css";
function AgentAdd({ setAgentdrop }) {
  function handleDrop() {
    setAgentdrop((stat) => !stat);
  }
  return (
    <>
      <div className={styles.conteiner}>
        <Button
          ButtonText={"აგენტის დამატება"}
          leftEmoji={<i className="fa-solid fa-plus"></i>}
          className={styles.btn}
          onClick={handleDrop}
        />
      </div>
    </>
  );
}

export default AgentAdd;
