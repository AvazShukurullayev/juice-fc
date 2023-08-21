import { useEffect, useState } from "react";
import JuiceCard from "../juice-card/JuiceCard";
import juiceApi from "../../juiceApi";
import "./JuiceCards.css";

const JuiceCards = () => {
  const [juiceArray, setJuiceArray] = useState([]);

  useEffect(() => {
    setJuiceArray(juiceApi);
    console.log("Mounting");
  }, []);

  return (
    <div className="juice-cards">
      <div className="container">
        <h1 className="text-center juice-title my-5 font-monospace">Juice</h1>
        <div className="row">
          {juiceArray.map((juice) => (
            <JuiceCard key={juice.id} juice={juice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuiceCards;
