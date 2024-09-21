/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./Agent.module.css";

const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";

function Agent({ getAgents_id, hanldeAgentAdd }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function getAgents() {
      try {
        const response = await axios.get(`${BASE_URL}/agents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setAgents(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAgents();
  }, []);

  return (
    <>
      <form className={styles.conteiner}>
        <h3>აგენტი</h3>
        <label htmlFor="">
          {" "}
          აირჩიე
          <select
            name="agent_id"
            className={styles.selectorStyle}
            value={getAgents_id}
            onChange={hanldeAgentAdd}
          >
            {agents.map((agent) => (
              <option key={agent.name} value={agent.id}>
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
