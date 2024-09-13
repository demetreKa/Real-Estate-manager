import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LayoutElement from "./Pages/LayoutElement";
const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
function App() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  useEffect(() => {
    async function getrealestate() {
      try {
        // setLoading(true);
        const response = await axios.get(`${BASE_URL}/cities`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData(response.data);
        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
        console.error(error);
      }
    }

    getrealestate();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<LayoutElement data={data} setData={setData} />}
        />
        <Route path="Sales" element={<p>this is sales element</p>} />
        <Route path="Agents" element={<p>this is Agents element</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
