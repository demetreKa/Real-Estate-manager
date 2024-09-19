/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Agent.module.css";

function Agent({ agents, getAgents, hanldeAgentAdd }) {
  return (
    <>
      <form className={styles.conteiner}>
        <h3>აგენტი</h3>
        <label htmlFor="">
          {" "}
          აირჩიე
          <select
            name="agent_id"
            id=""
            className={styles.selectorStyle}
            value={getAgents}
            onChange={hanldeAgentAdd}
          >
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
          </select>
        </label>
        <Button />
      </form>
    </>
  );
}

export default Agent;
