import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cardOne, setCardOne] = useState({
    title: "β°οΈ MatheRan",
    city: "π Raigad "
  });
  const [cardTwo, setCardTwo] = useState({
    title: "β°οΈLonavala",
    city: "π pune"
  });
  const [cardThree, setCardThree] = useState({
    title: " β°οΈ Khandala",
    city: "π Satara"
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
            setCardOne({ title: "β°οΈ MatheRan", city: "π Raigad " });
            setCardTwo({ title: "β°οΈ Lonavala", city: "π pune" });
            setCardThree({ title: "β°οΈ Khandala", city: "π Satara" });
          }}
        >
          {" "}
          β°οΈ Hill Stations{" "}
        </button>
        <button
          onClick={() => {
            setCardOne({
              title: "ποΈ Ganapatipule Beach",
              city: "π Ratnagiri"
            });
            setCardTwo({ title: "ποΈ Dahanu-Bordi Beach", city: "π Palghar" });
            setCardThree({ title: "ποΈ Mandwa Beach", city: "π Raigad" });
          }}
        >
          {" "}
          ποΈ Beaches{" "}
        </button>

        <button
          onClick={() => {
            setCardOne({ title: "π° Raigad ", city: "π Raigad " });
            setCardTwo({ title: "π° Pratapgad", city: "π Satara " });
            setCardThree({ title: "π° Shaniwarwada", city: "π Pune" });
          }}
        >
          {" "}
          π° Forts{" "}
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
