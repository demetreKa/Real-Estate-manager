// import TransactionType from "../Components/ListingComponents/TransactionType";
// import Location from "../Components/ListingComponents/Location";
// import Button from "../Components/Button/Button";
// import styles from "./ListingAdd.module.css";
// import HouseDetails from "../Components/ListingComponents/houseDetails";
// import Agent from "../Components/ListingComponents/Agent";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// const BASE_URL = "https://api.real-estate-manager.redberryinternship.ge/api";
// const token = "9cfc7fe8-0798-4b21-be5e-28fef3ebd98d";
// function ListingAdd() {
//   const [location, setLocation] = useState();
//   const [mailindex, setMailindex] = useState();
//   const [region, setRegion] = useState();
//   const [city, setCity] = useState();
//   const [price, setPrice] = useState(0);
//   const [width, setWidth] = useState("");
//   const [bedNumber, setBedNumber] = useState();
//   const [description, setDescription] = useState();
//   const [formData, setformData] = useState({
//     address: "",
//     region_id: 1,
//     description: "",
//     city_id: 1,
//     zip_code: "",
//     price: 0,
//     area: 0,
//     bedrooms: "",
//     is_rental: 0,
//     agent_id: 99,
//   });
//   const [image, setImage] = useState("");
//   function handlepriceAdd(e) {
//     const newPrice = Number(e.target.value);
//     if (!isNaN(newPrice) && newPrice >= 0) {
//       setPrice(newPrice);
//     }
//   }
//   function HandleWidthAdd(e) {
//     const newPrice = e.target.value;
//     if (!isNaN(newPrice) && newPrice >= 0) {
//       setWidth(newPrice);
//     }
//   }
//   function HandleBedNumber(e) {
//     const BedNumber = Number(e.target.value);
//     if (!isNaN(BedNumber) && BedNumber >= 0) {
//       setBedNumber(BedNumber);
//     }
//   }

//   const [agents, setAgents] = useState([]);
//   useEffect(() => {
//     async function getAgents() {
//       try {
//         // setLoading(true);
//         const response = await axios.get(`${BASE_URL}/agents`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setAgents(response.data);
//         // setLoading(false);
//       } catch (error) {
//         // setError(error);
//         // setLoading(false);
//         console.error(error);
//       }
//     }
//     getAgents();
//   }, []);

//   useEffect(
//     function () {
//       setformData({
//         ...formData,
//         address: location,
//         region_id: 1,
//         description,
//         city_id: 1,
//         zip_code: mailindex,
//         price,
//         area: width,
//         bedrooms: bedNumber,
//         is_rental: "0",
//         agent_id: "99",
//       });
//     },

//     [description, location, mailindex, width, bedNumber, price]
//   );

//   console.log(formData);
//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
//         formData
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className={styles.conteiner}>
//       <form action="" onSubmit={handleSubmit}>
//         <section className={styles.transaction}>
//           <TransactionType />
//         </section>
//         <section>
//           <Location
//             location={location}
//             setLocation={setLocation}
//             mailindex={mailindex}
//             setMailindex={setMailindex}
//             setCity={setCity}
//             city={city}
//             region={region}
//             setRegion={setRegion}
//           />
//         </section>
//         <section>
//           <HouseDetails
//             price={price}
//             handlepriceAdd={handlepriceAdd}
//             width={width}
//             HandleWidthAdd={HandleWidthAdd}
//             bedNumber={bedNumber}
//             HandleBedNumber={HandleBedNumber}
//             description={description}
//             setDescription={setDescription}
//             image={image}
//             setImage={setImage}
//           />
//         </section>
//         <section>
//           <Agent agents={agents} />
//         </section>
//         <div className={styles.btnConteiner}>
//           <Link to="/">
//             <Button ButtonText="გაუქმება" className={styles.btn} />{" "}
//           </Link>

//           <input type="submit" className={styles.secBtn} />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ListingAdd;
