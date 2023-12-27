import data from "../data/data";
import img from "../assets/images/lyuda2.jpg";
import { Link } from "react-router-dom";

const Lyuda: React.FC = () => {
  const human = data.filter((item) => item.name == "Люда")[0];

  return (
    <>
      <Link to="/start" className="btnBack">
        <p>Вернуться</p>
      </Link>
      <div className="human">
        <main>
          <img src={img} className="human__img" />
          <p>{human.name}</p>
          <p>{human.birthday}</p>
        </main>
        <p className="about">{human.about}</p>
        <aside className="predictions">
          <p>{human.predictionsYear}</p>
          <p>{human.predictionsZodiac}</p>
        </aside>
      </div>
    </>
  );
};
export default Lyuda;
