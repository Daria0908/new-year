import { Link } from "react-router-dom";
import fail from "../assets/images/fail.jpg";

const Fail: React.FC = () => {
  return (
    <>
      <Link to="/" className="btnBack">
        <p>Вернуться</p>
      </Link>
      <img src={fail} className="imgFail" />
    </>
  );
};

export default Fail;
