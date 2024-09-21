import MainPage from "./Pages/MainPage";
import ListingAdd from "./Pages/ListingAdd";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ChosenHouse from "./Pages/ChosenHouse";

const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function App() {
  const [data, setData] = useState([]);
  const [houseid, setHouseid] = useState(() => {
    const storedData = localStorage.getItem("houseId");
    return storedData ? JSON.parse(storedData) : " ";
  });
  useEffect(function () {
    localStorage.setItem("houseId", JSON.stringify(houseid));
    return () => {
      localStorage.clear();
    };
  });
  useEffect(() => {
    async function getrealestate() {
      try {
        const response = await axios.get(`${BASE_URL}/real-estates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getrealestate();
  }, []);
  console.log(data);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <MainPage
              data={data}
              setData={setData}
              setHouseid={setHouseid}
              houseid={houseid}
            />
          }
        />
        <Route path="listAdd" element={<ListingAdd />} />
        <Route
          path="chosenHouse"
          element={
            <ChosenHouse
              houseid={houseid}
              houses={data}
              setHouseid={setHouseid}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
