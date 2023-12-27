import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <h1>Вы готовы, дети?</h1>
      <div className="btns">
        <Link to="/start">
          <h2>Да, капитан!</h2>
        </Link>
        <Link to="/fail">
          <h2>Ни за что</h2>
        </Link>
      </div>
    </>
  );
};

export default Home;
