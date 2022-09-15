import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        8thGear<Link to="constructionpage"> Project</Link>
        8thGear<Link to="teampage"> Project</Link>
        8thGear<Link to="events"> Project</Link>
      </h1>
    </div>
  );
};

export default Home;
