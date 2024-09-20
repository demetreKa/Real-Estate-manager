/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import styles from "./AgentAdd.module.css";
import AgentAddForm from "../AgentAddForm/AgentAddForm.jsx";
function AgentAdd({ setAgentdrop, agentdrop }) {
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

      {agentdrop ? <AgentAddForm setAgentdrop={setAgentdrop} agentdrop={agentdrop} /> : " "}
    </>
  );
}

export default AgentAdd;
