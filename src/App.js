import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cardOne, setCardOne] = useState({
    title: "⛰️ MatheRan",
    city: "📍 Raigad "
  });
  const [cardTwo, setCardTwo] = useState({
    title: "⛰️Lonavala",
    city: "📍 pune"
  });
  const [cardThree, setCardThree] = useState({
    title: " ⛰️ Khandala",
    city: "📍 Satara"
  });
  return (
    <div className="App">
      <h2 className="heading"> PlaceMate </h2>
      <h5 className="intro">
        {" "}
        Checkout the best places to visit in Maharashtra{" "}
      </h5>

      <div className="btn">
        <button
          onClick={() => {
            setCardOne({ title: "⛰️ MatheRan", city: "📍 Raigad " });
            setCardTwo({ title: "⛰️ Lonavala", city: "📍 pune" });
            setCardThree({ title: "⛰️ Khandala", city: "📍 Satara" });
          }}
        >
          {" "}
          ⛰️ Hill Stations{" "}
        </button>
        <button
          onClick={() => {
            setCardOne({
              title: "🏖️ Ganapatipule Beach",
              city: "📍 Ratnagiri"
            });
            setCardTwo({ title: "🏖️ Dahanu-Bordi Beach", city: "📍 Palghar" });
            setCardThree({ title: "🏖️ Mandwa Beach", city: "📍 Raigad" });
          }}
        >
          {" "}
          🏖️ Beaches{" "}
        </button>

        <button
          onClick={() => {
            setCardOne({ title: "🏰 Raigad ", city: "📍 Raigad " });
            setCardTwo({ title: "🏰 Pratapgad", city: "📍 Satara " });
            setCardThree({ title: "🏰 Shaniwarwada", city: "📍 Pune" });
          }}
        >
          {" "}
          🏰 Forts{" "}
        </button>
      </div>

      <div className="cardcontainer">
        <div className="card">
          <h3> {cardOne.title} </h3>
          <h5> {cardOne.city} </h5>
        </div>
        <div className="card">
          <h3> {cardTwo.title} </h3>
          <h5> {cardTwo.city} </h5>
        </div>
        <div className="card">
          <h3> {cardThree.title} </h3>
          <h5> {cardThree.city} </h5>
        </div>
      </div>
    </div>
  );
}
