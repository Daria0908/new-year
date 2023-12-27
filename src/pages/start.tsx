import { Link } from "react-router-dom";
import data from "../data/data";
import marik from "../assets/images/marik.jpg";
import dasha from "../assets/images/dasha.jpg";
import danya from "../assets/images/danya.jpg";
import egor from "../assets/images/egor.jpg";
import lyuda from "../assets/images/lyuda.jpg";
import kir from "../assets/images/kir.jpg";
import pepa from "../assets/images/pepa.jpg";
import roma from "../assets/images/roma.jpg";
import vasya from "../assets/images/vasya.jpg";

const Start: React.FC = () => {
  const FuncSwitch = (name: string) => {
    switch (name) {
      case "marik":
        return marik;
        break;
      case "danya":
        return danya;
        break;
      case "dasha":
        return dasha;
        break;
      case "egor":
        return egor;
        break;
      case "kir":
        return kir;
        break;
      case "lyuda":
        return lyuda;
        break;
      case "pepa":
        return pepa;
        break;
      case "roma":
        return roma;
        break;
      case "vasya":
        return vasya;
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Link to="/" className="btnBack">
        <p>Вернуться</p>
      </Link>
      <div className="photos">
        {data.map((item, i) => (
          <Link className="link" to={`/${item.link}`}>
            <div key={i} className="photo">
              <img src={FuncSwitch(item.link)} className="img" />
              <h2 className="name">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Start;
